import React from "react";
import logo  from "../assets/logo.png";
import {
	chakra,
	Box,
	Flex,
	useColorModeValue,
	VisuallyHidden,
	HStack,
	Button,
	useDisclosure,
	VStack,
	IconButton,
	CloseButton,
	InputGroup,
	InputLeftElement,
	Input,
	Avatar, InputRightElement, Stack, useColorMode, SimpleGrid, Link,
} from "@chakra-ui/react";

import {
	AiOutlineMenu,
	AiFillHome,
	AiOutlineInbox,
	AiOutlineSearch,
	AiFillBell, AiOutlineShoppingCart,
} from "react-icons/ai";
import {BsFillBagCheckFill, BsFillCameraVideoFill, BsFillKanbanFill} from "react-icons/bs";
import {HamburgerIcon} from "@chakra-ui/icons";
import {FaMoon, FaSun, IoIosArrowDown} from "react-icons/all";

const Navbar = () => {
	const bg = useColorModeValue("#C4C4C4", "gray.800");
	const mobileNav = useDisclosure();

	const cl = useColorModeValue("gray.800", "white");
	const { toggleColorMode: toggleMode } = useColorMode();
	const text = useColorModeValue("dark", "light");
	const SwitchIcon = useColorModeValue(FaMoon, FaSun);
	const ic = useColorModeValue("brand.600", "brand.50");
	const hbg = useColorModeValue("gray.50", "brand.400");
	const tcl = useColorModeValue("gray.900", "gray.50");
	const dcl = useColorModeValue("gray.500", "gray.50");
	const hbgh = useColorModeValue("gray.100", "brand.500");


	const Section = (props) => {
		return (
			<Link
				m={-3}
				p={3}
				display="flex"
				alignItems="start"
				rounded="lg"
				_hover={{ bg: hbg }}

			>
				<chakra.svg
					flexShrink={0}
					h={6}
					w={6}
					color={ic}
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					aria-hidden="true"
				>
					{props.icon}
				</chakra.svg>
				<Box ml={4}>
					<chakra.p fontSize="sm" fontWeight="700" color={tcl}>
						{props.title}
					</chakra.p>
					<chakra.p mt={1} fontSize="sm" color={dcl}>
						{props.children}
					</chakra.p>
				</Box>
			</Link>
		);
	};



	const Features = (
		<React.Fragment>
			<SimpleGrid
				columns={{ base: 1, md: 3, lg: 5 }}
				pos="relative"
				gap={{ base: 6, sm: 8 }}
				px={5}
				py={6}
				p={{ sm: 8 }}
				bg={"#C4C4C4"}
				style={{zIndex: 90}}
			>
				<Section
					title="Analytics"
					icon={
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							stroke-w="2"
							d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
						/>
					}
				>
					Get a better understanding of where your traffic is coming from.
				</Section>

				<Section
					title="Engagement"
					icon={
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							stroke-w="2"
							d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
						/>
					}
				>
					Speak directly to your customers in a more meaningful way.
				</Section>

				<Section
					title="Security"
					icon={
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							stroke-w="2"
							d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
						/>
					}
				>
					Your customers&#039; data will be safe and secure.
				</Section>

				<Section
					title="Integrations"
					description={
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							stroke-w="2"
							d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
						/>
					}
				>
					Connect with third-party tools that you&#039;re already using.
				</Section>

				<Section
					title="Automations"
					icon={
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							stroke-w="2"
							d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
						/>
					}
				>
					Build strategic funnels that will drive your customers to convert
				</Section>
			</SimpleGrid>

		</React.Fragment>
	);

	return (
		<React.Fragment>
			<chakra.header
				bg={bg}
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
								color={useColorModeValue("gray.800", "inherit")}
								variant="ghost"
								icon={<AiOutlineMenu />}
								onClick={mobileNav.onOpen}
							/>
							<VStack
								pos="absolute"
								top={0}
								left={0}
								right={0}
								display={mobileNav.isOpen ? "flex" : "none"}
								flexDirection="column"
								p={2}
								pb={4}
								m={2}
								bg={bg}
								spacing={3}
								rounded="sm"
								shadow="sm"
							>
								<CloseButton
									aria-label="Close menu"
									justifySelf="self-start"
									onClick={mobileNav.onClose}
								/>
								<Button w="full" variant="ghost" leftIcon={<HamburgerIcon />}>
									Categorias
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
									leftIcon={<BsFillBagCheckFill />}
								>
									Mis compras
								</Button>
							</VStack>
						</Box>
						<chakra.a
							href="/"
							title="Choc Home Page"
							display="flex"
							alignItems="center"
						>
							<img src={logo} alt="" width={75}/>
							<VisuallyHidden>Choc</VisuallyHidden>
						</chakra.a>

						<HStack spacing={3} display={{ base: "none", md: "inline-flex" }}>
							<Box role="group">
								<Button variant="ghost"
										size="sm"
										_focus={{ boxShadow: "none" }}
										rightIcon={<IoIosArrowDown />}
								>
									Categorias
								</Button>
								<Box
									pos="absolute"
									left={0}
									w="full"
									display="none"
									_groupHover={{ display: "block" }}
								>
									{Features}
								</Box>
							</Box>
							<Button
								variant="solid"
								colorScheme="gray"
								leftIcon={<AiOutlineInbox />}
								size="sm"
							>
								Inbox
							</Button>
							<Button
								variant="ghost"
								leftIcon={<BsFillBagCheckFill />}
								size="sm"
							>
								Mis compras
							</Button>
						</HStack>
					</HStack>
					<HStack
						spacing={3}
						display={mobileNav.isOpen ? "none" : "flex"}
						alignItems="center"
					>
						<InputGroup>
							<InputRightElement
								pointerEvents="none"
								children={<AiOutlineSearch />}
							/>
							<Input type="tel" bg={"white"} placeholder="Search..." />
						</InputGroup>

						<chakra.button
							p={3}
							color={useColorModeValue("gray.800", "inherit")}
							rounded="sm"
							_hover={{ color: useColorModeValue("white", "gray.600") }}
							maxWidth={20}
							minWidth={10}
						>
							<AiOutlineShoppingCart />
							<VisuallyHidden>ShoppingCart</VisuallyHidden>
						</chakra.button>


						<Stack
							flex={{ base: 1, md: 0 }}
							justify={'flex-end'}
							direction={'row'}
							spacing={6}>
							<Button
								as={'a'}
								fontSize={'sm'}
								color={'gray.800'}
								fontWeight={400}
								variant={'link'}
								href={'/login'}>
								Sign In
							</Button>
							<Button
								as={'a'}
								display={{ base: 'none', md: 'inline-flex' }}
								fontSize={'sm'}
								fontWeight={600}
								color={'gray.800'}
								bg={'white'}
								href={'/register'}
								_hover={{
									bg: 'gray.300',
								}}>
								Sign Up
							</Button>
						</Stack>
						{/*<Avatar*/}
						{/*	size="sm"*/}
						{/*	name="Dan Abrahmov"*/}
						{/*	src="https://bit.ly/dan-abramov"*/}
						{/*/>*/}
					</HStack>
				</Flex>
			</chakra.header>
		</React.Fragment>
	);
};

export default Navbar;
