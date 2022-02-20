import { Container, Grid, GridItem, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Pagination from "../components/shared/Pagination";

const products: ProductProps[] = [
	{
		name: "Guitarra",
		brand: "Brand",
		price: 999,
		slug: "product-slug",
		img_url:
			"https://www.el-atril.com/orquesta/Instrumentos/imagenes/guitarra.jpg",
	},
	{
		name: "Zapatos",
		brand: "Brand",
		price: 999,
		slug: "product-slug",
		img_url:
			"https://gestion.pe/resizer/CNx8YN7g4JT40BmznY5bZVWkesk=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/MTAKNCOMFBFB5ND7G7SMSBOKHU.jpg",
	},
	{
		name: "Guitarra",
		brand: "Brand",
		price: 999,
		slug: "product-slug",
		img_url:
			"https://www.el-atril.com/orquesta/Instrumentos/imagenes/guitarra.jpg",
	},
	{
		name: "Zapatos",
		brand: "Brand",
		price: 999,
		slug: "product-slug",
		img_url:
			"https://gestion.pe/resizer/CNx8YN7g4JT40BmznY5bZVWkesk=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/MTAKNCOMFBFB5ND7G7SMSBOKHU.jpg",
	},
	{
		name: "Guitarra",
		brand: "Brand",
		price: 999,
		slug: "product-slug",
		img_url:
			"https://www.el-atril.com/orquesta/Instrumentos/imagenes/guitarra.jpg",
	},
	{
		name: "Zapatos",
		brand: "Brand",
		price: 999,
		slug: "product-slug",
		img_url:
			"https://gestion.pe/resizer/CNx8YN7g4JT40BmznY5bZVWkesk=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/MTAKNCOMFBFB5ND7G7SMSBOKHU.jpg",
	},
	{
		name: "Guitarra",
		brand: "Brand",
		price: 999,
		slug: "product-slug",
		img_url:
			"https://www.el-atril.com/orquesta/Instrumentos/imagenes/guitarra.jpg",
	},
	{
		name: "Zapatos",
		brand: "Brand",
		price: 999,
		slug: "product-slug",
		img_url:
			"https://gestion.pe/resizer/CNx8YN7g4JT40BmznY5bZVWkesk=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/MTAKNCOMFBFB5ND7G7SMSBOKHU.jpg",
	},
];

const Products = () => {
	return (
		<Container maxW="container.lg" pt={"16"}>
			<div className="w-full mt-12">
				<Heading className="mb-2">Productos</Heading>
				<hr className="mb-12" />
				<Grid templateColumns="repeat(3, 1fr)" gap={8}>
					{products.map((element, i) => {
						return (
							<GridItem key={i}>
								<Product
									name={element.name}
									img_url={element.img_url}
									brand={element.brand}
									price={element.price}
									slug={element.slug}
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
	);
};

interface ProductProps {
	name: string;
	img_url: string;
	brand: string;
	price: number;
	slug: string;
}

const Product = (props: ProductProps) => {
	return (
		<Link to={`/product/${props.slug}`}>
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
