import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "../components/Layout";
import Head from "next/head";
import {useRouter} from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();

    if(router.pathname === '/account/login') return <Component {...pageProps} />;

    return(
      <>
          <Head>
              <title>Materials Resources</title>
              <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
          </Head>
          <Layout>
              <Component {...pageProps} />
          </Layout>
      </>

  )
}

export default MyApp
