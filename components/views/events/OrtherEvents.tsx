import { Box, Heading, Icon, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import useColorTheme from '../../../hooks/useColorTheme';
import EventCard from '../../cards/EventCard';
import Slider from 'react-slick';
import useWindowSize from '../../../hooks/useWindowSize';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { useHover } from '../../../hooks/useHover';

type Props = {
    events: any;
    margin?: number;
    containerHeight?: number;
};

const ListEvents = ({ events }: Props) => {
    const colors = useColorTheme();
    const screenSize = useWindowSize();
    const { hoverProps, isHovered } = useHover({});
    function SampleNextArrow(props: any) {
        const { onClick } = props;
        return (
            <Icon
                position="absolute"
                cursor="pointer"
                // display={isHovered ? "flex" : "none"}
                top={'50%'}
                right={-35}
                zIndex={99}
                as={MdKeyboardArrowRight}
                onClick={onClick}
                boxSize="3rem"
                mt={1}
            />
        );
    }

    function SamplePrevArrow(props: any) {
        const { onClick } = props;
        return (
            <Icon
                position="absolute"
                cursor="pointer"
                // display={isHovered ? "flex" : "none"}
                top={'50%'}
                left={-35}
                zIndex={99}
                as={MdKeyboardArrowLeft}
                onClick={onClick}
                boxSize="3rem"
                mt={1}
            />
        );
    }
    const settings =
        screenSize.width >= 1100
            ? {
                  dots: true,
                  infinite: true,
                  slidesToShow: events?.length >= 4 ? 4 : events?.length,
                  slidesToScroll: 4,
                  autoplay: true,
                  speed: 500,
                  autoplaySpeed: 5000,
                  cssEase: 'linear',
                  nextArrow: <SampleNextArrow />,
                  prevArrow: <SamplePrevArrow />,
              }
            : screenSize.width >= 750
            ? {
                  dots: true,
                  infinite: true,
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  autoplay: true,
                  speed: 500,
                  autoplaySpeed: 5000,
                  cssEase: 'linear',
                  nextArrow: <SampleNextArrow />,
                  prevArrow: <SamplePrevArrow />,
              }
            : screenSize.width >= 600
            ? {
                  dots: false,
                  infinite: false,
                  slidesToShow: 2.5,
                  swipeToSlide: true,
                  autoplay: false,
                  arrows: false,
                  speed: 500,
                  autoplaySpeed: 5000,
                  cssEase: 'linear',
                  nextArrow: <SampleNextArrow />,
                  prevArrow: <SamplePrevArrow />,
              }
            : {
                  dots: false,
                  infinite: false,
                  slidesToShow: 1.5,
                  swipeToSlide: true,
                  autoplay: false,
                  arrows: false,
                  speed: 500,
                  autoplaySpeed: 5000,
                  nextArrow: <SampleNextArrow />,
                  prevArrow: <SamplePrevArrow />,
              };
    let height = events?.map((item: any) => {
        return item.title.length;
    });
    var largest = Math.max.apply(Math, height);
    return (
        <>
            <Box
                as="section"
                pl={{ base: '0px', lg: '60px' }}
                pt={{ base: '30px', lg: '60px' }}
                pr={{ base: '0px', lg: '60px' }}
            >
                {events?.length === 0 ? null : (
                    <Heading
                        transition="ease-in 0.15s"
                        fontSize={{ base: '16px', md: '20px' }}
                        bottom="30px"
                        textAlign={{ base: 'left', md: 'center' }}
                        color={colors.primary}
                        fontFamily="Arial"
                    >
                        Other Events
                    </Heading>
                )}

                {events.length < 4 ? (
                    <SimpleGrid
                        pt={3}
                        columns={
                            screenSize.width >= 950
                                ? 4
                                : screenSize.width <= 950 && screenSize.width >= 750
                                ? 3
                                : screenSize.width < 750 && screenSize.width >= 500
                                ? 2
                                : 2
                        }
                        spacing="5px"
                        height="max-content"
                    >
                        {events?.map((event: any) => (
                            <Box pt={{ base: '5%', lg: '5%' }} key={'listEvent' + event.id}>
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
                ) : (
                    <Box {...hoverProps}>
                        <Slider {...settings}>
                            {events?.map((event: any) => (
                                <Box pt={{ base: '5%', lg: '10%' }} key={'listEvent' + event.id}>
                                    <EventCard
                                        column
                                        event={event}
                                        idEvent={event.id}
                                        titleFontSize={'1em'}
                                        heightTitle={largest + 10 + 'px'}
                                    />
                                </Box>
                            ))}
                        </Slider>
                    </Box>
                )}
            </Box>
        </>
    );
};

export default ListEvents;
