'use server';
import { z } from 'zod';
import { createPost } from '@/entities/post';

const schema = z.object({
  title: z.string({
    required_error: 'Title is required',
  }),
  body: z.string({
    required_error: 'Body is required',
  }),
});

export const postCreateAction = async (prevState: any, formData: FormData) => {
  const validatedFields = schema.safeParse({
    title: formData.get('title'),
    body: formData.get('body'),
  });

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    console.log(validatedFields.error.flatten().fieldErrors);
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  await createPost({
    title: formData.get('title') as string,
    body: formData.get('body') as string,
  });
};
