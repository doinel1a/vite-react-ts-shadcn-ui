import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import Counter from './components/counter';
import Footer from './components/footer';
import GithubCorner from './components/github-corner';
import Navbar from './components/navbar';
import RootProvider from './components/providers/root';

function App() {
  return (
    <BrowserRouter>
      <RootProvider>
        <div className='grid min-h-[100dvh] grid-rows-[auto_1fr_auto]'>
          <Navbar />
          <main className='flex h-full flex-col items-center justify-center'>
            <GithubCorner
              title='Get started on GitHub'
              url='https://github.com/doinel1a/vite-react-ts-shadcn-ui'
            />
            <Counter />
          </main>
          <Footer />
        </div>
      </RootProvider>
    </BrowserRouter>
  );
}

export default App;
