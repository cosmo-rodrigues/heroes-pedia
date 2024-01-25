'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Download, Send } from 'lucide-react';
import * as Ri from 'react-icons/ri';

import * as Shad from '@/components/ui';
import * as MyComponents from '@/components';

export const Hero = () => {
  return (
    <section className='flex justify-center items-center py-12 lg:py-24 h-[84vh] lg:pt-10 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center justify-center gap-x-8'>
          <div className='hidden lg:flex relative'>
            <Image src='build.svg' alt='build' height={600} width={600} />
          </div>
          <div className='flex flex-col justify-center items-center mx-auto lg:mx-0 min-w-[30vw]'>
            <MyComponents.HomeForm containerStyles='' />
          </div>
        </div>
      </div>
    </section>
  );
};
