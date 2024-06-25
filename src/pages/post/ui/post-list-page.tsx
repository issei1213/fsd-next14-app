import { Heading } from '@/src/shared/ui/heading';
import { Suspense } from 'react';
import { Spinner } from '@/src/shared/ui/spinner';
import { PostList } from '@/src/widgets/post';
export const PostListPage = async () => {
  return (
    <>
      <Heading as="h1">Post List</Heading>
      <Suspense fallback={<Spinner />}>
        <PostList />
      </Suspense>
    </>
  );
};
