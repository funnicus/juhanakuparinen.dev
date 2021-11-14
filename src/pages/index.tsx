import type { NextPage } from 'next'

import SEO from '@/components/SEO'

import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <>
      <SEO title="Home" description="Juhana Kuparinen | IT Student and Webmaster at Digit ry" />
      <div className={styles.Home}>
        <div className={styles.headerOverlay}>
          <div>
            <header style={{ fontSize: "1.4em", padding: "30px", marginTop: "10vh" }}>
              <h1>Juhana Kuparinen</h1>
              <h4>
                IT student and 
                <br />
                Co-Founder 
                <br />
                @ <a href="https://kvanttori.fi/">Kvanttori Oy</a>
              </h4>
            </header>
            <p style={{ fontSize: "0.9em", padding: "40px" }}>
              I build websites powered by React and Node.js.
              Recently I have also picked up interest in Rust 🦀 and lower level programming!
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
