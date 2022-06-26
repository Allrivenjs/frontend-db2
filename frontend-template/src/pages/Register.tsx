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

import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";

interface RegisterUserState {
	name: string;
	lastname: string;
	email: string;
	User: string;
	phone: number;
	birthday: string;
	password: string;
}

const Register = () => {
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const [showPassword, setShowPassword] = useState(false);

	const [user, setUser] = useState<RegisterUserState>({
		name: "",
		lastname: "",
		email: "",
		User: "",
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

	const handleOnSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const datos = {
			"name": user.name,
			"lastname": user.lastname,
			"User": user.User,
			"phone": user.phone,
			"password": user.password,
		};

		console.log(JSON.stringify(datos));
		

		 fetch("http://localhost:8000/api/register", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(datos),
		})
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				navigate("/");
			})
			.catch(console.log);
	};

	return (
		<div className="">
			<Flex minH={"100vh"} align={"center"} justify={"center"}>
				<Stack spacing={8} mx={"auto"} maxW={"lg"} py={20} px={6}>
					<Stack align={"center"}>
						<Heading textAlign={"center"} fontSize={"3xl"} pb={5}>
							Bienvenido
						</Heading>
					</Stack>
					<Box
						rounded={"lg"}
						boxShadow={"lg"}
						p={6}
						className=" bg-gradient-to-bl from-[#807CB8] to-[#C1A4FF]"
					>
						<form onSubmit={handleOnSubmitForm}>
							<Stack spacing={3}>
								<HStack>
									<Box>
										<FormControl id="name" isRequired>
											<FormLabel
												htmlFor="name"
												color={"white"}
											>
												Nombre
											</FormLabel>
											<Input
												onChange={handleOnChangeInput}
												name="name"
												type="text"
												required
											/>
										</FormControl>
									</Box>
									<Box>
										<FormControl id="lastname" isRequired>
											<FormLabel
												htmlFor="lastname"
												color={"white"}
											>
												Apellido
											</FormLabel>
											<Input
												onChange={handleOnChangeInput}
												name="lastname"
												type="text"
												required
											/>
										</FormControl>
									</Box>
								</HStack>
								<FormControl id="User" isRequired>
									<FormLabel htmlFor="User" color={"white"}>
										Nombre de Usuario
									</FormLabel>
									<Input
										onChange={handleOnChangeInput}
										name="User"
										type="text"
										required
									/>
								</FormControl>
								<FormControl id="email" isRequired>
									<FormLabel htmlFor="email" color={"white"}>
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
									<FormLabel htmlFor="phone" color={"white"}>
										Numero de celular
									</FormLabel>
									<InputGroup>
										<InputLeftAddon
											bg={"#0000"}
											color={"white"}
										>
											+57
										</InputLeftAddon>
										<Input
											onChange={handleOnChangeInput}
											name="phone"
											type="number"
											required
										/>
									</InputGroup>
								</FormControl>

								<FormControl id="birthday" isRequired>
									<FormLabel
										htmlFor="birthday"
										color={"white"}
									>
										Fecha de nacimiento
									</FormLabel>
									<Input
										onChange={handleOnChangeInput}
										name="birthday"
										type="date"
										color={"white"}
										required
									/>
								</FormControl>
								<FormControl id="password" isRequired>
									<FormLabel
										htmlFor="password"
										color={"white"}
									>
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
										bg={"#816CA8"}
										color={"white"}
										_hover={{
											bg: "#614C88",
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
											className="text-blue-700"
										>
											Inicia sesión
										</Link>
									</Text>
								</Stack>
							</Stack>
						</form>
					</Box>
				</Stack>
			</Flex>
		</div>
	);
};

export default Register;
