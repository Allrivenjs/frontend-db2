import React, {useEffect, useState} from "react";
import {
	Text,
	Box,
	Flex,
	useColorModeValue,
	Image,
	HStack,
	Stack, Button,
} from "@chakra-ui/react";
import {AiOutlineInbox} from "react-icons/ai";
import zatapato from "./../../assets/zapato.png";

const Component = () => {
	const arrowStyles = {
		cursor: "pointer",
		pos: "absolute",
		top: "50%",
		w: "auto",
		mt: "-22px",
		p: "16px",
		color: "white",
		fontWeight: "bold",
		fontSize: "18px",
		transition: "0.6s ease",
		borderRadius: "0 3px 3px 0",
		userSelect: "none",
		_hover: {
			opacity: 0.8,
			bg: "black",
		},
	};

	const slides = [
		{
			img:
				"https://images.pexels.com/photos/1255372/pexels-photo-1255372.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
			label: "First Slide",
			description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
		},
		{
			img:
				"https://images.pexels.com/photos/1255372/pexels-photo-1255372.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
			label: "Second Slide",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		},
		{
			img:
				"https://images.pexels.com/photos/1255372/pexels-photo-1255372.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
			label: "Third Slide",
			description:
				"Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
		},
		{
			img:
				"https://images.pexels.com/photos/1255372/pexels-photo-1255372.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
			label: "Fourth Slide",
			description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
		},
		{
			img:
				"https://images.pexels.com/photos/1255372/pexels-photo-1255372.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
			label: "Fifth Slide",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		},
	];

	const [currentSlide, setCurrentSlide] = useState(0);

	useEffect(() => {

		setInterval(nextSlide, 10000 )

	}, []);

	const slidesCount = slides.length;

	const prevSlide = () => {
		setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
	};
	const nextSlide = () => {
		setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
	};
	const setSlide = (slide) => {
		setCurrentSlide(slide);
	};



	const carouselStyle = {
		transition: "all .5s",
		ml: `-${currentSlide * 100}%`,
	};

	return (
		<Flex
			w="full"

			p={10}
			alignItems="center"
			justifyContent="center"
		>
			<Flex w="full" pos="relative" overflow="hidden">
				<Flex h="400px" w="full" {...carouselStyle}>
					{slides.map((slide, sid) => (
						<Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none" className="relative">
							<Text
								color="white"
								fontSize="xs"
								p="8px 12px"
								pos="absolute"
								top="0"
							>
								{sid + 1} / {slidesCount}
							</Text>
							<Image src={slide.img} className="object-cover"  boxSize="full" backgroundSize="cover" />
							<Stack
								pos="absolute"
								bottom="24px"
								textAlign="left"
								marginLeft="90px"
								w="full"
								mb="150"
								color="white"
							>
								<Text fontSize="2xl">{slide.label}</Text>
								<Text fontSize="lg">{slide.description}</Text>
								<Button
									className="bg-transparent hover:bg-blue-500  text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded "
									style={{ width: 95}}
									color="gray.500"
								>Ver mas</Button>
							</Stack>
							<div
								className="absolute top-10 right-52"

							>
								<Image src={zatapato}
									 w={{
										 base: "20rem",
										 lg: "15rem",
										 sm: "8rem",
										 md: "10rem",
										 xl: "25rem"
									 }}
								/>
							</div>
						</Box>
					))}
				</Flex>
				<Text {...arrowStyles} left="0" onClick={prevSlide}>
					&#10094;
				</Text>
				<Text {...arrowStyles} right="0" onClick={nextSlide}>
					&#10095;
				</Text>
				<HStack justify="center" pos="absolute" bottom="8px" w="full">
					{Array.from({ length: slidesCount }).map((_, slide) => (
						<Box
							key={`dots-${slide}`}
							cursor="pointer"
							boxSize={["7px", "0" , "15px"]}
							m="0 2px"
							bg={currentSlide === slide ? "blackAlpha.800" : "blackAlpha.500"}
							rounded="50%"
							display="inline-block"
							transition="background-color 0.6s ease"
							_hover={{ bg: "blackAlpha.800" }}
							onClick={() => setSlide(slide)}
						/>
					))}
				</HStack>
			</Flex>
		</Flex>
	);
};
export default Component;
