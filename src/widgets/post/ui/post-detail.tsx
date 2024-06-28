import { getPostDetail } from '@/entities/post';

type Props = {
  id: string;
};
export const PostDetail = async ({ id }: Props) => {
  const post = await getPostDetail({ id });

  return (
    <section>
      <h2>{post.title}</h2>
      <h3>
        id:{post.id} userId: {post.userId}
      </h3>
      <p>{post.body}</p>
    </section>
  );
};
