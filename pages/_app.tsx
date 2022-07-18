
import type { AppProps /*, AppContext */ } from 'next/app';
import '../styles/index.css';
import { Fonts } from '../fonts';
import { Chakra } from '../Chakra';
import Layout from '../components/Layout';
import React, { useEffect, useState } from 'react';
import Router from 'next/router';
import { css } from '@emotion/core';
import { BounceLoader } from 'react-spinners';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
    Modal, ModalOverlay,
} from '@chakra-ui/react';
import { RecoilRoot } from 'recoil';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';



const override = css`
position: absolute;
  top: 50%;
  height: 100px;
  margin-top: -50px;
`;
function Application({ Component, pageProps }: AppProps) {

    let [loading, setLoading] = useState(false);
    Router.events.on('routeChangeStart', () => setLoading(true));
    Router.events.on('routeChangeComplete', () => setLoading(false));
    Router.events.on('routeChangeError', () => setLoading(false));
    return (

        <RecoilRoot>
            <DefaultSeo {...SEO} />
            <Chakra cookies={pageProps.cookies}>
                <Layout title="Home | Modern News" px={{ base: '0px', md: '0px' }} >
                    <Modal isOpen={loading}>
                        <ModalOverlay textAlign="center">
                            <BounceLoader css={override} size={70} color='#A8A248' loading />
                        </ModalOverlay>
                    </Modal>
                    <Fonts />

                    <Component {...pageProps} />
                </Layout>

            </Chakra>
        </RecoilRoot>

    );
}

export { getServerSideProps } from '../Chakra';

export default Application;
