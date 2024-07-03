import { PostUpdatePage } from '@/pages/post';

type Props = {
  params: {
    'post-id': string;
  };
};
export default function Page({ params }: Props) {
  return <PostUpdatePage postId={params['post-id']} />;
}
