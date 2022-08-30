import { Badge, Box, Button, Container, Divider, Flex, HStack, Icon, Input, InputGroup, InputLeftAddon, InputRightElement, Link, Select, Text, useDisclosure, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { GiWallet } from "react-icons/gi"
import { IoCartOutline, IoSearchOutline } from "react-icons/io5"
import { IoIosArrowDown } from "react-icons/io"
import { Link as ReactLink } from "react-router-dom"
import { getAllCategories } from '../api/category'
import { DARK_PURPLE, MEDIUM_PURPLE } from '../utils/color'
import ReactCountryFlag from "react-country-flag"
import ReactFlagsSelect from "react-flags-select";

const SelectOptions = ({ data }) => {
    return (
        <Select border={"none"} color={"gray.500"} fontSize={"sm"}>
            {data.map((item, index) => <option key={index} value={item.value}>{item.label}</option>)}
        </Select>
    )
}

const Header = () => {
    const [search, setSearch] = useState('')
    const { isOpen: isAccountOpen, onToggle: isAccountToggle } = useDisclosure()
    const [options, setOptions] = useState([
        { value: "*", label: "All categories" },
    ])

    const setUpCategories = async () => {
        const data = await getAllCategories()
        const newData = data.map((category) => ({ value: category._id, label: category.category }))
        newData.unshift({ value: "*", label: "All categories" })
        setOptions(newData)
    }

    useEffect(() => {
        setUpCategories()
    }, [])


    return (
        <Box w={"100%"}>
            {/* Top Header */}
            <Box py={"2"} bgColor={MEDIUM_PURPLE} display={{ base: "none", sm: "block" }}>
                <Container maxW={"container.lg"}>
                    <Flex justifyContent={"space-between"}>

                        <HStack color={"white"}>
                            <Icon fontSize={"xl"} as={GiWallet} />
                            <Text fontSize={"sm"}>Free shipping on orders over $100</Text>
                        </HStack>

                        <Button _hover={{ opacity: .75 }} fontSize={"xs"} display={"flex"} bgColor={"rgb(13,9, 40)"} color={"white"} py={'1'} px={'3'}>
                            Don't miss out.&nbsp;<strong>Subscribe now</strong>
                        </Button>
                    </Flex>
                </Container>
            </Box>

            <Box py={"4"} bgColor={"rgb(70, 41, 220)"}>
                <Container maxW={"container.lg"}>
                    <Flex justifyContent={"space-between"}>
                        {/* Logo */}
                        <Link _hover={{ textDecoration: "none" }} color={"white"} display={"flex"} fontSize={"2xl"} fontWeight={"hairline"} as={ReactLink} to={"/"}>
                            mini<Text fontWeight={"medium"}>mart</Text>
                        </Link>

                        {/*  Search Box */}
                        <InputGroup border={"none"} color="white" maxW={"500px"} display={{ base: "none", sm: "none", md: "none", lg: "flex" }}>
                            <InputLeftAddon border={"none"} bgColor={DARK_PURPLE} px={0} children={<SelectOptions data={options} />} />
                            <Input list="category" bg={"white"} color={"gray.500"} onChange={(e) => setSearch(e.target.value)} border={"none"} type='text' value={search} placeholder='Search name, category...' />
                            <datalist id="category">
                                {options.map((item, index) => <option key={index} value={item.label}></option>)}
                            </datalist>
                            <InputRightElement cursor={"pointer"} children={<Text as={IoSearchOutline} fontSize={"xl"} color={"#ccc"} />} />
                        </InputGroup>

                        {/*  Cart */}
                        <HStack gap={"1rem"} display={{ base: "none", sm: "flex" }}>
                            <HStack onClick={isAccountToggle} alignItems={"center"} position={"relative"} cursor={"pointer"} color={"white"}>
                                <Text fontSize={"sm"}>Account</Text>
                                <Icon  as={IoIosArrowDown} transition={"transform .2s"} transform={isAccountOpen ? "rotate(180deg)" : "rotate(0deg)"} fontSize={"sm"} />

                                <Box
                                    position={"absolute"}
                                    top={"120%"}
                                    left={"0"}
                                    minWidth={"100%"}
                                    width={"200px"}
                                    bgColor={"white"}
                                    zIndex={"1"}
                                    transformOrigin={"top"}
                                    transition={"transform .2s ease-in-out"}
                                    transform={isAccountOpen ? "scaleY(1)" : "scaleY(0)"}
                                >
                                    <VStack w={"100%"}>
                                        <Text p={3} fontWeight={"medium"} w={"100%"} _hover={{ bgColor: "gray.200" }} fontSize={"sm"} color={"red.600"} textAlign={"left"}>Logout</Text>
                                    </VStack>
                                </Box>
                            </HStack>
                            <Divider borderColor={"gray.300"} orientation="vertical" h={"80%"} />
                            <HStack gap={".8rem"}> 
                                {/* Country Stuff */}
                                <HStack color={"white"}>
                                    {/* <ReactFlagsSelect  /> */}
                                    <Box rounded={"full"} w={30} h={30} overflow={"hidden"} borderColor={"white"} borderWidth={2}>
                                        <ReactCountryFlag aria-selected countryCode="NG" style={{height: "100%", width: "100%", objectFit: "cover"}} svg />
                                    </Box>
                                    <Icon as={IoIosArrowDown} fontSize={"sm"} />
                                </HStack>

                                <HStack color={"white"} gap={".3rem"}>
                                    <Icon as={IoCartOutline} fontSize={"xl"} />
                                    <Text fontSize={"md"}>Cart</Text>
                                    <Badge px={2} py={1} rounded={"full"} bgColor={"black"} color={"white"}>0</Badge>
                                </HStack>
                            </HStack>
                        </HStack>

                        {/* Mobile View */}
                        <HStack color={"white"} display={{ base: "flex", sm: "none" }} gap={".3rem"}>
                            <Icon as={IoCartOutline} fontSize={"xl"} />
                            <Text fontSize={"md"}>Cart</Text>
                            <Badge px={2} py={1} rounded={"full"} bgColor={"black"} color={"white"}>0</Badge>
                        </HStack>
                    </Flex>
                </Container>
            </Box>
        </Box>
    )
}

export default Header