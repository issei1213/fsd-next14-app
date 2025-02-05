import { PostDetailPage } from '@/pages/post';

type Props = {
  params: {
    'post-id': string;
  };
};
export default function Page({ params }: Props) {
  return <PostDetailPage postId={params['post-id']} />;
}
