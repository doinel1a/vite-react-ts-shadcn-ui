import React, { useState } from 'react';

import { Button } from './ui/button';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';

export default function Counter() {
  const [count, setCount] = useState<number>(0);

  return (
    <Card className='border border-border bg-secondary shadow-md'>
      <CardHeader>
        <h1 className='text-2xl'>Vite React TypeScript</h1>
        <h2 className='text-lg'>with shadcn/ui</h2>
      </CardHeader>
      <CardContent className='flex items-center justify-center'>
        <h2 data-testid='count' className='text-6xl'>
          {count}
        </h2>
      </CardContent>
      <CardFooter className='flex items-center justify-evenly'>
        <Button
          data-testid='increase-count'
          className='w-16'
          onClick={() => setCount((previousCount) => previousCount + 1)}
        >
          + 1
        </Button>
        <Button
          data-testid='decrease-count'
          className='w-16'
          onClick={() => setCount((previousCount) => previousCount - 1)}
        >
          - 1
        </Button>
      </CardFooter>
    </Card>
  );
}
