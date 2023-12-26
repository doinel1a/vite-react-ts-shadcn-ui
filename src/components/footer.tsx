import React from 'react';

import { Link } from 'react-router-dom';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className='flex h-10 w-full items-center justify-center border-t border-border text-sm'>
      by &nbsp;
      <Link to='https://business-link.d1a.app' className='text-primary'>
        doinel1a
      </Link>
      &nbsp; {year}
    </footer>
  );
}
