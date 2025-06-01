import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import EStorageKeys from '../constants/keys';

export type Theme = 'dark' | 'light' | 'system';

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.remove('light', 'dark');

  if (theme === 'system') {
    const prefersDark = globalThis.matchMedia('(prefers-color-scheme: dark)').matches;
    root.classList.add(prefersDark ? 'dark' : 'light');
  } else {
    root.classList.add(theme);
  }
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: 'system', // Default theme, overridden by localStorage if available
      setTheme: (theme: Theme) => {
        applyTheme(theme);
        set({ theme });
      }
    }),
    {
      name: EStorageKeys.theme,
      storage: createJSONStorage(() => localStorage)
    }
  )
);
