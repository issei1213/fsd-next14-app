import { Suspense } from 'react';

import { Heading } from '@/shared/ui/heading';
import { PostDetail } from '@/widgets/post';
import { Spinner } from '@/shared/ui/spinner';

type Props = {
  postId: string;
};
export const PostDetailPage = ({ postId }: Props) => {
  return (
    <>
      <Heading as="h1">Post Detail ID: 1</Heading>
      <Suspense fallback={<Spinner />}>
        <PostDetail id={postId} />
      </Suspense>
    </>
  );
};
