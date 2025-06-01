import { useRef, useState } from 'react';

import { Link } from '@tanstack/react-router';

import useConfiguration from '@/core/hooks/use-configuration';
import { useScrollPosition } from '@/core/hooks/use-scroll-position';
import { cn } from '@/lib/utils';

import ThemeToggle from '../ui/theme-toggle';
import styles from './navbar.module.css';

export default function Navbar() {
  const { config } = useConfiguration();
  const [isOpaque, setIsOpaque] = useState(false);
  const headerReference = useRef<HTMLDivElement>(null);
  useScrollPosition(({ currPos }) => {
    const headerHeight = headerReference.current?.offsetHeight ?? 0;
    setIsOpaque(Math.abs(currPos.y) < headerHeight);
  });
  return (
    <header
      ref={headerReference}
      className={cn(
        styles.header,
        isOpaque ? styles.opaque : styles.semiOpaque,
        'flex h-16 w-full items-center justify-between border-b px-5'
      )}
    >
      <div className='flex items-center gap-2'>
        <p className='text-lg font-black'>Template</p>
        {/* Environment ( Not shown in production ) */}
        {config.mode === 'production' ? undefined : (
          <p className={cn(styles.environment, styles[config.mode])}>{config.mode}</p>
        )}
      </div>

      <div className='flex gap-4 p-2'>
        <Link to='/' className='[&.active]:font-bold'>
          Home
        </Link>{' '}
        <Link to='/about' className='[&.active]:font-bold'>
          About
        </Link>
      </div>

      <div>
        <ThemeToggle />
      </div>
    </header>
  );
}
