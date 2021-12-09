import React from 'react';

import { SiTypescript, SiJavascript, SiReact, SiNodedotjs, SiGraphql, SiMongodb } from 'react-icons/si';

type Props = {
  logo: 'javascript' | 'typescript' | 'react' | 'node' | 'gql' | 'mongo';
}

import styles from './Tiles.module.scss';

const Tile = ({ logo }: Props) => {

  let element: JSX.Element;

  switch (logo) {
  case 'javascript':
    element = (
      <div className={styles.js}>
        <a href="https://www.javascript.com/">
          <SiJavascript className={styles['fab']}/>
          <span> - JavaScript</span>
        </a>
      </div>
    );
    break;
  case 'typescript':
    element = (
      <div className={styles.ts}>
        <a href="https://www.typescriptlang.org/">
          <SiTypescript className={styles.fab}/>
          <span> - TypeScript</span>
        </a>
      </div>
    );
    break;
  case 'react':
    element = (
      <div className={styles.react}>
        <a href="https://reactjs.org/">
          <SiReact className={styles['fab']}/>
          <span> - React</span>
        </a>
      </div>
    );
    break;
  case 'node':
    element = (
      <div className={styles.node}>
        <a href="https://nodejs.org/en/">
          <SiNodedotjs className={styles['fab']}/>
          <span> - Node.js</span>
        </a>
      </div>
    );
    break;
  case 'mongo':
    element = (
      <div className={styles.mongodb}>
        <a href="https://graphql.org/">
          <SiMongodb className={styles['fab']}/>
          <span> - MongoDB</span>
        </a>
      </div>
    );
    break;
  case 'gql':
    element = (
      <div className={styles.graphql}>
        <a href="https://graphql.org/">
          <SiGraphql className={styles['fab']}/>
          <span> - GraphQL</span>
        </a>
      </div>
    );
    break;
  default:
    element = <p>Error</p>;
    break;
  }

  return (
    <div className={styles.tile}>
      {element}
    </div>
  );
};

export default Tile;