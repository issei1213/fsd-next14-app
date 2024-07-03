import { useFormState } from 'react-dom';

import { SubmitButton } from '@/shared/ui/submit-button';
import { postCreateAction } from '@/features/post/api/post-create-action';
import { UpdateForm } from '@/features/post/ui/update-form';
import { getPostDetail } from '@/entities/post';

type Props = {
  postId: string;
};

export const PostUpdateForm = async ({ postId }: Props) => {
  const { title, body } = await getPostDetail({ id: postId });

  return <UpdateForm defaultValues={{ title, body, postId }} />;
};
