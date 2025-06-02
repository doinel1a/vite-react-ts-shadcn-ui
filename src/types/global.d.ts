/* eslint-disable no-var */
import type { SetupWorker } from 'msw/browser';

export {};

declare global {
  var worker: SetupWorker | undefined;
}
