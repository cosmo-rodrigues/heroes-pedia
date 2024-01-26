'use client';

import React, { useState } from 'react';
import { SignIn } from './login/SignIn';
import { Recovery } from './login/Recovery';
import { RecoverySuccess } from './login/RecoverySuccess';

type SelectedForm = 'sign-in' | 'recovery' | 'recovery-success';

export const HomeForm = ({ containerStyles }: { containerStyles: string }) => {
  const [status, setStatus] = useState<string>('sign-in');

  const renderizarComponente = () => {
    switch (status) {
      case 'sign-in':
        return <SignIn handleChangeType={setStatus} />;
      case 'recovery':
        return <Recovery handleChangeType={setStatus} />;
      case 'recovery-success':
        return <RecoverySuccess handleChangeType={setStatus} />;
      default:
        return null;
    }
  };

  return <div className={`${containerStyles}`}>{renderizarComponente()}</div>;
};
