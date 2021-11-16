import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <article>
          <h3 style={{ fontSize: '1.2em' }}>Me around the web:</h3>
          <div className={styles['icons-container']}>
            <a href="https://github.com/funnicus"><FaGithub className={styles.github} /><span>GitHub</span></a>
            <a href="https://www.linkedin.com/in/juhana-kuparinen-6284b8198/"><FaLinkedin className={styles.linkedin} /><span>LinkedIn</span></a>
          </div>
        </article>
      </div>
      <span>
              Juhana Kuparinen © {new Date().getFullYear()}, Built with
        {' '}
        <a href="https://www.nextjs.org">Next.js</a>
      </span>
    </footer>
  );
};

export default Footer;