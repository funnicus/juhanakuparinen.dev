import React from 'react';
import { SiTypescript, SiJavascript, SiReact, SiNodedotjs, SiGraphql } from 'react-icons/si';

import skillsStyles from './Skills.module.scss';
import styles from './Tiles.module.css';

const Tiles: React.FC = () => {
  return(
    <section className={skillsStyles.wrapper}>
      <article className={skillsStyles.description}>
        <hgroup>
          <h1>What are my skills?</h1>
        </hgroup>
        <p>
          I can program well with <b>JavaScript</b> and <b>TypeScript</b>. 
          I can also use <b>React</b> (CRA, Gatsby, Next), 
          <b> GraphQL</b>, <b>Node.js</b> in the backend and know my way around <b>git</b> relatively well.
        </p>
        <p>
          I am able to code both the frontend and the backend and combine them into an fullstack application.
          I can also do databases with <b>MongoDB</b> and
          have some minor experience setting up a web server with <b>Nginx</b> and <b>Ubuntu</b>.
          My fullstack bread and butter is a React front being served
          by Node.js backend with TypeScript using <b>Express</b> for RESTful routing
            or <b>Apollo GraphQL</b> for GraphQL, connected to a MongoDB database with <b>mongoose</b>.
          I have some projects to showcase my web development skills at my 
          <a href="https://github.com/funnicus"> GitHub page</a>. My most important projects can also be seen under
          the projects tab!
        </p>
      </article>
      <div className={styles['Tiles']}>
        <ul className={styles['tiles']}>
          <li>
            <a href="https://www.javascript.com/">
              <SiJavascript className={styles['fab']}/>
              <span> - JavaScript</span>
            </a>
          </li>
          <li>
            <a href="https://reactjs.org/">
              <SiReact className={styles['fab']}/>
              <span> - React</span>
            </a>
          </li>
          <li>
            <a href="https://nodejs.org/en/">
              <SiNodedotjs className={styles['fab']}/>
              <span> - Node.js</span>
            </a>
          </li>
          <li>
            <a href="https://www.typescriptlang.org/">
              <SiTypescript className={styles['fab']}/>
              <span> - TypeScript</span>
            </a>
          </li>
          <li>
            <a href="https://graphql.org/">
              <SiGraphql className={styles['fab']}/>
              <span> - GraphQL</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Tiles;