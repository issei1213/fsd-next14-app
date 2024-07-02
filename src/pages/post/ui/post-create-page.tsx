import { Heading } from '@/shared/ui/heading';
import { PostCreateForm } from '@/features';

export const PostCreatePage = () => {
  return (
    <>
      <Heading as="h1">Create a Post</Heading>
      <PostCreateForm />
    </>
  );
};
