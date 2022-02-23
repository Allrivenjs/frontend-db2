import { Container, Grid, GridItem, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../components/shared/Pagination";

interface ProductProps {
	id: number;
	name: string;
	img_url: string;
	brand: string;
	price: number;
}
interface ProductPropsState {
	products: ProductProps[];
}
const Products = () => {
	const [state, setState] = useState<ProductPropsState>({ products: [] });

	useEffect(() => {
		const data = async () => {
			const response = await fetch("http://localhost:8000/api/items");
			const products = await response.json();
			setState({ products: products });
		};

		data();
	}, []);

	return (
		<>
			{state.products ? (
				<Container maxW="container.lg" pt={"16"}>
					<div className="w-full mt-12">
						<Heading className="mb-2">Productos</Heading>
						<hr className="mb-12" />
						<Grid templateColumns="repeat(3, 1fr)" gap={8}>
							{state.products.map((element, i) => {
								return (
									<GridItem key={i}>
										<Product
											id={element.id}
											name={element.name}
											img_url={element.img_url}
											brand={element.brand}
											price={element.price}
										/>
									</GridItem>
								);
							})}
						</Grid>
					</div>
					<div className="w-full flex items-center justify-center mt-24">
						<Pagination />
					</div>
				</Container>
			) : (
				<div>Cargando</div>
			)}
		</>
	);
};

const Product = (props: ProductProps) => {
	return (
		<Link to={`/product/${props.id}`}>
			<div className="bg-white rounded-lg shadow-md hover:scale-105">
				<img
					className="w-96 h-60 object-cover"
					src={props.img_url}
					alt={props.name}
				/>
				<div className="mt-2 p-6">
					<p className="text-md text-slate-500">{props.brand}</p>
					<p className="font-bold text-xl">{props.name}</p>
					<p className="text-2xl mt-2">COP $ {props.price}</p>
				</div>
			</div>
		</Link>
	);
};

export default Products;
