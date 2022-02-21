import React, { useState, useEffect } from "react";
import theme from "./theme";
import zapato from "../../../assets/zapato.png"

import {
	ChakraProvider,
	extendTheme,
	Container,
	Heading,
	Button,
	VStack,
	HStack,
	Text,
	Flex,
	Tag, Box, useColorModeValue, Image, Stack, Center
} from "@chakra-ui/react";
const IMAGE = zapato;
	//'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';


import ChakraCarousel from "./SliderComponent";

interface getElemet {
	id: number
}

const SliderComponent = (props: getElemet) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts/")
			.then((res) => res.json())
			.then((res) => setData(res));
	}, []);

	return (
		<ChakraProvider theme={extendTheme(theme)}>
			<Container
				py={8}
				px={0}
				maxW={{
					base: "100%",
					sm: "35rem",
					md: "43.75rem",
					lg: "57.5rem",
					xl: "75rem",
					xxl: "87.5rem"
				}}
			>
				<Text
				fontSize='5xl'
				className="ml-6 font-medium"
				> CARATERISTICA 1 </Text>
				<ChakraCarousel gap={32} id={props.id}>
					{data.slice(5, 15).map((post, index) => (
						<Flex
							key={index}
							// boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
							justifyContent="space-between"
							flexDirection="column"
							overflow="hidden"
							rounded={5}
							flex={1}
							p={5}
						>
							<Center py={12}>
								<Box
									role={'group'}
									p={6}
									maxW={'330px'}
									w={'full'}
									bg={useColorModeValue('white', 'gray.800')}
									boxShadow={'2xl'}
									rounded={'lg'}
									pos={'relative'}
									zIndex={1}>
									<Box
										rounded={'lg'}
										mt={-12}
										pos={'relative'}
										height={'230px'}
										_after={{
											transition: 'all .3s ease',
											content: '""',
											w: 'full',
											h: 'full',
											pos: 'absolute',
											top: 5,
											left: 0,
											backgroundImage: `#D0D0D0`,
											filter: 'blur(15px)',
											zIndex: -1,
										}}
										_groupHover={{
											_after: {
												filter: 'blur(20px)',
											},
										}}>
										<Image
											rounded={'lg'}
											height={230}
											width={282}
											objectFit={'cover'}
											src={IMAGE}
										/>
									</Box>
									<Stack pt={10} align={'center'}>
										<Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
											Brand
										</Text>
										<Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
											Nice Chair, pink
										</Heading>
										<Stack direction={'row'} align={'center'}>
											<Text fontWeight={800} fontSize={'xl'}>
												$57
											</Text>
											<Text textDecoration={'line-through'} color={'gray.600'}>
												$199
											</Text>
										</Stack>
									</Stack>
								</Box>
							</Center>
						</Flex>
					))}
				</ChakraCarousel>
			</Container>
		</ChakraProvider>
	);
}
export default SliderComponent;


