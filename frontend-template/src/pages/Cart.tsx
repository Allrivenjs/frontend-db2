import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useCookies } from "react-cookie";
import { useToast } from "@chakra-ui/react";

interface Carrito {
	id: number;
	nombre: string;
	desc: string;
	precio: number;
	cantidad: number;
	image: string;
	subtotal: number;
}

interface CarritoState {
	carrito: Carrito[];
}

const Cart = () => {
	const [state, setState] = useState<CarritoState>({ carrito: [] });
	const [cookies] = useCookies(["user"]);
	const toast = useToast();
	useEffect(() => {
		const data = async () => {
			const response = await fetch(
				"http://localhost:8000/api/carrito/" + cookies.user.id
			);
			const cart = await response.json();

			setState({ carrito: cart });
		};

		data();
	}, []);

	const subt = () => {
		let sub = 0;
		state.carrito.forEach((element) => {
			sub += element.subtotal;
		});
		return sub;
	};

	const deleteItem = async (id: number) => {
		await fetch(`http://localhost:8000/api/deleteItem/${id}`)
			.then((res) => res)
			.then((res) => {
				console.log(res);
				
				const data = async () => {
					const response = await fetch(
						"http://localhost:8000/api/carrito/" + cookies.user.id
					);
					const cart = await response.json();

					setState({ carrito: cart });
				};

				data();
				toast({
					title: 'Eliminado.',
					description: "El item ha sido eliminado del carrito con exito",
					status: 'success',
					duration: 9000,
					isClosable: true,
				  });
			})
			.catch(console.log);
	};

	return (
		<>
			<div className=" pt-32 md:h-screen">
				<div className="grid grid-cols-12 gap-6 ">
					<div className="col-span-12 h-[30rem] sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8 overflow-y-scroll">
						{state.carrito.map((e, i) => {
							return (
								<CartItem
									key={e.nombre}
									id={e.id}
									image={e.image}
									cantidad={e.cantidad}
									desc={e.desc}
									nombre={e.nombre}
									precio={e.precio}
									funcion={() => deleteItem(e.id)}
								/>
							);
						})}
					</div>
					<div className="w-96 bg-[#C7A9FF] h-[30rem] ">
						<div className="flex flex-col h-full px-4 py-6 justify-between ">
							<div>
								<p className="lg:text-4xl text-3xl font-black leading-9 text-gray-800 ">
									Resumen
								</p>
								<div className="flex items-center justify-between pt-16">
									<p className="text-base leading-none text-gray-800 ">
										Subtotal
									</p>
									<p className="text-base leading-none text-gray-800 ">
										{subt()} $
									</p>
								</div>
								<div className="flex items-center justify-between pt-5">
									<p className="text-base leading-none text-gray-800 ">
										Envio
									</p>
									<p className="text-base leading-none text-gray-800 ">
										0 $
									</p>
								</div>
							</div>
							<div>
								<div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
									<p className="text-2xl leading-normal text-gray-800 ">
										Total
									</p>
									<p className="text-2xl font-bold leading-normal text-right text-gray-800 ">
										{subt()}
									</p>
								</div>
								<div className="flex gap-x-5">
									<Link
										to="/home"
										className="text-base h-12 flex items-center justify-center font-semibold w-full py-2 bg-[#FF5A5A] rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
									>
										Cancelar
									</Link>
									<button className="text-base h-12 w-full py-2 bg-[#62FF5F] font-semibold rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">
										Comprar
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Cart;
