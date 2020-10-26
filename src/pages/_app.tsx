import type { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyle from '../styles/Global';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Lading Page</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
