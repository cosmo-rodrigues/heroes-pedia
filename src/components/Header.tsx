'use client';

import { cn } from '@/lib/utils';
import { ComponentProps } from '@/types/component-props';

import * as MyComponents from '.';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

interface HeaderProps extends ComponentProps {}

export const Header = ({ className }: HeaderProps) => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const scrollYPos = window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    }) as any as EventListenerOrEventListenerObject;

    return () => window.removeEventListener('scroll', scrollYPos);
  });

  return (
    <header
      className={cn(
        `${
          header
            ? 'py-4 bg-white shadow-lg dark:bg-accent'
            : 'py-6 dark:bg-transparent'
        } sticky top-0 z-30 transition-all ${
          pathname === '/' && 'bg-[#fef9f5]'
          // pathname === '/' && 'bg-[#064421]'
        }`,
        className
      )}
    >
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <MyComponents.Logo />
          <div className='flex items-center gap-x-6'>
            <MyComponents.Nav
              containerStyles='hidden lg:flex gap-x-8 items-center'
              linkStyles='relative hover:text-primary transition-all'
              underlineStyles='absolute left-0 top-full h-[2px] bg-primary w-full'
            />
            <div className='lg:hidden'>
              <MyComponents.MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
