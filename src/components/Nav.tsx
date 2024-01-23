'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';
import { ComponentProps } from '@/types/component-props';

interface NavProps extends ComponentProps {
  containerStyles: string;
  linkStyles: string;
  underlineStyles: string;
}

const links = [
  { path: '/', name: 'home' },
  { path: '/projects', name: 'my projects' },
  { path: '/contact', name: 'contact' },
];

export const Nav = ({
  containerStyles,
  linkStyles,
  underlineStyles,
}: NavProps) => {
  const pathname = usePathname();
  return (
    <nav className={cn(containerStyles)}>
      {pathname === '/' ? null : (
        <>
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className={`capitalize ${linkStyles}`}
            >
              {link.path === pathname && (
                <motion.span
                  animate={{ y: 0 }}
                  className={underlineStyles}
                  initial={{ y: '-100%' }}
                  layoutId='underline'
                  transition={{ type: 'tween' }}
                />
              )}
              {link.name}
            </Link>
          ))}
        </>
      )}
    </nav>
  );
};
