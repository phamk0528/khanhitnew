import {
    Box,
    Flex,
    Text,
    IconButton,
    InputGroup,
    InputRightElement,
    Input,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Spacer,
    Button,
    chakra,
    Image,
    HStack,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerBody,
    DrawerCloseButton, InputLeftElement, CloseButton
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from '@chakra-ui/icons';

import { BiUserCircle } from 'react-icons/bi';
import styles from '../../constants/styles';
import { useFormik } from 'formik';
import { useRecoilState } from 'recoil';
import useWindowSize from '../../hooks/useWindowSize';
import useColorTheme from '../../hooks/useColorTheme';
import { SearchKeyword } from '../../recoil/search';
import { useRouter } from 'next/router';
import Logo from '../Logo';
import React, { useState, useEffect } from 'react';
import { BsFillCameraVideoFill } from "react-icons/bs";
import {
    AiOutlineMenu,
    AiFillHome,
    AiOutlineInbox,
    AiOutlineSearch,
    AiFillBell,
} from "react-icons/ai";


export default function WithSubnavigation() {




    return (
        <Box>
            <DesktopNav />
        </Box>
    );
}

type PropsDesktopNav = {
    router?: any;
};
const DesktopNav = ({ router }: PropsDesktopNav) => {

    const mobileNav = useDisclosure();
    return (
        <>
            <chakra.header

                w="full"
                px={{ base: 2, sm: 4 }}
                py={4}
                shadow="md"
            >
                <Flex alignItems="center" justifyContent="space-between" mx="auto">
                    <HStack display="flex" spacing={3} alignItems="center">
                        <Box display={{ base: "inline-flex", md: "none" }}>
                            <IconButton
                                display={{ base: "flex", md: "none" }}
                                aria-label="Open menu"
                                fontSize="20px"
                                color="gray.800"
                                _dark={{ color: "inherit" }}
                                variant="ghost"
                                icon={<AiOutlineMenu />}
                                onClick={mobileNav.onOpen}
                            />
                            <Stack
                                pos="absolute"
                                top={0}
                                left={0}
                                right={0}
                                display={mobileNav.isOpen ? "flex" : "none"}
                                flexDirection="column"
                                p={2}
                                pb={4}
                                m={2}

                                spacing={3}
                                rounded="sm"
                                shadow="sm"
                            >
                                <CloseButton
                                    aria-label="Close menu"
                                    justifySelf="self-start"
                                    onClick={mobileNav.onClose}
                                />
                                <Button w="full" variant="ghost" leftIcon={<AiFillHome />}>
                                    Dashboard
                                </Button>
                                <Button
                                    w="full"
                                    variant="solid"
                                    colorScheme="brand"
                                    leftIcon={<AiOutlineInbox />}
                                >
                                    Inbox
                                </Button>
                                <Button
                                    w="full"
                                    variant="ghost"
                                    leftIcon={<BsFillCameraVideoFill />}
                                >
                                    Videos
                                </Button>
                            </Stack>
                        </Box>
                        <chakra.a
                            href="/"
                            title="Choc Home Page"
                            display="flex"
                            alignItems="center"
                        >
                            <Logo />

                        </chakra.a>

                        <HStack spacing={3} display={{ base: "none", md: "inline-flex" }}>
                            <Button variant="ghost" leftIcon={<AiFillHome />} size="sm">
                                Dashboard
                            </Button>
                            <Button
                                variant="solid"
                                colorScheme="brand"
                                leftIcon={<AiOutlineInbox />}
                                size="sm"
                            >
                                Inbox
                            </Button>
                            <Button
                                variant="ghost"
                                leftIcon={<BsFillCameraVideoFill />}
                                size="sm"
                            >
                                Videos
                            </Button>
                        </HStack>
                    </HStack>
                    <HStack
                        spacing={3}
                        display={mobileNav.isOpen ? "none" : "flex"}
                        alignItems="center"
                    >
                        <InputGroup>
                            <InputLeftElement pointerEvents="none">
                                <AiOutlineSearch />
                            </InputLeftElement>
                            <Input type="tel" placeholder="Search..." />
                        </InputGroup>

                        <chakra.a
                            p={3}
                            color="gray.800"
                            _dark={{ color: "inherit" }}
                            rounded="sm"
                            _hover={{ color: "gray.800", _dark: { color: "gray.600" } }}
                        >
                            <AiFillBell />

                        </chakra.a>

                    </HStack>
                </Flex>
            </chakra.header></>
    );
};

type PropsMobileNav = {
    onClickSubscribe?: any;
    onClickSocial?: any;
    urlButtonSocial?: any;
};

const MobileNav = () => {
    return (
        <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ lg: 'none' }}>


            <Box mt="30px">
                {NAV_ITEMS.map((navItem) => (
                    <MobileNavItem key={navItem.label} {...navItem} />
                ))}
            </Box>
        </Stack>
    );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure();
    const colors = useColorTheme();

    return (
        <Stack spacing={2} onClick={children && onToggle}>
            <Flex
                py={1}
                as={Link}
                href={href ?? '#'}
                justify={'center'}
                alignItems={'center'}
                _hover={{
                    textDecoration: 'none',
                }}
                textAlign="center"
            >
                <Text
                    fontSize="16px"
                    fontWeight={300}
                    color={'white'}
                    _hover={{
                        textDecoration: 'none',
                        color: useColorModeValue('gray', 'white'),
                    }}
                >
                    {label}
                </Text>
                {children && (
                    <Icon
                        as={ChevronDownIcon}
                        transition={'all .25s ease-in-out'}
                        transform={isOpen ? 'rotate(180deg)' : ''}
                        w={6}
                        h={6}
                    />
                )}
            </Flex>

            {/* <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse> */}
        </Stack>
    );
};

interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
    // {
    //     label: `WHAT'S ON`,
    //     href: `/whatsOn`,
    // },
    // {
    //     label: 'STORE DIRECTORY',
    //     href: '/stores',
    // },
    // {
    //     label: "REWARDS",
    //     href: "/rewards",
    // },
    // {
    //     label: 'ARTS AT i12 KATONG',
    //     href: '/arts',
    // },
    // {
    //     label: 'ABOUT US',
    //     href: '/aboutUs',
    // },
    // {
    //     label: 'CONTACT US',
    //     href: '/contactUs',
    // },
];
