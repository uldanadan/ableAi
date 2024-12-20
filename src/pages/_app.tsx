import Head from 'next/head';
import '@/styles/globals.scss';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Able ai</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default appWithTranslation(App);
