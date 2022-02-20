import {
	Box,
	Button,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	HStack,
	Input,
	InputGroup,
	InputLeftAddon,
	InputRightElement,
	Spinner,
	Stack,
	Text,
} from "@chakra-ui/react";

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

import { Link } from "react-router-dom";

import { useState } from "react";

interface RegisterUserState {
	name: string;
	lastname: string;
	email: string;
	phone: number;
	birthday: string;
	password: string;
};


const Register = () => {
	const [loading, setLoading] = useState(false);

	const [showPassword, setShowPassword] = useState(false);

	const [user, setUser] = useState<RegisterUserState>({
		name: "",
		lastname: "",
		email: "",
		phone: 0,
		birthday: "",
		password: "",
	});

	const handleOnChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

	const handleOnSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log("sending form", user);
	};

	return(
		<Flex minH={"100vh"} align={"center"} justify={"center"} >
			<Stack spacing={8} mx={"auto"} maxW={"lg"} py={20} px={6}>
						<Stack align={"center"}>
							<Heading textAlign={"center"} fontSize={"3xl"} pb={5}>
								🥳 Bienvenido a la comunidad de Easywork 📝
							</Heading>
						</Stack>
						<Box rounded={"lg"} bg={"white"} boxShadow={"lg"} p={6}>
							<form onSubmit={handleOnSubmitForm}>
								<Stack spacing={3}>
									<HStack>
										<Box>
											<FormControl id="name" isRequired>
												<FormLabel htmlFor="name">
													Nombre
												</FormLabel>
												<Input
													onChange={
														handleOnChangeInput
													}
													name="name"
													type="text"
													required
												/>
											</FormControl>
										</Box>
										<Box>
											<FormControl id="lastname" isRequired>
												<FormLabel htmlFor="lastname">
													Apellido
												</FormLabel>
												<Input
													onChange={
														handleOnChangeInput
													}
													name="lastname"
													type="text"
													required
												/>
											</FormControl>
										</Box>
									</HStack>
									<FormControl id="email" isRequired>
										<FormLabel htmlFor="email">
											Correo electronico
										</FormLabel>
										<Input
											onChange={handleOnChangeInput}
											name="email"
											type="email"
											required
										/>
									</FormControl>

									<FormControl id="phone" isRequired>
										<FormLabel htmlFor="phone">
											Numero de celular
										</FormLabel>
										<InputGroup>
											<InputLeftAddon>+57</InputLeftAddon>
											<Input
												onChange={handleOnChangeInput}
												name="phone"
												type="number"
												required
											/>
										</InputGroup>
									</FormControl>

									<FormControl id="birthday" isRequired>
										<FormLabel htmlFor="birthday">
											Fecha de nacimiento
										</FormLabel>
										<Input
											onChange={handleOnChangeInput}
											name="birthday"
											type="date"
											required
										/>
									</FormControl>
									<FormControl id="password" isRequired>
										<FormLabel htmlFor="password">
											Password
										</FormLabel>
										<InputGroup>
											<Input
												onChange={handleOnChangeInput}
												required
												minLength={8}
												name="password"
												type={
													showPassword
														? "text"
														: "password"
												}
											/>
											<InputRightElement h={"full"}>
												<Button
													variant={"ghost"}
													onClick={() =>
														setShowPassword(
															(showPassword) =>
																!showPassword
														)
													}
												>
													{showPassword ? (
														<ViewIcon />
													) : (
														<ViewOffIcon />
													)}
												</Button>
											</InputRightElement>
										</InputGroup>
									</FormControl>
									<Stack spacing={10} pt={1}>
										<Button
											type="submit"
											isDisabled={loading}
											size="lg"
											bg={"blue.400"}
											color={"white"}
											_hover={{
												bg: "blue.500",
											}}
										>
											{loading ? (
												<Spinner />
											) : (
												<>Registrarse</>
											)}
										</Button>
									</Stack>
									<Stack pt={3}>
										<Text align={"center"}>
											¿Ya tienes cuenta?{" "}
											<Link
												to="/login"
												className="text-blue-400"
											>
												inicia sesión
											</Link>
										</Text>
									</Stack>
								</Stack>
							</form>
						</Box>
			</Stack>
		</Flex>
	);
};

export default Register;
