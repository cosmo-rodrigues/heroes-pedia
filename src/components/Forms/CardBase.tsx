'use client';

import * as Shad from '@/components/ui';
import { ReactNode } from 'react';

interface CardBaseProps {
  children: ReactNode;
  subtitle: string;
  title: string;
  titlePointing: string;
}

export function CardBase({
  children,
  subtitle,
  title,
  titlePointing,
}: CardBaseProps) {
  return (
    <Shad.Card className='flex flex-col py-7 px-10 max-w-lg h-[433px] sm:w-[380px] w-screen sm:rounded-0 rounded-3xl'>
      <div className='flex flex-col space-y-2'>
        <h1 className='font-extrabold text-2xl text-primary'>
          {title}
          <span className='text-red-600 text-4xl'>{titlePointing}</span>
        </h1>
        <p>{subtitle}</p>
        {children}
      </div>
    </Shad.Card>
  );
}
