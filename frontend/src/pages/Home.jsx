import { Box, Container, Flex, Link, Heading, SimpleGrid, Spacer, useToast } from '@chakra-ui/react'
import React from 'react'
import { Link as ReactLink } from 'react-router-dom'
import Category from '../components/Category'
import Header from '../components/Header'
import Hero from '../components/Hero'
import ShopItem from '../components/ShopItem'
import { useAuthContext } from '../contexts/authContext'
import { useProductContext } from '../contexts/productContext'
import {DARK_PURPLE} from "../utils/color"

const Home = () => {
    const {name, products} = useProductContext()
    const {auth} = useAuthContext()
    const toast = useToast()

    const addToCart = (id) => {
        console.log("ID =>> ", id)
        if(!auth) {
            toast({
                title: "Please login in first",
                status: "info",
                position: "top-right",
                isClosable: true
            })
            return
        }
    }

    return (
        <Box>
            <Header />
            <Hero />
            <Category />
            <Box py={20}>
                <Container maxW={"container.lg"}>
                    <Flex mb={"10"}>
                        <Heading 
                            fontSize={"3xl"} 
                            color={DARK_PURPLE}
                            fontWeight={"semibold"}
                        >
                            Popular Items
                        </Heading>

                        <Spacer />

                        <Link to={"/"} as={ReactLink}
                            textTransform={"capitalize"}
                            fontSize={"sm"}
                        >
                            view all products
                        </Link>
                    </Flex>

                    <SimpleGrid columns={[1, 2, 3, 3]} spacing={6}>
                        { products.slice(0, 3)?.map(product => <ShopItem handleClick={(id) => addToCart(id)} key={product._id} {...product} />) }
                    </SimpleGrid>
                </Container>
            </Box>
        </Box>
    )
}

export default Home