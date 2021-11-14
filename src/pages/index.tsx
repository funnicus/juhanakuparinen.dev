import type { NextPage } from 'next'

import SEO from '@/components/SEO'
import Header from '@/components/Header'

const Home: NextPage = () => {
  return (
    <>
      <SEO title="Home" description="Juhana Kuparinen | IT Student and Webmaster at Digit ry" />
      <Header />
    </>
  )
}

export default Home
