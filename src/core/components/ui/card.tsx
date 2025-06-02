import * as React from 'react';

import { cn } from '@/core/lib/utils';

const Card = ({
  ref: reference,
  className,
  ...properties
}: React.HTMLAttributes<HTMLDivElement> & { ref?: React.RefObject<HTMLDivElement | null> }) => (
  <div
    ref={reference}
    className={cn('bg-card text-card-foreground rounded-lg border shadow-sm', className)}
    {...properties}
  />
);
Card.displayName = 'Card';

const CardHeader = ({
  ref: reference,
  className,
  ...properties
}: React.HTMLAttributes<HTMLDivElement> & { ref?: React.RefObject<HTMLDivElement | null> }) => (
  <div ref={reference} className={cn('flex flex-col space-y-1.5 p-6', className)} {...properties} />
);
CardHeader.displayName = 'CardHeader';

const CardTitle = ({
  ref: reference,
  className,
  ...properties
}: React.HTMLAttributes<HTMLHeadingElement> & {
  ref?: React.RefObject<HTMLParagraphElement | null>;
}) => (
  // eslint-disable-next-line jsx-a11y/heading-has-content
  <h3
    ref={reference}
    className={cn('text-2xl leading-none font-semibold tracking-tight', className)}
    {...properties}
  />
);
CardTitle.displayName = 'CardTitle';

const CardDescription = ({
  ref: reference,
  className,
  ...properties
}: React.HTMLAttributes<HTMLParagraphElement> & {
  ref?: React.RefObject<HTMLParagraphElement | null>;
}) => (
  <p ref={reference} className={cn('text-muted-foreground text-sm', className)} {...properties} />
);
CardDescription.displayName = 'CardDescription';

const CardContent = ({
  ref: reference,
  className,
  ...properties
}: React.HTMLAttributes<HTMLDivElement> & { ref?: React.RefObject<HTMLDivElement | null> }) => (
  <div ref={reference} className={cn('p-6 pt-0', className)} {...properties} />
);
CardContent.displayName = 'CardContent';

const CardFooter = ({
  ref: reference,
  className,
  ...properties
}: React.HTMLAttributes<HTMLDivElement> & { ref?: React.RefObject<HTMLDivElement | null> }) => (
  <div ref={reference} className={cn('flex items-center p-6 pt-0', className)} {...properties} />
);
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
