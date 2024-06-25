import type { Post } from '../model/types';

export const getPostList = async () => {
  // 1秒スリープする
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const postList: Post[] = await response.json();

  return postList;
};
