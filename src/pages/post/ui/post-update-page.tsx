import { Heading } from '@/shared/ui/heading';
import { PostUpdateForm } from '@/features';
import { Suspense } from 'react';
import { Spinner } from '@/shared/ui/spinner';

type Props = {
  postId: string;
};

export const PostUpdatePage = ({ postId }: Props) => {
  return (
    <>
      <Heading as="h1">Update Post</Heading>
      <Suspense fallback={<Spinner />}>
        <PostUpdateForm postId={postId} />
      </Suspense>
    </>
  );
};
