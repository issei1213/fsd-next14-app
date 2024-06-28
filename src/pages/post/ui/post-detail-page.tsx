import { Suspense } from 'react';

import { Heading } from '@/src/shared/ui/heading';
import { PostDetail } from '@/src/widgets/post';
import { Spinner } from '@/src/shared/ui/spinner';

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
