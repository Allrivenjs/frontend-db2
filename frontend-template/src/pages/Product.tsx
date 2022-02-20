import { Container, Heading } from "@chakra-ui/react";
import { useState } from "react";

import { FiPlus, FiMinus } from "react-icons/fi";

const Product = () => {
	const [counter, setCounter] = useState<number>(1);

	const addCounter = () => setCounter(counter + 1);

	const substractCounter = () => {
		setCounter(counter - 1);
		if (counter < 2) setCounter(1);
	};

	return (
		<article className="flex flex-col items-center gap-8 pt-32 pb-32">
			<section className="flex w-3/4 gap-8">
				<div className="w-1/2 p-4 bg-white border rounded-sm border-slate-200">
					<img
						id="product-thumbnail"
						className="object-contain w-full rounded-sm h-80"
						src="https://www.el-atril.com/orquesta/Instrumentos/imagenes/guitarra.jpg"
						alt=""
					/>
				</div>
				<div className="w-1/2 p-6 bg-white border rounded-sm border-slate-200">
					<h2 id="product-name" className="text-3xl font-bold">
						Guitarra
					</h2>
					<div className="flex mt-3 mb-3">
						<p id="product-sku" className="text-sm">
							SKU: 123456789
						</p>
					</div>
					<hr />
					<div className="mt-4">
						<p className="mb-2 text-sm">Precio:</p>
						<p id="product-price" className="text-2xl font-bold">
							COP $ 999
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

			<section className="flex w-3/4 gap-8">
				<div className="w-1/2 p-4 bg-white border rounded-sm border-slate-200">
					<h2 id="product-name" className="mb-2 text-3xl font-bold">
						Detalles
					</h2>
					<hr className="mb-4" />
					<p id="product-description" className="mb-4 text-md">
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Sed non qui dignissimos nobis voluptates assumenda
						debitis impedit inventore veritatis neque eius nesciunt
						delectus nostrum numquam incidunt, veniam quasi
						necessitatibus esse. Itaque ad impedit non facere
						eligendi ea? Labore porro voluptatibus, provident
						distinctio incidunt, ipsum repudiandae alias nisi
						consequuntur dolor accusantium. Delectus optio eveniet
						doloremque! Fugit nesciunt dicta blanditiis cum
						perferendis. Cupiditate vero vitae animi enim
						consectetur veniam, quam iusto voluptate perspiciatis,
						reiciendis quia ex quaerat eum reprehenderit possimus
						laborum consequatur quisquam magni? Beatae mollitia.
					</p>
					<p id="product-weight" className="mb-4 text-sm">
						Peso: 10
					</p>
					<p id="product-stock" className="mb-4 text-sm">
						Stock: 12
					</p>
					<h2 id="product-name" className="mb-2 text-3xl font-bold">
						Más imagenes del producto
					</h2>
					<hr className="mb-4" />
					<div className="flex flex-col gap-5" id="product-images">
						<img
							src="https://www.el-atril.com/orquesta/Instrumentos/imagenes/guitarra.jpg"
							alt="producto"
						/>
					</div>
				</div>
				<div className="w-1/2"></div>
			</section>
		</article>
	);
};

export default Product;
