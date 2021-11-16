import React from 'react';
import Link from 'next/link';

import { Post } from '@/types/cms';

import styles from './Blogs.module.scss';

type Props = {
  blogs: Post[]
}

const Blogs = ({ blogs }: Props) => {
  return (
    <div className={styles.feed}>
      <section>
        <h5>Recent articles:</h5>
        {
          blogs.length ? 
            blogs.map(blog => (
              <Link key={blog.id} href={`/blog/${blog.slug}`} passHref>
                <article className={styles.post}>
                  <header>
                    <h2 >{blog.title}</h2>
                    <span>
                      {blog.tags?.map(tag => `${tag.name} | `)} 
                      <b>{new Date(blog.publishDate).toLocaleDateString()}</b>
                    </span>
                  </header>
                  <p>{blog.excerpt}</p>
                  <p><a>Read more</a> 🔎</p>
                </article>
              </Link>
            )) :
            <p>There seems to be no articles. Might be a problem with the server 😵‍💫</p>
        }
      </section>
    </div>
  );
};

export default Blogs;