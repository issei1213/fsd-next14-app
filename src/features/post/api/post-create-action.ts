'use server';

import { z } from 'zod';
import { redirect } from 'next/navigation';

import { createPost } from '@/entities/post';

const schema = z.object({
  title: z.string().refine((value) => {
    return Boolean(value.trim().length);
  }, 'Title is required'),

  body: z.string().refine((value) => {
    return Boolean(value.trim().length);
  }, 'Body is required'),
});

export const postCreateAction = async (prevState: any, formData: FormData) => {
  const title = formData.get('title') as string;
  const body = formData.get('body') as string;

  const validatedFields = schema.safeParse({
    title,
    body,
  });

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  await createPost({
    title,
    body,
  });

  redirect('/');
};
