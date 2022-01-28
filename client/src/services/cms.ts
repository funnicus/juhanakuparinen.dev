import { ApolloResult, Post } from '@/types/cms';

import { GET_POSTS, GET_ONE_POST } from '@/queries';
import client from './apolloClient';

export const getAllBLogs = async () => {
  try {
    const { data } = await client.query<{ posts: Post[] }>({
      query: GET_POSTS,
    });

    const posts = data.posts
      .filter((post) => post.status === 'published')
      // sort so that newest posts come first
      .sort(
        (postA, postB) =>
          new Date(postB.publishDate).getTime() -
          new Date(postA.publishDate).getTime()
      );

    return posts;
  } catch (error) {
    return [];
  }
};

export const getOneBlog = async (slug: string) => {
  try {
    const { data } = await client.query<{ post: Post }>({
      query: GET_ONE_POST,
      variables: { slug },
    });

    console.log(data);

    return data.post;
  } catch (error) {
    return null;
  }
};
