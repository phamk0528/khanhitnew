// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app';
import '../styles/index.css';
import { Fonts } from '../fonts';
import { Chakra } from '../Chakra';
import Layout from '../components/Layout';
import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";;
import { RecoilRoot } from 'recoil';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';




function Application({ Component, pageProps }: AppProps) {
    return (

        <RecoilRoot>
            <DefaultSeo {...SEO} />
            <Chakra cookies={pageProps.cookies}>
                <Layout title="Home | Modern News" px={{ base: '0px', md: '0px' }} >
                    <Component {...pageProps} />
                    <Fonts />
                </Layout>

            </Chakra>
        </RecoilRoot>

    );
}

export { getServerSideProps } from '../Chakra';

export default Application;
