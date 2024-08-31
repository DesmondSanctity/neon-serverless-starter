import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'
import { prettyJSON } from 'hono/pretty-json'
import manifest from '__STATIC_CONTENT_MANIFEST';
import { extract, install } from '@twind/core';
import presetTailwind from '@twind/preset-tailwind';
import { secureHeaders } from './middlewares/header'
import { jwtAuth } from './middlewares/jwt'
import { authRoutes } from './routes/auth'
import { aiRoutes } from './routes/ai'
import { userRoutes } from './routes/user';

install({
  presets: [
    presetTailwind(),
    {
      theme: {
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
          serif: ['Merriweather', 'serif'],
        },
      },
    },
  ],
});

async function ssrTwind(body: string) {
  const { html, css } = extract((await body).toString());
  return html.replace('</head>', `<style data-twind>${css}</style><head>`);
}

// Define the Env interface
interface Env {
  AI: Ai
}

const app = new Hono<{ Bindings: Env }>()

// Middleware
app.use('*', secureHeaders())
app.use('/api/*', jwtAuth())

// Routes
app.get('/', (c) => c.text('Pretty Users API'))
app.use('*', prettyJSON())
app.notFound((c) => c.json({ message: 'Route Not Found', ok: false }, 404))

app.route('/auth', authRoutes)
app.route('/api/ai', aiRoutes)
app.route('/api/user', userRoutes)

// Pages
app.get('/', (c) => {
  return c.html(ssrTwind(homeHTML));
});

app.get('/signup', (c) => {
  return c.html(ssrTwind(formHTML));
});

app.get('/login', (c) => {
  return c.html(ssrTwind(formHTML));
});

app.get('/chatbox', (c) => {
  return c.html(ssrTwind(chartHTML));
});


// Static files
app.get('/*', serveStatic({ root: './', manifest }));

export default app

