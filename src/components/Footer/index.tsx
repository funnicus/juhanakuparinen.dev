import React from 'react'
import Image from 'next/image';
import { FaGithub, FaLinkedin } from "react-icons/fa";

import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <footer className={styles.footer}>
          <div>
            <article>
              <h3>About me</h3>
              <p>
                Hi, my name is <b>Juhana Kuparinen</b>. I was born and
                raised in Helsinki, Finland but as of now
                I study Information and Communcation Technology at University of Turku.
                I'm interested in all things coding, but recently my
                focus has been on fullstack web development with <b>React</b>, <b>Node.js</b>, <b>TypeScript</b> and <b>GraphQL</b>.
              </p>
              <p>
                On my free time, I like to motorcycle, play video games, workout and make tasty pizzas.
                I also listen music alot. Some of my favorites are <b>Boards of Canada</b>,
                <b> Urlich Schnauss</b>, <b>MGMT</b> and especially the
                album <b>Moon Safari</b> from <b>Air</b>.
              </p>
              <p>
                
              </p>
            </article>
          </div>
          <div>
            <article>
              <h3>Me around the web:</h3>
              <div className={styles["icons-container"]}>
                <a href="https://github.com/funnicus"><FaGithub className={styles.github} /><span>GitHub</span></a>
                <a href="https://www.linkedin.com/in/juhana-kuparinen-6284b8198/"><FaLinkedin className={styles.linkedin} /><span>LinkedIn</span></a>
              </div>
            </article>
          </div>
            <span>
              Juhana Kuparinen © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.nextjs.org">Next.js</a>
            </span>
        </footer>
    )
}

export default Footer