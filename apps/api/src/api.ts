import { Elysia } from 'elysia';
import { config } from '@goat-repo/config';

import { MONOREPO_NAME } from '@goat-repo/shared/constants';
import { programmingLang } from '@goat-repo/shared/types';


const app = new Elysia()
  .get('/home', () => {
    return {
      message: `Welcome to ${MONOREPO_NAME}!`,
    }
  })
  .post('/lang', ({ body: lang }) => {
    return lang;
  },
  /* validation */
  {
    body: programmingLang,
    response: {
      200: programmingLang,
    }
  }
)
.listen(config.server.port);

export type App = typeof app;

console.log(
  `🦊 Elysia is up and running at ${app.server?.hostname}:${app.server?.port}`
);
