import SEO from '@/components/SEO';
import Header from '@/components/Header';
import Blogs from '@/components/Blogs';

import { getAllBLogs } from '@/services/cms';
import { Post } from '@/types/cms';
import Skills from '@/components/Skills';

type Props = {
  posts: Post[];
};

const Home = ({ posts }: Props): JSX.Element => {
  console.log(process.env.NODE_ENV);
  return (
    <>
      <SEO
        title="Juhana Kuparinen | IT Student and Co-Founder at Kvanttori Oy"
        description="Read my blogs and find out other things about me here!"
      />
      <Header />
      <Blogs blogs={posts} />
      <Skills />
    </>
  );
};

export async function getStaticProps() {
  const data = await getAllBLogs();
  console.log(data);
  // only show the 3 most recent articles on the main page feed!
  const posts = data.length > 3 ? data.slice(0, 3) : data;

  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}

export default Home;
