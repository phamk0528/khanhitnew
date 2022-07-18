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


const DesktopNav = () => {

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
                        >
                            <AiFillBell />

                        </chakra.a>

                    </HStack>
                </Flex>
            </chakra.header></>
    );
};





