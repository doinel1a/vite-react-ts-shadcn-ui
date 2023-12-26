import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import Counter from './components/counter';
import GithubCorner from './components/github-corner';
import { ThemeProvider } from './components/ui/theme/provider';
import EStorageKeys from './constants/keys';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme='system' storageKey={EStorageKeys.theme}>
        <main className='flex h-screen flex-col items-center justify-center'>
          <GithubCorner
            title='Get started on GitHub'
            url='https://github.com/doinel1a/vite-react-ts-shadcn-ui'
          />
          <Counter />
        </main>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
