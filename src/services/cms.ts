import { query } from '.keystone/api';

import { Post } from '@/types/cms';

import { GET_POSTS } from '@/queries';

export const getAllBLogs = async () => {
  try {
    const data = await query.Post.findMany({ query: GET_POSTS });
    const posts = data
      .filter(post => post.status === 'published')
      // sort so that newest posts come first
      .sort((postA, postB) => (
        new Date(postB.publishDate).getTime() - new Date(postA.publishDate).getTime()
      ));

    return posts;

  } catch (error) {
    return [];
  }
};

export const getOneBlog = async (slug: string) => {
  try {
    const data = await query.Post.findOne({ where: { slug: slug }, query: GET_POSTS }) as Record<string, Post>;
    return data;
  } catch (error) {
    return null;
  }
};