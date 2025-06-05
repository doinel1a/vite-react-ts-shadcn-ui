import { StrictMode, useEffect } from 'react';

import { createRouter, RouterProvider } from '@tanstack/react-router';

import { DefaultCatchBoundary } from '@/core/components/default-catch-bounrdary';
import { NotFound } from '@/core/components/not-found';
// Import the generated route tree
import { routeTree } from '@/routeTree.gen';
import { useThemeStore } from '@/stores/theme';

// Create a new router instance
const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  basepath: import.meta.env.VITE_BASE_PATH,
  defaultErrorComponent: DefaultCatchBoundary,
  defaultNotFoundComponent: () => <NotFound />
});
// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

function App() {
  const setTheme = useThemeStore((state) => state.setTheme);

  useEffect(() => {
    const theme = useThemeStore.getState().theme;
    setTheme(theme);
  }, []);
  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}

export default App;
