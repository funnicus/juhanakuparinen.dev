import type { AppProps } from 'next/app';
import Router from 'next/router';

import Layout from '@/components/Layout';
import * as gtag from '@/utils/gtag';

import '../styles/globals.scss';

//we track pageview when route is changed
Router.events.on('routeChangeComplete', (url) => gtag.pageview(url));

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
