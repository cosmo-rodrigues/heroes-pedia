'use client';

import React from 'react';
import { SignIn } from './login/SignIn';

export const HomeForm = ({ containerStyles }: { containerStyles: string }) => {
  return (
    <div className={`${containerStyles}`}>
      <SignIn />
    </div>
  );
};
