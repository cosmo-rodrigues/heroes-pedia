'use client';

import { cn } from '@/lib/utils';
import { ComponentProps } from '@/types/component-props';

import * as Shad from '@/components/ui';
import * as MyComponents from '.';
import { AlignJustify } from 'lucide-react';

export const MobileNav = () => {
  return (
    <Shad.Sheet>
      <Shad.SheetTrigger asChild>
        <AlignJustify className='cursor-pointer' />
      </Shad.SheetTrigger>
      <Shad.SheetContent>
        <div className='flex flex-col items-center justify-between h-full py-8'>
          <div className='flex flex-col items-center gap-y-32'>
            <MyComponents.Logo />
            <MyComponents.Nav
              underlineStyles=''
              containerStyles='flex flex-col items-center gap-y-6'
              linkStyles='text-2xl'
            />
          </div>
        </div>
      </Shad.SheetContent>
    </Shad.Sheet>
  );
};
