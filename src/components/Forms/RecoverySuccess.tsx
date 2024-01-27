'use client';

import * as Shad from '@/components/ui';
import { CardBase } from './CardBase';

interface RecoveryProps {
  handleChangeType: (type: string) => void;
}

export function RecoverySuccess({ handleChangeType }: RecoveryProps) {
  async function onSubmit() {
    handleChangeType('sign-in');
  }

  return (
    <CardBase
      subtitle='Foi enviado um e-mail para você com instruções de como redefinir a sua
    senha.'
      title='Tudo certo'
      titlePointing=' ;)'
    >
      <Shad.Button onClick={onSubmit}>voltar para o login</Shad.Button>
    </CardBase>
  );
}
