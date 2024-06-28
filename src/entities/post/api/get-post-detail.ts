import type { Post } from '../model/types';

export const getPostDetail = async ({ id }: { id: string }) => {
  // 1秒スリープする
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${Number(id)}`,
  );
  const postDetail: Post = await response.json();

  return postDetail;
};
