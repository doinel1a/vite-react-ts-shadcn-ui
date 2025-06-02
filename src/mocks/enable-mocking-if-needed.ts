export async function enableMockingIfNeeded() {
  if (import.meta.env.PROD) {
    return;
  }

  console.info('Mocking is enabled. Starting the worker...');

  const { worker } = await import('@/mocks/browser');

  // `worker.start()`returns a Promise that resolves when the worker is ready to intercept requests.
  if (!worker) {
    console.error('Mocking is enabled, but the worker is not defined.');
    return;
  }
  return worker.start();
}
