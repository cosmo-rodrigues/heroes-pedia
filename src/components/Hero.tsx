'use client';

import React from 'react';
import Link from 'next/link';

import { Download, Send } from 'lucide-react';
import * as Ri from 'react-icons/ri';

import * as Shad from '@/components/ui';
import * as MyComponents from '@/components';

export const Hero = () => {
  return (
    <section className='py-12 lg:py-24 h-[84vh] lg:pt-10 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none'>
      <h1>Cosmo</h1>
    </section>
  );
};
