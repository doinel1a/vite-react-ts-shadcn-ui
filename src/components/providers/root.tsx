import React from 'react';

import type { PropsWithChildren } from 'react';

import ThemeProvider from './theme';

type TRootProvider = PropsWithChildren;

export default function RootProvider({ children }: Readonly<TRootProvider>) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
