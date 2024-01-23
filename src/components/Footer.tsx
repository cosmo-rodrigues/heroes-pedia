'use client';

import { cn } from '@/lib/utils';
import { ComponentProps } from '@/types/component-props';

interface FooterProps extends ComponentProps {}

export const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={cn(className)}>
      <h1>Footer</h1>
    </footer>
  );
};
