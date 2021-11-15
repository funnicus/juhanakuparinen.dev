import React from 'react';

import styles from './About.module.scss';

const About = () => {
  return (
    <section className={styles.about}>
      <article>
        <h3>About me</h3>
        <p>
          Hello, my name is <b>Juhana Kuparinen</b> 👋🏻. I was born and
          raised in Helsinki, Finland but currently
          I study Information and Communcation Technology at University of Turku.
          I&lsquo;m interested in all things coding, with a focus on 
          fullstack web development with <b>React</b>, <b>Node.js</b>, <b>TypeScript</b> and <b>GraphQL</b>.
        </p>
        <p>
          On my free time, I like to motorcycle, play video games, workout and make tasty pizzas.
          I also listen music alot. Some of my favorites are <b>Boards of Canada</b>,
          <b> Urlich Schnauss</b>, <b>MGMT</b> and especially the
          album <b>Moon Safari</b> from <b>Air</b>.
        </p>
        <p>
          I&lsquo;m Co-Founder and a member of the board of directors at <b>Kvanttori Oy!</b>
        </p>
      </article>
    </section>
  );
};

export default About;