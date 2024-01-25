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
  password: z
    .string({
      required_error: 'Password is required',
    })
    .min(8, {
      message: 'Password must have at lest 8 characters',
    })
    .max(20, {
      message: "Password can't be more than 20 characters.",
    }),
});

type FormSchema = z.infer<typeof formSchema>;

export function SignIn() {
  const router = useRouter();

  const form = useForm<FormSchema>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(formValues: FormSchema) {
    console.log(formValues);
  }

  return (
    <Shad.Card className='flex flex-col py-7 px-10 max-w-lg h-[433px] sm:w-[380px] w-screen sm:rounded-0 rounded-3xl'>
      <div className='flex flex-col space-y-2'>
        <h1 className='font-extrabold text-2xl text-primary'>
          Bem-Vindo<span className='text-red-600 text-4xl'>.</span>
        </h1>
        <p className='text-slate-300 text-sm'>
          informe as suas credenciais de acesso ao portal
        </p>
        <Shad.Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='flex justify-start flex-col space-y-6 w-full'
          >
            <Shad.FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <Shad.FormItem className='flex items-center relative'>
                  <Shad.FormControl>
                    <Shad.Input
                      className='h-[57px]'
                      placeholder='informe seu email'
                      {...field}
                    />
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

            <Shad.FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <Shad.FormItem className='flex items-center relative'>
                  <Shad.FormControl>
                    <Shad.Input
                      className='h-[57px]'
                      type='password'
                      placeholder='informe sua senha'
                      {...field}
                    />
                  </Shad.FormControl>
                  <Image
                    className='absolute top-[20%] right-3'
                    src='/eye.svg'
                    alt='arroba'
                    height={18}
                    width={18}
                  />
                </Shad.FormItem>
              )}
            />

            <Shad.Button className='h-[57px]' type='submit'>
              entrar
              <Image
                className='ml-2'
                src='/login_.svg'
                alt='login'
                height={15}
                width={15}
              />
            </Shad.Button>
          </form>
        </Shad.Form>
      </div>
      <div className='flex self-end mt-6'>
        <Image
          src='/question_shield.svg'
          height={15}
          width={15}
          alt='question'
        />
        <p className='ml-2 text-red-600'>Esqueceu a senha?</p>
      </div>
    </Shad.Card>
  );
}
