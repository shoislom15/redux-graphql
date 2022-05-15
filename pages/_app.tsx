import type { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from "next/head";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Example project</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
