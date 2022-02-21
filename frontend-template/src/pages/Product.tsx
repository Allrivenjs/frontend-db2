import { Container, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { FiPlus, FiMinus } from "react-icons/fi";
import { useParams } from "react-router-dom";

interface product {
	nombre: string;
	SKU: string;
	descripcion: string;
	precio: number;
	dimensiones: string;
	URL: string;
	peso: number,
	stock: number
}

const Product = () => {
	const params = useParams();

	const [counter, setCounter] = useState<number>(1);
	const [product, setProduct] = useState<product>();

	const addCounter = () => setCounter(counter + 1);

	const substractCounter = () => {
		setCounter(counter - 1);
		if (counter < 2) setCounter(1);
	};

	useEffect(() => {
		const data = async () => {
			const response = await fetch(
				"http://localhost:8000/api/prodById/" + params.id
			);
			const producto = await response.json();
			setProduct(producto[0]);
			
		};
		data();
	}, []);

	return (
		<>
			{product ? (
				<article className="flex flex-col items-center gap-8 pt-32 pb-32">
					<section className="flex w-3/4 gap-8 bg-[#D9C6FF]">
						<div className="w-1/2 p-4 bg-[#A698C4] border rounded-sm border-slate-200 m-4">
							<img
								id="product-thumbnail"
								className="object-contain w-full rounded-sm h-72"
								//src="https://www.el-atril.com/orquesta/Instrumentos/imagenes/guitarra.jpg"
								src={product.URL}
								alt=""
							/>
						</div>
						<div className="w-1/2 p-6  rounded-sm border-slate-200 ">
							<h2
								id="product-name"
								className="text-3xl font-bold"
							>
								{product.nombre}
							</h2>
							<div className="flex mt-3 mb-3">
								<p id="product-sku" className="text-sm">
									SKU: {product.SKU}
								</p>
							</div>
							<hr />
							<div className="mt-4">
								<p className="mb-2 text-sm">Precio:</p>
								<p
									id="product-price"
									className="text-2xl font-bold"
								>
									COP $ {product.precio}
								</p>
							</div>
							<div className="mt-4">
								<p className="mb-2 text-sm">Cantidad:</p>
								<div className="flex border border-slate-200 w-fit items-center rounded-lg">
									<button
										onClick={substractCounter}
										className="w-10 h-10 flex justify-center items-center p-1 bg-slate-300 rounded-l-lg"
									>
										<FiMinus />
									</button>
									<div className="w-10 h-10 flex justify-center items-center">
										{counter}
									</div>
									<button
										onClick={addCounter}
										className="w-10 h-10 flex justify-center items-center p-1 bg-slate-300 rounded-r-lg"
									>
										<FiPlus />
									</button>
								</div>
							</div>
							<div className="mt-6">
								<button
									id="add-to-cart-btn"
									className="hover:underline text-white mr-3 text-sm bg-blue-500 px-3 py-2 rounded-md font-bold hover:bg-blue-600 transition-colors"
								>
									Añadir al carrito
								</button>
							</div>
						</div>
					</section>

					<section className="flex w-3/4 gap-8 bg-[#D9C6FF]">
						<div className="w-full p-4  border rounded-sm border-slate-200">
							<h2
								id="product-name"
								className="mb-2 text-3xl font-bold"
							>
								Detalles
							</h2>
							<hr className="mb-4" />
							<p
								id="product-description"
								className="mb-4 pr-16 text-left text-md"
							>
								{product.descripcion}
							</p>
							<p id="product-weight" className="mb-4 text-sm">
								Peso: {product.peso}
							</p>
							<p id="product-stock" className="mb-4 text-sm">
								Stock: {product.stock}
							</p>
						</div>
					</section>
				</article>
			) : (
				<div>Cargando</div>
			)}
		</>
	);
};

export default Product;
