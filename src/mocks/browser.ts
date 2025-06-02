import { setupWorker } from 'msw/browser';

import { handlers } from './handler';

const worker = setupWorker(...handlers);
globalThis.worker = worker;

export { worker };
