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
import { chatRoutes } from './routes/chat';
import { signupHTML } from './views/signup';
import { loginHTML } from './views/login';
import { chatHTML } from './views/chatbox';
import { chatsHTML } from './views/chats';
import { homeHTML } from './views/home';
import { settingsHTML } from './views/settings';

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
  const { html, css } = extract((body).toString());
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
app.get('/health', (c) => c.text('Pretty Users API'))
app.use('*', prettyJSON())
app.notFound((c) => c.json({ message: 'Route Not Found', ok: false }, 404))

app.route('/auth', authRoutes)
app.route('/api/ai', aiRoutes)
app.route('/api/user', userRoutes)
app.route('/api/chat', chatRoutes)

// Pages
app.get('/', async (c) => {
  return c.html(await ssrTwind(homeHTML));
});

app.get('/signup', async (c) => {
  return c.html(await ssrTwind(signupHTML));
});

app.get('/login', async (c) => {
  return c.html(await ssrTwind(loginHTML));
});

app.get('/settings', async (c) => {
  return c.html(await ssrTwind(settingsHTML));
});

app.get('/chatbox', async (c) => {
  return c.html(await ssrTwind(chatHTML));
});

app.get('/chats', async (c) => {
  return c.html(await ssrTwind(chatsHTML));
});


// Static files
app.get('/*', serveStatic({ root: './', manifest }));

export default app

