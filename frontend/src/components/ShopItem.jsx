import { Box, Button, Flex, Heading, Image, Link, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import { Link as ReactLink } from "react-router-dom"

const ShopItem = ({ category, image, _id, handleClick, name, price }) => {
    return (
        <Box rounded={"md"} overflow={"hidden"} shadow={"md"}>
            <Box h={200} w={"100%"}>
                <Image 
                    src={image || ""} 
                    alt={name || "image"}
                    objectFit={"cover"}
                    h={"100%"}
                    w={"100%"}
                />
            </Box>
            <Box p={6}>
                <Text 
                    fontSize={"sm"} 
                    color={"gray.400"}
                    fontWeight={"light"}
                    textTransform={"capitalize"}
                >
                    { category?.category || "test" }
                </Text>
                <Text>{ name || "lorem ipsum dolor sit amet, consectet" }</Text>
                <Text 
                    mt={4}
                    fontWeight={"bold"}
                >
                    { `$${parseInt(price).toLocaleString()}` || `$50` }
                </Text>
                <Button 
                    mt={4} bgColor={"gray.300"} 
                    px={8} py={3}
                    onClick={() => handleClick(_id)}
                >
                    Add to cart
                </Button>
            </Box>
        </Box>
    )
}

export default ShopItem