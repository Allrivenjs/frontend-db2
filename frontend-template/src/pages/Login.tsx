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

interface LoginUserState {
	email: string;
	password: string;
}

const Login = () => {
	const [cookies, setCookies] = useCookies(["user"]);

	const navigate = useNavigate();

	const [loading, setLoading] = useState(false);

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
				navigate("/home")
			})
			.catch(console.log);
	};

	return (
		<Flex minH={"100vh"} align={"center"} justify={"center"}>
			<Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
				<Stack align={"center"}>
					<Heading fontSize={"4xl"}>
						Inicia sesión en tu cuenta
					</Heading>
					<Text fontSize={"lg"} color={"gray.600"}>
						o si aun no tienes cuenta,{" "}
						<Link to={"/register"} className="text-blue-400">
							registrate
						</Link>{" "}
						✌️
					</Text>
				</Stack>
				<Box rounded={"lg"} bg={"white"} boxShadow={"lg"} p={8}>
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
									bg={"blue.400"}
									color={"white"}
									_hover={{
										bg: "blue.500",
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
