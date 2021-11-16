/* eslint-disable react/no-children-prop */
import React from 'react';
import Link from 'next/link';
import { GetStaticPaths, GetStaticProps } from 'next';
import { DocumentRenderer } from '@keystone-next/document-renderer';

import SEO from '@/components/SEO';

import { getAllBLogs, getOneBlog } from '@/services/cms';
import { Post } from '@/types/cms';
import renderers from '@/utils/renderers';

import styles from './Article.module.scss';
import 'highlight.js/styles/atom-one-dark.css';

type Path = { 
  params: { 
    slug: string 
  } 
}

type Props = {
  post: Post;
}

const Article = ({ post }: Props) => {

  const { document } = post.content;

  return (
    <>
      <SEO title={post.title} description={post.excerpt}/>
      <div className={styles.wrapper}>
        <article>
          <Link href="/"><a className={styles.back}>Go back</a></Link>
          <header>
            <h1>{post.title}</h1>
            <p>{post.excerpt}</p>
          </header>
          <DocumentRenderer renderers={renderers} document={document} />
        </article>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const id = params?.slug ?? '';
  // id can be an array
  const post = await getOneBlog(Array.isArray(id) ? id[0] : id);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
    revalidate: 30
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllBLogs();

  const paths: Path[] = [];
  paths.concat(posts.map(post => ({ params: { slug: post.slug } })) ?? []);

  return {
    paths,
    fallback: 'blocking',
  };
};

export default Article;