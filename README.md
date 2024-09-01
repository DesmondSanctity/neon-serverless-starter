## Fullstack Serverless Starter with Hono.js, Cloudflare Workers and Neon Postgres.

This is a starter project for a fullstack serverless application using Hono.js, Cloudflare Workers, and Neon Postgres. It is a simple CRUD application that allows you to create, read, update, and delete posts. It also has provisions for building user interfaces using HTML and CSS.

### Prerequisites

- Node.js and npm installed
- [Cloudflare Workers](https://workers.cloudflare.com/) account
- [Neon Postgres](https://neon.tech) account and database

### Project structure

The project structure is as follows:

```
---docs
    |-- schemas.ts
---prisma
    |-- schema.prisma
---public
    |-- images.*png,jpg,svg
    |-- favicon.ico
---src
    |-- configs
    |-- controllers
    |-- middlewares
    |-- queries
    |-- routes
    |-- validations
    |-- views
    |-- index.ts
---utils
    |-- constants.js
---tsconfig.json
---wrangler.toml
---package.json
---package-lock.json
---README.md
```

- The docs folder contains the OpenAPI schemas for generating documentation for the application. It uses [@hono/zod-openapi](https://hono.dev/examples/zod-openapi) to generate the schemas. Only the schemas is documented in this starter.
- The prisma folder contains the database schema and migration files.
- The public folder contains the static assets for the application.
- The src folder contains the source code for the application.
  - The configs folder contains the configuration files for the application. Eg: `config.ts`, `db.ts`, etc.
  - The controllers folder contains the controller logic for the application.
  - The middlewares folder contains the middleware logic for the application. Eg: `auth.ts`, `logger.ts`, etc.
  - The queries folder contains the database query functions for the application.The controllers uses these functions to interact with the database.
  - The routes folder contains the route definitions for the application.
  - The validations folder contains the validation functions for the incoming requests to application.
  - The views folder contains the HTML and Tailwind CSS files for the application.
- The utils folder contains the utility/helper files.
- The `tsconfig.json` file contains the TypeScript configuration for the application.
- The `wrangler.toml` file contains the configuration for the Cloudflare Workers deployment.
- The `package.json` file contains the dependencies and scripts for the application.

### What is included?

- Authentication using JWT.
- Database interaction using [Prisma](https://www.prisma.io).
- Middleware for authentication and logging.
- Validation using [Zod](https://zod.dev).
- Secure Headers.
- Error handling.
- Deployment to Cloudflare.
- Pagination for getAll endpoints.
- Search functionality for getAll endpoints.
- Sorting for getAll endpoints.
- Filtering for getAll endpoints.
- AI Bindings to use [Workers AI](https://developers.cloudflare.com/workers-ai/).
- [Twind](https://twind.dev) configuration that allows use of Tailwind CSS in Cloudflare Workers through SSR.
- Serving of static assets.
- Support for OpenAPI documentation.
- Example user interfaces using HTML and CSS.

### Getting Started

To get started, clone the repository and run the following commands:

```bash
npm install
```

This will install all the necessary dependencies.

Create a `.dev.vars` file in the root directory of the project and add the following environment variables:

```bash
DATABASE_URL=<your-neon-database-url>
JWT_SECRET=<your-jwt-secret>
```

Replace the values with your own values.

Next, run the following command to generate the Prisma client:

```bash
npx prisma generate
```

This will generate the Prisma client, which will be used to interact with the database. When you make any chnages to the schema, you will need to run this command again to update the client. You will also need to do migration to synchronize the database with the schema in production.

Prisma migrate commands:

```bash
npm run env -- npx prisma migrate dev --name init
```

This will use your `.dev.vars` or `.env` file to connect to the database and create a migration.

> Note: The way Prisma work in the serverless environment is different from the way in a normal self hosted server apps. In the serverless environment, you will need to use adapters to connect to the database. This starter uses the `@prisma/adapter-neon` package as adapter.

To run the application locally, run the following command:

```bash
npx wrangler dev
```

or

```
npm run dev
```

You must have the Cloudflare Wrangler CLI installed. If you don't have it installed, you will be prompted to install it or you can install it by running the following command:

```bash
npm install -g wrangler
```

### Deployment

To deploy the application to Cloudflare, run the following command:

```bash
npx wrangler deploy
```
