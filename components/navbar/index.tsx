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

import Logo from '../Logo';
import React, { useState, useEffect } from 'react';
import { BsFillCameraVideoFill } from "react-icons/bs";
import {
    AiOutlineMenu,
    AiFillHome,
    AiOutlineInbox,
    AiOutlineUser,
    AiOutlineSearch,
    AiOutlineShoppingCart,
} from "react-icons/ai";


export default function WithSubnavigation() {




    return (
        <Box>
            <DesktopNav />
        </Box>
    );
}


const DesktopNav = () => {

    const mobileNav = useDisclosure();
    return (
        <>
            <NavBar />
            <chakra.header

                w="full"
                px={{ base: 2, sm: "20%" }}
                py={4}


            >
                <Flex alignItems="center" justifyContent="space-between" mx="auto">
                    <HStack display="flex" spacing={3} alignItems="center">
                        <Box display={{ base: "inline-flex", md: "none" }} flex={0.5}>
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

                        </Box>
                        <chakra.a
                            href="/"
                            title="Choc Home Page"
                            display="flex"
                            alignItems="center"
                            flex={1}
                        >
                            <Logo />

                        </chakra.a>




                    </HStack>
                    <HStack
                        spacing={3}
                        display={{ base: "none", md: "flex" }}
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
                            display="flex"
                            flexDir="row"
                            aliginItems='center'
                            minW="150px"
                        >
                            <AiOutlineUser size='25px' />
                            <Text fontSize='15px' pt="5px">Login/ Register</Text>
                        </chakra.a>

                        <chakra.a
                            p={3}
                            color="gray.800"
                            _dark={{ color: "inherit" }}
                            rounded="sm"
                            _hover={{ color: "gray.800", _dark: { color: "gray.600" } }}

                        >
                            <AiOutlineShoppingCart size='25px' />

                        </chakra.a>

                    </HStack>

                    <Box
                        spacing={0}
                        display={{ base: "flex", md: "none" }}
                        alignItems="center"
                        flex={0.5}
                    >

                        <chakra.a
                            p={3}
                            color="gray.800"
                            _dark={{ color: "inherit" }}
                            rounded="sm"
                            _hover={{ color: "gray.800", _dark: { color: "gray.600" } }}
                            display="flex"
                            flexDir="row"
                            aliginItems='center'

                        >
                            <AiOutlineUser size='25px' />

                        </chakra.a>

                        <chakra.a
                            p={3}
                            color="gray.800"
                            _dark={{ color: "inherit" }}
                            rounded="sm"
                            _hover={{ color: "gray.800", _dark: { color: "gray.600" } }}

                        >
                            <AiOutlineShoppingCart size='25px' />

                        </chakra.a>

                    </Box>
                </Flex>
            </chakra.header>
            <MenuBar />
        </>
    );
};


const NavBar = () => {
    return (
        <Box w="100%" height="50px" display={{ base: 'none', md: 'flex' }} flexDir='row' px='20%' py='20px' justifyContent='flex-end' bg="rgb(236, 236, 236);" >
            {['contact us', 'track my order', 'help'].map((item: any) =>
                <Box px='10px'>
                    <Text fontSize="15px"
                        fontWeight='bold'
                        textTransform="uppercase">{item}</Text>
                </Box>

            )}
        </Box>
    )

}
const MenuBar = () => {
    return (
        <Box w="100%" height="50px" display={{ base: 'none', md: 'flex' }} flexDir='row' px='20%' py='20px' justifyContent='space-between'>
            {['Men', 'Women', 'kids', 'playitright sports', 'brands'].map((item: any) =>
                <Box px='10px'>
                    <Text fontSize="15px"
                        fontWeight='bold'
                        textTransform="uppercase">{item}</Text>
                </Box>

            )}
        </Box>
    )

}

