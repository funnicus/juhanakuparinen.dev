import React from 'react';

import SEO from '@/components/SEO';

//import { getAllBLogs } from '@/services/cms';

const Blog = () => {
  return (
    <>
      <SEO title="Blogs" description="Follow Juhana's blogs!"/>
      Hello World!
    </>
  );
};

export async function getStaticProps() {
  return {
    /*props: {
      posts: await getAllBLogs()
    },
    revalidate: 10,*/
    notFound: true,
  };
}

export default Blog;