import { Heading } from '@/shared/ui/heading';
import { Suspense } from 'react';
import { Spinner } from '@/shared/ui/spinner';
import { PostList } from '@/widgets/post';
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
