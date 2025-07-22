import React from 'react';

import ThemeToggle from './ui/theme-toggle';

export default function Navbar() {
  return (
    <header className='border-border flex h-16 w-full items-center justify-between border-b px-5'>
      <span className='text-lg font-black'>Template</span>

      <div className='pr-20'>
        <ThemeToggle />
      </div>
    </header>
  );
}
