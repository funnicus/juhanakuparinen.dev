import SEO from '@/components/SEO';
import Header from '@/components/Header';
import Blogs from '@/components/Blogs';

import { getAllBLogs } from '@/services/cms';
import { Post } from '@/types/cms';

type Props = {
  posts: Post[]
}

const Home = ({ posts }: Props): JSX.Element => {
  return (
    <>
      <SEO title="Home" description="Juhana Kuparinen | IT Student and Webmaster at Digit ry" />
      <Header />
      <Blogs blogs={posts} />
    </>
  );
};

export async function getStaticProps() {

  const data = await getAllBLogs();
  // only show the 3 most recent articles on the main page feed!
  const posts = data.length > 3 ? data.slice(0, 3) : data;

  return {
    props: {
      posts
    },
    revalidate: 10,
  };
}

export default Home;