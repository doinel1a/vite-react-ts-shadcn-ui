import React, { useState } from 'react';

import { Button } from './ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';

export default function Counter() {
  const [count, setCount] = useState<number>(0);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Vite ReactTS — Starter</CardTitle>
      </CardHeader>
      <CardContent className='flex items-center justify-center'>
        <h2 className='text-6xl'>{count}</h2>
      </CardContent>
      <CardFooter className='flex items-center justify-evenly'>
        <Button className='w-16' onClick={() => setCount((previousCount) => previousCount + 1)}>
          + 1
        </Button>
        <Button className='w-16' onClick={() => setCount((previousCount) => previousCount - 1)}>
          - 1
        </Button>
      </CardFooter>
    </Card>
  );
}
