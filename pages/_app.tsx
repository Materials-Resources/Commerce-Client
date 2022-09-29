import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "../components/Layout";
import Head from "next/head";
import {useRouter} from "next/router";
import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery } from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://localhost:3001/graphql/',
    cache: new InMemoryCache(),
});
function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();

    if(router.pathname === '/account/login') return <Component {...pageProps} />;
    if(router.pathname === '/account/reset') return <Component {...pageProps} />;



    return(
        <>
            <Head>
                <title>Materials Resources</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />

            </Head>

            <ApolloProvider client={client}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ApolloProvider>
        </>

  )
}

export default MyApp
