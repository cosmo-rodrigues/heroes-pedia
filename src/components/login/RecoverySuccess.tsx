'use client';

import * as Shad from '@/components/ui';

interface RecoveryProps {
  handleChangeType: (type: string) => void;
}

export function RecoverySuccess({ handleChangeType }: RecoveryProps) {
  async function onSubmit() {
    handleChangeType('sign-in');
  }

  return (
    <Shad.Card className='flex flex-col py-7 px-10 max-w-lg h-[433px] sm:w-[380px] w-screen sm:rounded-0 rounded-3xl'>
      <div className='flex flex-col space-y-2'>
        <h1 className='font-extrabold text-2xl text-primary'>
          Tudo certo
          <span className='font-bold text-red-600 text-4xl'>;)</span>
        </h1>
        <p>
          Foi enviado um e-mail para você com instruções de como redefinir a sua
          senha.
        </p>
        <Shad.Button onClick={onSubmit}>voltar para o login</Shad.Button>
      </div>
    </Shad.Card>
  );
}
