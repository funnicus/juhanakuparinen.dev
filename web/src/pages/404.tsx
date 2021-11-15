import React, { CSSProperties } from 'react';
import Link from 'next/link';
import { FiChevronLeft } from 'react-icons/fi';

import SEO from '@/components/SEO';

import styles from '../styles/404.module.scss';

const linkContainerStyle: CSSProperties = {
  fontSize: '15px',
  height: 'fit-content',
  width: 'fit-content',
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
};

const chevronStyle: CSSProperties = {
  fontSize: 'var(--font-size-body4)',
  padding: '1px 0 0'
};

const NotFoundPage = (): JSX.Element => (
  <>
    <SEO title="404: Not found" />
    <div className={styles.NotFound}>
      <header className={styles['not-found']}>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness🥺</p>
        <Link href="/" passHref>
          <div className={styles['link']} style={linkContainerStyle}>
            <FiChevronLeft style={chevronStyle} />
            <a>
              <span>Back to the front page</span>
            </a>
          </div>
        </Link>
      </header>
    </div>
  </>
);

export default NotFoundPage;