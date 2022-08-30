import { Box, Button, Container, Heading, Icon, IconButton, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { useCategories } from "../contexts/categoryContext"

const CategoryCard = ({ category }) => {
    return (
        <Box 
            rounded={"md"} 
            maxW={{ base: "unset", md: 350 }}
            px={6} py={6}
            bgColor={"rgb(245, 243, 252)"}
        >
           <Heading color={"rgb(1, 0, 85)"} fontSize={"2xl"}>{ category || "Fashion" }</Heading>
           <Text mt={3} fontSize={"md"} color={"gray.500"} fontWeight={"light"}>{"Lorem ipsum dolor sit amet consectetur adipisicing elit"}</Text>

           <Button mt={8} bgColor={"white"} px={8} py={3}>
                Shop Now
           </Button>
        </Box>
    )
}

const Category = () => {
    const { categories } = useCategories()
    const [slide, setSlide] = useState(0)
    const [slideItems, setSlideItems] = useState([])

    const prevSlide = () => {
        if(slide) {
            setSlide(slide - 1)
        }
    }
    const nextSlide = () => {
        if((slide + 3) < categories?.length) {
            setSlide(slide + 1)
        }
    }

    useEffect(() => {
        console.log(slide)
        let index = slide 
        let newArray = categories
        setSlideItems(newArray?.splice(index, 3))
    }, [slide, categories])

    return (
        <Box as={"section"} py={{ base: 10, sm: 16, md: 20 }}>
            <Container maxW={"container.lg"} pos={"relative"}>
                <IconButton 
                    rounded={"full"} 
                    pos={"absolute"} 
                    top={"50%"} 
                    left={0} 
                    onClick={prevSlide}
                    disabled={slide <= 0}
                    boxShadow={"lg"}
                    transform={"translateY(-50%)"}
                >
                    <Icon as={IoIosArrowBack} />
                </IconButton>

                <SimpleGrid columns={[1, 2, 3, 3]} spacing={8}>
                    { slideItems?.map(category => <CategoryCard key={category._id} {...category} /> ) }
                </SimpleGrid>

                <IconButton 
                    rounded={"full"} 
                    pos={"absolute"} 
                    top={"50%"} 
                    right={0} 
                    boxShadow={"lg"}
                    disabled={(slide + 3) == categories?.length}
                    onClick={nextSlide}
                    transform={"translateY(-50%)"}
                >
                    <Icon as={IoIosArrowForward} />
                </IconButton>
            </Container>
        </Box>
    )
}

export default Category