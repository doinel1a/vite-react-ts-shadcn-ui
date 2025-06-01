import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/about')({
  component: About
});

function About() {
  return <div className='page-content p-2'>Hello from About!</div>;
}
