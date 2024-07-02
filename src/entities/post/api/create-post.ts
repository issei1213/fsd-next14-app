import { type Post } from '../model/types';

export const createPost = async (payload: Pick<Post, 'title' | 'body'>) => {
  // 1秒スリープする
  await new Promise((resolve) => setTimeout(resolve, 1000));

  await fetch(`https://jsonplaceholder.typicode.com/posts`, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};
