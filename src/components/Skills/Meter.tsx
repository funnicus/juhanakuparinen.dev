import React from 'react';
import { 
  SiTypescript, 
  SiJavascript, 
  SiReact, 
  SiNodedotjs, 
  SiGraphql, 
  SiMongodb, 
  SiExpress,
  SiRust,
  SiJava,
  SiPython
} from 'react-icons/si';

import styles from './Meter.module.scss';

type Props = {
  logo: 
  | 'javascript' 
  | 'typescript' 
  | 'react' 
  | 'node' 
  | 'gql' 
  | 'mongo' 
  | 'express'
  | 'java'
  | 'python'
  | 'rust';
}

const Meter = ({ logo }: Props) => {

  let element: JSX.Element;

  switch (logo) {
  case 'javascript':
    element = (
      <div className={styles.metric}>
        <span><SiJavascript /> - JavaScript</span>
        <div className={styles.meter}>
          <div style={{ background: '#fcdc00', borderRadius: '20px', width: '85%', height: '10px' }}>

          </div>
        </div>
      </div>
    );
    break;
  case 'typescript':
    element = (
      <div className={styles.metric}>
        <span><SiTypescript /> - TypeScript</span>
        <div className={styles.meter}>
          <div style={{ background: '#3178c6', borderRadius: '20px', width: '90%', height: '10px' }}>

          </div>
        </div>
      </div>
    );
    break;
  case 'react':
    element = (
      <div className={styles.metric}>
        <span><SiReact /> - React</span>
        <div className={styles.meter}>
          <div style={{ background: '#61dafb', borderRadius: '20px', width: '90%', height: '10px' }}>

          </div>
        </div>
      </div>
    );
    break;
  case 'node':
    element = (
      <div className={styles.metric}>
        <span><SiNodedotjs /> - Node.js</span>
        <div className={styles.meter}>
          <div style={{ background: '#026e00', borderRadius: '20px', width: '85%', height: '10px' }}>

          </div>
        </div>
      </div>
    );
    break;
  case 'mongo':
    element = (
      <div className={styles.metric}>
        <span><SiMongodb /> - MongoDB</span>
        <div className={styles.meter}>
          <div style={{ background: '#023430', borderRadius: '20px', width: '60%', height: '10px' }}>

          </div>
        </div>
      </div>
    );
    break;
  case 'gql':
    element = (
      <div className={styles.metric}>
        <span><SiGraphql /> - GraphQL</span>
        <div className={styles.meter}>
          <div style={{ background: '#e10098', borderRadius: '20px', width: '50%', height: '10px' }}>

          </div>
        </div>
      </div>
    );
    break;
  case 'express':
    element = (
      <div className={styles.metric}>
        <span><SiExpress /> - Express</span>
        <div className={styles.meter}>
          <div style={{ background: '#000', borderRadius: '20px', width: '90%', height: '10px' }}>

          </div>
        </div>
      </div>
    );
    break;
  case 'java':
    element = (
      <div className={styles.metric}>
        <span><SiJava /> - Java</span>
        <div className={styles.meter}>
          <div style={{ background: '#d00000', borderRadius: '20px', width: '40%', height: '10px' }}>

          </div>
        </div>
      </div>
    );
    break;
  case 'python':
    element = (
      <div className={styles.metric}>
        <span><SiPython /> - Python</span>
        <div className={styles.meter}>
          <div style={{ background: '#1e415e', borderRadius: '20px', width: '35%', height: '10px' }}>

          </div>
        </div>
      </div>
    );
    break;
  case 'rust':
    element = (
      <div className={styles.metric}>
        <span><SiRust /> - Rust</span>
        <div className={styles.meter}>
          <div style={{ background: '#f44a00', borderRadius: '20px', width: '20%', height: '10px' }}>

          </div>
        </div>
      </div>
    );
    break;
  default:
    element = <p>Error</p>;
    break;
  }

  return (
    <>
      {element}
    </>
  );
};

export default Meter;