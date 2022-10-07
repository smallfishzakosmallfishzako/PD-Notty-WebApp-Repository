import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: "nottywebapp",
  apiKey: process.env.API_KEY,
});