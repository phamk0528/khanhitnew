import React, { useState } from 'react';
import { Box, BoxProps, useBreakpointValue } from '@chakra-ui/react';
import useColorTheme from '../../hooks/useColorTheme';
import { useRouter } from 'next/router';
import Image from 'next/image'
import Card from './Card';

import moment from 'moment';
import { getUrlImage } from '../../helpers/commonFuction';
import useWindowSize from '../../hooks/useWindowSize';


interface Props extends BoxProps {
    event: any;
    column?: boolean;
    height?: number | string;
    skeleton?: boolean;
    imgBoxSize?: string | number;
    titleFontSize?: number | string;
    idEvent?: string;
    heightTitle: string;
}



const EventCard = ({
    event,
    column = false,
    imgBoxSize,
    skeleton = false,
    titleFontSize = '1.4rem',
    idEvent,
    heightTitle,
    ...props
}: Props) => {
    const [hover, setHover] = useState(false);
    const colors = useColorTheme();


    const router = useRouter();
    const onClickEvent = () => {
        router.push(`/events/${idEvent}`);
        window.scrollTo(0, 0);
    };

    const screenSize = useWindowSize();

    return (

        <Card
            onClick={() => onClickEvent()}
            justifyContent="flex-start"
            cursor="pointer"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            // style={{ transform: `scale(${hover ? 1.1 : 1})` }}
            transition="ease-in 0.2s"
            overflow="hidden"
            display="flex"
            {...props}
            flexDirection={'column'}
            color={colors.primary}
        >
            {
                <Box width="100%"
                    height={{ base: "150px", md: '500px' }} position='relative'>
                    <Image
                        width={screenSize?.width > 500 ? "100%" : "180px"}
                        height={screenSize?.width > 500 ? "100%" : "150px"}
                        src={getUrlImage(event?.photos[1]?.url.replace('https://playitright.s3-ap-southeast-1.amazonaws.com/', 'https://quocbcx-1c878.kxcdn.com/') + (event?.photos[1]?.url ? screenSize?.width > 500 ? '?width=550&quality=100' : `?width=300&quality=80` : null) ?? '/placeholder.png')}
                        alt={'Photo of ' + event?.title}
                        // objectFit="cover"
                        layout='fill'
                        priority={true}
                    />
                </Box>
            }

            <Box color={"white"} bg={"red"} pt="2px" textAlign={'center'} pb="18px" fontSize={"14px"}>
                <Box h={heightTitle}>

                    <div className="product-des" dangerouslySetInnerHTML={{ __html: event?.textContent }}></div>
                </Box>


            </Box>
        </Card>

    );
};

export default EventCard;
