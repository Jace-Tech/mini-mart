import { Box, Button, Container, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { DARK_PURPLE, MEDIUM_PURPLE } from '../utils/color'

const Hero = () => {
    return (
        <Box as={"section"} py={{ base: 10, sm: 16, lg: 20 }} bgColor={"rgb(33, 16, 112)"}>
            <Container maxW={"container.lg"}>
                <SimpleGrid column={[1, 1, 2]} >
                    <Box textAlign={{ base: "center", sm: "center", md: "left" }}>
                        <Heading 
                            textTransform={"uppercase"} 
                            fontSize={"xs"} 
                            letterSpacing={"wide"}
                            color={"rgb(132, 201, 147)"}
                        >
                            25% off promotional sale
                        </Heading>

                        <Heading
                            fontSize={"6xl"}
                            lineHeight={"1.2"}
                            fontWeight={"bold"}
                            maxW={{ base: "100%", sm: "100%", md: "80%", lg: "55%"}}
                            color={"white"}
                            mt={{ base: 2, sm: 3, lg: 4 }}
                        >
                            All you need in your closet.
                        </Heading>

                        <Text 
                            fontSize={"md"}
                            color={"white"}
                            mt={{ base: 2, sm: 3, lg: 4 }}
                            maxW={{ base: "100%", sm: "100%", md: "70%", lg: "45%"}}
                        >
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, nesciunt sequi, debitis omnis soluta reiciendis illum possimus deserunt qui alias fuga, veritatis modi quae voluptatibus?
                        </Text>

                       <Box mt={8} >
                            <Button 
                                p={6}
                                display={"flex"}
                                bg={"linear-gradient(-120deg, rgb(123, 213, 199), rgb(134, 229, 90) 30%, rgb(123, 213, 199))"}
                                color={"white"}
                                _hover={{ bgColor: MEDIUM_PURPLE }}
                            >
                                Shop Now
                            </Button>
                       </Box>
                    </Box>
                </SimpleGrid>
            </Container>
        </Box>
    )
}

export default Hero