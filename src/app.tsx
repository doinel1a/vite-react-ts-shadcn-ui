import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import Counter from './components/counter';
import Footer from './components/footer';
import GithubCorner from './components/github-corner';
import Navbar from './components/navbar';
import { ThemeProvider } from './components/ui/theme/provider';
import EStorageKeys from './constants/keys';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme='system' storageKey={EStorageKeys.theme}>
        <Navbar />

        <main className='flex h-screen flex-col items-center justify-center'>
          <GithubCorner
            title='Get started on GitHub'
            url='https://github.com/doinel1a/vite-react-ts-shadcn-ui'
          />
          <Counter />
        </main>

        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
