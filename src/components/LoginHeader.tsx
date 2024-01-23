'use client';

import * as MyComponents from '.';

export const LoginHeader = () => {
  return (
    <header className='pt-12'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <MyComponents.Logo />
        </div>
      </div>
    </header>
  );
};
