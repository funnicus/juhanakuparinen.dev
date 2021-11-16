import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';

import Layout from '@/components/Layout';

import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
