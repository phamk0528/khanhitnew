import React from 'react';

import ListEvents from '../components/views/homepage/ListEvents';

import { Box } from '@chakra-ui/react';
import Banner from '../components/banner/Banner';
import { GetStaticProps } from 'next';
import { useGetHomePage, useGetProductByCollection } from '../helpers/carousels';
import { NextSeo } from 'next-seo';


// import ListProducts from '../components/views/homepage/ListProductCard';
// import HightLight from '../components/views/homepage/HighLight';
// import ListSlideView from '../components/views/homepage/ListSlideView';
// import FeaturedBranch from '../components/views/homepage/FeatureBranch';
// import FooterHomePage from '../components/views/homepage/Footer';
import dynamic from 'next/dynamic'
import TrendingCard from '../components/views/homepage/Trending';

// const TrendingCard = dynamic(() => import('../components/views/homepage/Trending'))
const ListProducts = dynamic(() => import('../components/views/homepage/ListProductCard'))
const HightLight = dynamic(() => import('../components/views/homepage/HighLight'))
const ListSlideView = dynamic(() => import('../components/views/homepage/ListSlideView'))
const FeaturedBranch = dynamic(() => import('../components/views/homepage/FeatureBranch'))
const FooterHomePage = dynamic(() => import('../components/views/homepage/Footer'))
// const Banner = dynamic(() => import('../components/banner/Banner'))

type Props = {
    featured?: any;
    banners?: any;
    carousels?: any;
    events?: any;
    instagrams?: any;
    deals?: any;
    errors?: string;
    homepageContent?: any
    bestSeller?: any
    recommend?: any
};

const IndexPage = ({ carousels, homepageContent, recommend, bestSeller }: Props) => {
    const homepageContentData = Object.values(homepageContent?.homepage_content)

    const homepageFooterData = Object.values(homepageContent?.footer)
    const listContent = homepageContentData?.filter((x: any) => {
        return x?.id === "Y12VF8Q9" || x?.id === "qq1ON/UD"
    })
    const listArraivel = homepageContentData?.filter((x: any) => {
        return x?.id === "YferTLSC" || x?.id === "jGekaT+o"
    })?.map((x: any, i: any) => { return { ...x, textContent: listContent[+i]?.props?.values?.text } })

    const listBanner = homepageContentData?.filter((x: any) => {
        return x?.id === "4g+Chi4C"
    })
    const bannerHighlight = homepageContentData?.filter((x: any) => {
        return x?.id === "81QE/qtW"
    })
    const flashSaleHighlight = homepageContentData?.filter((x: any) => {
        return x?.id === "KpVRNCGX"
    })

    return (
        <>
            <NextSeo
                title="Home"
                description="This is homepage "
                canonical="https://www.canonicalurl.ie/"
                openGraph={{
                    url: 'https://www.canonicalurl.ie/',
                    title: 'Home',
                    description: 'This is homepage',
                    images: [
                        {
                            url: '/logoPlayrightIT.PNG',
                            width: 800,
                            height: 600,
                            alt: 'Og Image Alt',
                        },
                        {
                            url: '/logoPlayrightIT.PNG',
                            width: 900,
                            height: 800,
                            alt: 'Og Image Alt Second',
                        },
                        { url: '/logoPlayrightIT.PNG' },
                        { url: '/logoPlayrightIT.PNG' },
                    ],
                }}
            />

            <TrendingCard carousels={carousels} homepageContentData={homepageContentData} />

            <Box px={{ base: '.6em', md: '2em' }} maxWidth={{ base: '100%', md: '1200px' }} marginX={"auto"}>
                <>

                    {listArraivel?.length > 0 ? <ListEvents events={listArraivel} /> : null}

                    <Box display={{ base: 'none', lg: 'flex' }}>
                        <Banner
                            mt={{ base: '20px', lg: '10px' }}
                            pl={{ base: '0px', lg: '60px' }}
                            pr={{ base: '0px', lg: '60px' }}
                            banner={{ url: listBanner[0]?.props?.values?.imageUrl?.url }}

                        />
                    </Box>
                    <Box display={{ base: 'flex', lg: 'none' }}>
                        <Banner
                            mt={{ base: '20px', lg: '50px' }}
                            pl={{ base: '0px', lg: '60px' }}
                            pr={{ base: '0px', lg: '60px' }}
                            banner={{ url: listBanner[0]?.props?.values?.imageUrl?.urlMobile }}

                        />
                    </Box>
                </>
                {bestSeller?.length > 0 ? <ListProducts products={bestSeller} title={'Best Seller'} /> : null}
                <HightLight carousels={carousels} homepageContentData={homepageContentData} banner={bannerHighlight[0]?.props?.values?.imageUrl?.urlMobile}
                    flashSaleHighlight={flashSaleHighlight[0]?.props?.values?.imageUrl?.urlMobile} />
                <ListSlideView carousels={carousels} homepageContentData={homepageContentData} />
                {recommend?.length > 0 ? <ListProducts products={recommend} title='Recommended Products' /> : null}
                <FeaturedBranch homeContent={homepageContentData} />
            </Box>
            <FooterHomePage homeContent={homepageFooterData} />

            {/* <ComingSoon /> */}
        </>
    );
};

export const getStaticProps: GetStaticProps = async (context: any) => {
    try {

        let homepageContent = useGetHomePage()
        let bestSeller = useGetProductByCollection(10)
        let recommend = useGetProductByCollection(13)

        let result = await Promise.all([homepageContent, bestSeller, recommend])

        return {
            props: {

                homepageContent: result[0],
                bestSeller: result[1],
                recommend: result[2]
            },
            revalidate: 60,
        };
    } catch (err: any) {
        console.log('err.message', err);

        return { props: { errors: err.message } };
    }
};

export default IndexPage;
