import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'https://reqres.in'
  },
  projects: [
    {
      name: 'API',
      testMatch: /.*\.spec\.ts/
    }
  ]
});