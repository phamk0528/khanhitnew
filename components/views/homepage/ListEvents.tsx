import { Center, Box, Heading, Button, Icon, Divider, SimpleGrid } from '@chakra-ui/react';
import React, { useRef } from 'react';
import useColorTheme from '../../../hooks/useColorTheme';
import EventCard from '../../cards/EventCard';
import Slider from 'react-slick';
import useWindowSize from '../../../hooks/useWindowSize';
import { useRouter } from 'next/router';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { useHover } from '../../../hooks/useHover';

type Props = {
    events: any;
    margin?: number;
    containerHeight?: number;
};

const ListEvents = ({ events }: Props) => {

    const listNewArraival = events?.map((x: any) => {
        return {
            title: x?.id,
            idArticle: x?.id,
            photos: [{ url: x?.props?.values?.imageUrl?.url }, { url: x?.props?.values?.imageUrl?.urlMobile }],

            textContent: x?.textContent
        }
    })



    let height = listNewArraival?.map((item: any) => {
        return item.title.length;
    });
    var largest = Math.max.apply(Math, height);
    return (
        <>
            <Box
                as="section"
                pt={{ base: '0px', md: '2%' }}
                pl={{ base: '0px', lg: '60px' }}
                pr={{ base: '0px', lg: '60px' }}
                mt={{ base: '20px', lg: 'none' }}
            >
                <Heading
                    transition="ease-in 0.15s"
                    fontSize={{ base: '15px', md: '18px' }}
                    bottom="30px"
                    textAlign="left"

                    fontFamily="Arial"
                    fontWeight={700}
                >
                    New Arraivals
                </Heading>
                {/* <Divider colorScheme="blackAlpha" display={{ base: 'flex', md: 'none' }} /> */}

                <SimpleGrid
                    pt={3}
                    columns={

                        2
                    }
                    spacing="5px"
                    height="max-content"
                >
                    {listNewArraival?.map((event: any) => (
                        <Box pt={{ base: '2%', lg: '5%' }} key={'listEvent' + event.id}>
                            <EventCard
                                column
                                event={event}
                                idEvent={event.id}
                                titleFontSize={'1em'}
                                heightTitle={largest + 10 + 'px'}
                            />
                        </Box>
                    ))}
                </SimpleGrid>



            </Box>
        </>
    );
};

export default ListEvents;
