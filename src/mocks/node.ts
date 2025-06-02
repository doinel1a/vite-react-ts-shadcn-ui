// Title: MSW Mock Service Worker for Node.js
// Description: Define mocks reusable across different tools and environments.

import { setupServer } from 'msw/node';

import { handlers } from './handler';

export const server = setupServer(...handlers);
