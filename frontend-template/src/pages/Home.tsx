import { useEffect, useState } from "react";
import Merch from "../components/merch";

interface Productito {
	nombre: string;
	URL: string;
	categoria: string;
}

interface ProductitoState {
	data: Productito[];
}

const Home = () => {
	const [state, setState] = useState<ProductitoState>({ data: [] });

	useEffect(() => {
		const data = async () => {
			const response = await fetch("http://localhost:8000/api/products");
			const data = await response.json();
			setState({ data: data });
		};

		data();
	}, []);

	return (
		<>
			{state.data ? (
				<div className="pt-28 flex flex-col items-center">
					<h2 className="text-4xl mb-10">
						Articulos en venta de la estación de invierno
					</h2>
					<div className="grid grid-cols-3">
						{state.data.map((element, i) => {
							return (
								<Merch
									key={i}
									name={element.nombre}
									image={element.URL}
								/>
							);
						})}
					</div>
					<section className="flex flex-col items-center w-full">
						<h2 className="text-4xl font-bold mb-5">
							Oferta de invierno especial
						</h2>

						<p className="font-bold mb-5">Calzado para la nieve</p>
						<hr className="border border-gray-300 w-11/12" />

						<div className="grid grid-cols-3">
							{state.data.map((e, i) => {
								if (
									e.categoria
										.toLowerCase()
										.includes("botas") ||
									e.categoria
										.toLowerCase()
										.includes("zapatos")
								) {
									return (
										<Merch
											key={i}
											name={e.nombre}
											image={e.URL}
										/>
									);
								}
							})}
						</div>
					</section>
				</div>
			) : (
				<div>Cargando</div>
			)}
		</>
	);
};

export default Home;
