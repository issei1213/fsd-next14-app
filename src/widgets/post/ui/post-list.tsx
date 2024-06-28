import { getPostList } from '@/entities/post';

export const PostList = async () => {
  const postList = await getPostList();

  return (
    <ul>
      {postList.map((post) => (
        <li key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
};
