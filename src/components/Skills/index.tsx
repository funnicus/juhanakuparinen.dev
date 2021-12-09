import React, { useState } from 'react';

import Meter from './Meter';

import skillsStyles from './Skills.module.scss';

const Skills = (): JSX.Element => {

  const [ selection, setSelection ] = useState(0);

  return(
    <section className={skillsStyles.wrapper}>
      <div>
        <article className={skillsStyles.description}>
          <hgroup>
            <h2>Experience</h2>
          </hgroup>
          <ul>
            <li>
              <h4>Kvanttori Oy | 2021 - present</h4>
              <h5>Co-founder and member of the board</h5>
              <p>
                As a co-founder and a member of the board, I participate
                in everyday managment and decisionmaking of the business.
              </p>
            </li>
            <li>
              <h4>Kvanttori Oy | 2021 - present</h4>
              <h5>Project lead</h5>
              <p>
                I{'\''}m leading one of the first client projects at Kvanttori Oy.
                As a project lead I have the main responsibility about project planning and execution.
              </p>
            </li>
          </ul>
        </article>
        <article className={skillsStyles.description}>
          <hgroup>
            <h2>Skills</h2>
          </hgroup>
          <ul>
            <li>
              <span className={skillsStyles.selection}>
                <button onClick={() => setSelection(0)}>Programming</button>
                <button onClick={() => setSelection(1)}>Tech</button>
              </span>
            </li>
            {selection === 0 ? 
              <>
                <li><Meter logo={'typescript'} /></li>
                <li><Meter logo={'javascript'} /></li>
                <li><Meter logo={'java'} /></li>
                <li><Meter logo={'python'} /></li>
                <li><Meter logo={'rust'} /></li>
              </>
              :
              <>
                <li><Meter logo={'react'} /></li>
                <li><Meter logo={'express'} /></li>
                <li><Meter logo={'mongo'} /></li>
                <li><Meter logo={'gql'} /></li>
              </>
            }
          </ul>
        </article>
        <article className={skillsStyles.description}>
          <hgroup>
            <h2>Open source work</h2>
          </hgroup>
          <ul>
            <li>
              <a href='https://github.com/funnicus/helikuparinen.fi'>helikuparinen.fi</a>
              <p>
                New version of the site for my mom, created with Next.js! 
                Features a gallery and a blog powered by Contentful!
              </p>
            </li>
            <li>
              <a href='https://github.com/funnicus/helikuparinen.fi'>juhanakuparinen.dev</a>
              <p>
                The site you are browsing right now. Powered by Next.js
                and Keystone 6.
              </p>
            </li>
            <li>
              <a href='https://github.com/KvanttoriOy/create-ts-app'>create-ts-app</a>
              <p>
                Just a simple collection of shell scripts to
                automate the process of creating a Node + TypeScript
                application.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Skills;