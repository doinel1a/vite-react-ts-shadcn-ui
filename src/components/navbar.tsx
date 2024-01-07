import React from 'react';

import ThemeToggle from './ui/theme/toggle';

export default function Navbar() {
  return (
    <header className='flex h-16 w-full items-center justify-between border-b border-border px-5'>
      <span className='text-lg font-black'>Template</span>

      <div className=' pr-20'>
        <ThemeToggle />
      </div>
    </header>
  );
}
