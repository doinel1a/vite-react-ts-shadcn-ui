'use client';

import { IconDeviceLaptop, IconMoonStars, IconSun } from '@tabler/icons-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

import { useTheme } from '../../components/providers/theme';

export default function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button data-testid='theme-toggle' variant='outline' size='icon'>
          <IconSun className='size-4 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90' />
          <IconMoonStars className='absolute size-4 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0' />
          <span className='sr-only'>Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent data-testid='theme-dropdown-content' align='end'>
        <DropdownMenuItem
          data-testid='theme-light'
          onClick={() => {
            setTheme('light');
          }}
        >
          <IconSun className='size-4' />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          data-testid='theme-dark'
          onClick={() => {
            setTheme('dark');
          }}
        >
          <IconMoonStars className='size-4' />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          data-testid='theme-system'
          onClick={() => {
            setTheme('system');
          }}
        >
          <IconDeviceLaptop className='size-4' />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
