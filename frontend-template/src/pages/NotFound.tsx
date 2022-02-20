import { Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NotFound = () => {
	return(
		<div className="flex flex-col justify-center items-center w-full h-screen">
			<Heading
				display="inline-block"
				as="h2"
				size="2xl"
				bgGradient="linear(to-r, teal.400, teal.600)"
				backgroundClip="text"
			>
				404
			</Heading>
			<p className="text-lg opacity-60 mt-4 mb-4">Esta página no existe</p>
			<Link
				to="/"
				className="opacity-60 hover:opacity-100 hover:underline"
			>
				Ir al home
			</Link>
		</div>
	);
};

export default NotFound;
