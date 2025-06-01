import React, { createContext, use, useEffect, useState } from 'react';

import EStorageKeys from '../constants/keys';

type Theme = 'dark' | 'light' | 'system';

type ThemeProviderProperties = {
  readonly children: React.ReactNode;
  readonly defaultTheme?: Theme;
  readonly storageKey?: EStorageKeys.theme;
  readonly y?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: 'system',
  // eslint-disable-next-line unicorn/no-null
  setTheme: () => null
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export default function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = EStorageKeys.theme,
  ...properties
}: ThemeProviderProperties) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );

  useEffect(() => {
    const root = globalThis.document.documentElement;

    root.classList.remove('light', 'dark');

    if (theme === 'system') {
      const systemTheme = globalThis.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
      console.log(`Setting system theme: ${systemTheme}`);
      root.classList.add(systemTheme);
      return;
    }
    console.log(`Setting theme: ${theme}`);
    root.classList.add(theme);
  }, [theme]);

  const value = React.useMemo(
    () => ({
      theme,
      setTheme: (theme: Theme) => {
        console.log(`Setting theme to: ${theme}`);
        localStorage.setItem(storageKey, theme);
        setTheme(theme);
      }
    }),
    [theme, setTheme, storageKey]
  );

  return (
    <ThemeProviderContext {...properties} value={value}>
      {children}
    </ThemeProviderContext>
  );
}

export const useTheme = () => {
  const context = use(ThemeProviderContext);

  if (context === undefined) throw new Error('useTheme must be used within a ThemeProvider');

  return context;
};
