import { createContext, use, useEffect, useState } from 'react';

import type { ReactNode } from 'react';

import { storageKeys } from '@/lib/constants/keys';

type Theme = 'dark' | 'light' | 'system';

type ThemeProvider = {
  children: ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: 'system',
  setTheme: () => null
};

const ThemeProviderContext = createContext(initialState);

export default function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = storageKeys.theme,
  ...properties
}: Readonly<ThemeProvider>) {
  const [theme, setTheme] = useState<Theme>(() => {
    const storedTheme = localStorage.getItem(storageKey) as Theme | null;
    return storedTheme ?? defaultTheme;
  });

  useEffect(() => {
    const root = globalThis.document.documentElement;
    root.classList.remove('light', 'dark');

    if (theme === 'system') {
      const systemTheme = globalThis.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    }
  };

  return (
    <ThemeProviderContext {...properties} value={value}>
      {children}
    </ThemeProviderContext>
  );
}

export const useTheme = () => {
  const context = use(ThemeProviderContext);
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (context == undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};
