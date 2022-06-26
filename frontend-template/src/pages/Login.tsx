import {
	Box,
	Button,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	Input,
	Spinner,
	Stack,
	Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useCookies } from "react-cookie";

import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

interface LoginUserState {
	email: string;
	password: string;
}

const Login = () => {
	const [cookies, setCookies] = useCookies(["user"]);
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);
	const toast = useToast();
	
	const [user, setUser] = useState<LoginUserState>({
		email: "",
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
		const { email, password } = user;
		let datosEnviar = {
			usuario: email,
			contrasena: password,
		};
		fetch("http://localhost:8000/api/login", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(datosEnviar),
		})
			.then((respuesta) => respuesta.json())
			.then((res) => {
				console.log(res);
				setCookies("user", res[0]);
				navigate("/home");
			})
			.catch(()=>{
				toast({
					title: "Ha ocurrido un error",
					status: "error",
					description: "Es posible que las credenciales estén erroneas",
					isClosable: true,
					duration: 9000,

				});
			});
	};

	return (
		<Flex minH={"100vh"} align={"center"} justify={"center"}>
			<Stack
				spacing={8}
				mx={"auto"}
				maxW={"lg"}
				rounded={"3xl"}
				py={12}
				px={6}
				className=" bg-gradient-to-bl from-[#706CA8] to-[#C1A4FF]"
			>
				{" "}
				<Stack align={"center"}>
					<Heading fontSize={"4xl"} color={"white"}>
						Inicia sesión en tu cuenta
					</Heading>
					<Text fontSize={"lg"} color={"white"}>
						o si aun no tienes cuenta,{" "}
						<Link to={"/register"} className="text-blue-200">
							registrate
						</Link>{" "}
						✌️
					</Text>
				</Stack>
				<Box rounded={"lg"} boxShadow={"lg"} p={8} className="">
					<form onSubmit={handleOnSubmitForm}>
						<Stack spacing={4}>
							<FormControl id="text">
								<FormLabel htmlFor="text">
									Nombre de usuario
								</FormLabel>
								<Input
									onChange={handleOnChangeInput}
									name="email"
									type="text"
									required
									autoComplete={"email"}
									autoFocus
								/>
							</FormControl>
							<FormControl id="password">
								<FormLabel htmlFor="password">
									Contraseña
								</FormLabel>
								<Input
									onChange={handleOnChangeInput}
									name="password"
									type="password"
									required
									autoComplete={"current-password"}
								/>
							</FormControl>
							<Stack spacing={10}>
								{/* <Stack
									direction={{ base: "column", sm: "row" }}
									align={"start"}
									justify={"space-between"}
								>
									<Checkbox>Remember me</Checkbox>
									<Link color={"blue.400"}>
										¿Olvidaste tu contraseña?
									</Link>
								</Stack> */}
								<Button
									isDisabled={loading}
									type="submit"
									bg={"#816CA8"}
									color={"white"}
									_hover={{
										bg: "#614C88",
									}}
								>
									{loading ? (
										<Spinner />
									) : (
										<>Iniciar sesión</>
									)}
								</Button>
							</Stack>
						</Stack>
					</form>
				</Box>
			</Stack>
		</Flex>
	);
};

export default Login;
