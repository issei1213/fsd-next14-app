'use client';

import { useFormState } from 'react-dom';
import { postUpdateAction } from '@/features/post/api/post-update-action';
import { SubmitButton } from '@/shared/ui/submit-button';
import { useActionState } from 'react';

type Props = {
  defaultValues: {
    title: string;
    body: string;
    postId: string;
  };
};

export const UpdateForm = ({ defaultValues, postId }: Props) => {
  const [state, formAction] = useFormState(postUpdateAction, {
    errors: {},
  });

  return (
    <form className="flex" action={formAction}>
      <label htmlFor="title">Title</label>
      <input
        id="title"
        name="title"
        type="text"
        className="border-4"
        required
        defaultValue={defaultValues.title}
      />

      {state?.errors?.title && (
        <div className="text-red-500">{state.errors.title}</div>
      )}
      <label htmlFor="body">Body</label>
      <textarea
        id="body"
        name="body"
        className="border-4"
        defaultValue={defaultValues.body}
      />
      {state?.errors?.body && (
        <div className="text-red-500">{state.errors.body}</div>
      )}

      <label htmlFor="post-id" hidden>
        Post ID
      </label>
      <input
        id="post-id"
        name="post-id"
        type="text"
        className="border-4"
        hidden
        required
        defaultValue={defaultValues.postId}
      />
      <SubmitButton />
    </form>
  );
};
