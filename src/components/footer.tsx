import React from 'react';

import { Link } from 'react-router-dom';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className='border-border flex h-10 w-full items-center justify-center border-t text-sm'>
      by &nbsp;
      <Link to='https://business-link.d1a.app' className='text-primary'>
        doinel1a
      </Link>
      &nbsp; {year}
    </footer>
  );
}
