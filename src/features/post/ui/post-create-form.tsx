'use client';
import { useFormState } from 'react-dom';

import { SubmitButton } from '@/shared/ui/submit-button';
import { postCreateAction } from '@/features/post/api/post-create-action';

const initialState = {
  errors: {},
};

export const PostCreateForm = () => {
  const [state, formAction] = useFormState(postCreateAction, initialState);

  return (
    <form className="flex" action={formAction}>
      <label htmlFor="title">Title</label>
      <input id="title" type="text" name="title" className="border-4" />
      {state?.errors?.title && (
        <div className="text-red-500">{state.errors.title}</div>
      )}
      <label htmlFor="body">Body</label>
      <textarea id="body" className="border-4" name="body" />
      {state?.errors?.body && (
        <div className="text-red-500">{state.errors.body}</div>
      )}
      <SubmitButton />
    </form>
  );
};
