//import { GET_POSTS, GET_ONE_POST } from '@/queries';
//import client from '@/utils/apollo';
//import { Post } from '@/types/cms';

export const getAllBLogs = async () => {
  try {
    /*const { data } = await client.query<{ posts: Post[] }>({ query: GET_POSTS });

    const posts = data.posts
      .filter(post => post.status === 'published')
    // sort so that newest posts come first
      .sort((postA, postB) => (
        new Date(postB.publishDate).getTime() - new Date(postA.publishDate).getTime()
      ));

    return posts;*/
    return [{ id: 'sadsa' }];

  } catch (error) {
    return [];
  }
};

export const getOneBlog = async (id: string) => {
  try {
    //const { data } = await client.query<{ post: Post | null }>({ query: GET_ONE_POST, variables: { id } });
    //return data.post;
    return null;
  } catch (error) {
    return null;
  }
};