import React from 'react';

import styles from './Header.module.scss'

const Header = () => {
  return (
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
  );
};

export default Header;