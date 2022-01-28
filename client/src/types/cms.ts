type Tag = {
  name: string;
};

export type Post = {
  title: string;
  excerpt: string;
  slug: string;
  id: string;
  publishDate: string;
  status: 'published' | 'draft';
  tags: Tag[];
  content: any;
};

export type ApolloResult<T> = {
  data: T;
};
