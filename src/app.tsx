import { StrictMode, useEffect } from 'react';

import { createRouter, RouterProvider } from '@tanstack/react-router';

// Import the generated route tree
import { routeTree } from './routeTree.gen';
import { useThemeStore } from './stores/theme';

// Create a new router instance
const router = createRouter({ routeTree });
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
