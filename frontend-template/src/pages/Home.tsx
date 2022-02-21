import Merch from "../components/merch";

const Home = () => {
	return (
		<>
			<div className="pt-28 flex flex-col items-center">
				<h2 className="text-4xl mb-10">
					Articulos en venta de la estación de invierno
				</h2>
				<div className="grid grid-cols-3">
					<Merch
						name={"Sueter"}
						image={
							"https://cdn.koaj.co/3297-big_default/sueter-nergro-franjas.jpg"
						}
						desc={"Con mangas"}
						color={"Negro"}
					/>
					<Merch
						name={"Sueter"}
						image={
							"https://cdn.koaj.co/3297-big_default/sueter-nergro-franjas.jpg"
						}
						desc={"Con mangas"}
						color={"Negro"}
					/>
					<Merch
						name={"Sueter"}
						image={
							"https://cdn.koaj.co/3297-big_default/sueter-nergro-franjas.jpg"
						}
						desc={"Con mangas"}
						color={"Negro"}
					/>
					<Merch
						name={"Sueter"}
						image={
							"https://cdn.koaj.co/3297-big_default/sueter-nergro-franjas.jpg"
						}
						desc={"Con mangas"}
						color={"Negro"}
					/>
					<Merch
						name={"Sueter"}
						image={
							"https://cdn.koaj.co/3297-big_default/sueter-nergro-franjas.jpg"
						}
						desc={"Con mangas"}
						color={"Negro"}
					/>
					<Merch
						name={"Sueter"}
						image={
							"https://cdn.koaj.co/3297-big_default/sueter-nergro-franjas.jpg"
						}
						desc={"Con mangas"}
						color={"Negro"}
					/>
					<Merch
						name={"Sueter"}
						image={
							"https://cdn.koaj.co/3297-big_default/sueter-nergro-franjas.jpg"
						}
						desc={"Con mangas"}
						color={"Negro"}
					/>
					<Merch
						name={"Sueter"}
						image={
							"https://cdn.koaj.co/3297-big_default/sueter-nergro-franjas.jpg"
						}
						desc={"Con mangas"}
						color={"Negro"}
					/>
				</div>
				<section className="flex flex-col items-center w-full">
					<h2 className="text-4xl font-bold mb-5">
						Oferta de invierno especial
					</h2>

					<p className="font-bold mb-5">Calzado para la nieve</p>
					<hr className="border border-gray-300 w-11/12" />

					<div className="grid grid-cols-3">
					<Merch
						name={"Sueter"}
						image={
							"https://cdn.koaj.co/3297-big_default/sueter-nergro-franjas.jpg"
						}
						desc={"Con mangas"}
						color={"Negro"}
					/>
					<Merch
						name={"Sueter"}
						image={
							"https://cdn.koaj.co/3297-big_default/sueter-nergro-franjas.jpg"
						}
						desc={"Con mangas"}
						color={"Negro"}
					/><Merch
					name={"Sueter"}
					image={
						"https://cdn.koaj.co/3297-big_default/sueter-nergro-franjas.jpg"
					}
					desc={"Con mangas"}
					color={"Negro"}
				/>
				<Merch
					name={"Sueter"}
					image={
						"https://cdn.koaj.co/3297-big_default/sueter-nergro-franjas.jpg"
					}
					desc={"Con mangas"}
					color={"Negro"}
				/>
					</div>
				</section>
			</div>
		</>
	);
};

export default Home;
