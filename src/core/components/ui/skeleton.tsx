import { cn } from '@/lib/utils';

function Skeleton({ className, ...properties }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('bg-muted animate-pulse rounded-md', className)} {...properties} />;
}

export { Skeleton };
