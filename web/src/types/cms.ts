type Tag = {
  name: string;
}

export type Post = {
  title: string;
  excerpt: string;
  id: string;
  publishDate: string;
  status: 'published' | 'draft';
  tags: Tag[];
  content: any;
}