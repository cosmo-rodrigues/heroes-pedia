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

export function Recovery() {
  const router = useRouter();

  const form = useForm<FormSchema>({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(formValues: FormSchema) {
    console.log(formValues);
  }

  return (
    <Shad.Card className='py-5 px-0 max-w-lg sm:w-full'>
      <div className='flex flex-col justify-center items-center space-y-2'>
        <h1 className='text-center'>
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
                </Shad.FormItem>
              )}
            />

            <Shad.Button type='submit'>enviar link</Shad.Button>
          </form>
        </Shad.Form>
      </div>
      <div>
        <Image
          src='/question_shield.svg'
          height={15}
          width={15}
          alt='question'
        />
      </div>
    </Shad.Card>
  );
}
