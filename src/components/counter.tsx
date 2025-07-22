import React, { useState } from 'react';

import { Button } from './ui/button';
import { Card, CardContent, CardHeader } from './ui/card';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <Card className='border-border bg-secondary w-72 border shadow-md'>
      <CardHeader>
        <h1 className='text-2xl'>Vite React TypeScript</h1>
        <h2 className='text-lg'>with shadcn/ui</h2>
      </CardHeader>
      <CardContent className='flex w-full items-center justify-between'>
        <Button
          className='w-10 rounded-full'
          data-testid='increase-count'
          onClick={() => {
            setCount((previousCount) => previousCount + 1);
          }}
        >
          + 1
        </Button>

        <h2 className='text-6xl' data-testid='count'>
          {count}
        </h2>

        <Button
          className='w-10 rounded-full'
          data-testid='decrease-count'
          onClick={() => {
            setCount((previousCount) => previousCount - 1);
          }}
        >
          - 1
        </Button>
      </CardContent>
    </Card>
  );
}
