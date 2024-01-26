'use client';

import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import * as Shad from '@/components/ui';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const formSchema = z.object({
  email: z
    .string({
      required_error: 'Email is required.',
    })
    .email({
      message: 'Must be a valid email.',
    }),
});

type FormSchema = z.infer<typeof formSchema>;

interface RecoveryProps {
  handleChangeType: (type: string) => void;
}

export function Recovery({ handleChangeType }: RecoveryProps) {
  const router = useRouter();

  const form = useForm<FormSchema>({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(formValues: FormSchema) {
    console.log(formValues);
    handleChangeType('recovery-success');
  }

  return (
    <Shad.Card className='flex flex-col py-7 px-10 max-w-lg h-[433px] sm:w-[380px] w-screen sm:rounded-0 rounded-3xl'>
      <div className='flex flex-col space-y-2'>
        <h1 className='font-extrabold text-2xl text-primary'>
          Recuperar senha
          <span className='font-bold text-red-600 text-4xl'>.</span>
        </h1>
        <p>
          Informe o e-mail do seu cadastro. Nós estaremos realizando o envio de
          um link com as instruções para você redefinir a sua senha.
        </p>
        <Shad.Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='flex justify-start flex-col space-y-5'
          >
            <Shad.FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <Shad.FormItem>
                  <Shad.FormControl>
                    <Shad.Input placeholder='informe seu email' {...field} />
                  </Shad.FormControl>
                  <Image
                    className='absolute top-[20%] right-3'
                    src='/arroba.svg'
                    alt='arroba'
                    height={17}
                    width={17}
                  />
                </Shad.FormItem>
              )}
            />

            <Shad.Button type='submit'>enviar link</Shad.Button>
          </form>
        </Shad.Form>
      </div>
    </Shad.Card>
  );
}
