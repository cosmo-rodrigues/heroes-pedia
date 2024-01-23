'use client';

import { cn } from '@/lib/utils';
import { ComponentProps } from '@/types/component-props';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface LogoProps extends ComponentProps {}

export const Logo = ({ className }: LogoProps) => {
  const pathname = usePathname();
  return (
    <Link href='/' className={cn(className)}>
      <Image
        src={pathname === '/login' ? '/logo_white.svg' : '/logo_blue.svg'}
        height={50}
        width={169}
        alt='logo'
        priority
      />
    </Link>
  );
};
