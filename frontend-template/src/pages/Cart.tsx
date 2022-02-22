import CartItem from "../components/CartItem";

const Cart = () => {
	return (
		<>
			<div className=" pt-32 md:h-screen">
				<div className="grid grid-cols-12 gap-6 ">
					<div className="col-span-12 h-[30rem] sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8 overflow-y-scroll">
						<CartItem />
						<CartItem />
						<CartItem />
						<CartItem />
					</div>
					<div className="lg:w-96 md:w-8/12 w-full bg-[#C7A9FF] h-[30rem] ">
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
										,000
									</p>
								</div>
								<div className="flex items-center justify-between pt-5">
									<p className="text-base leading-none text-gray-800 ">
										Envio
									</p>
									<p className="text-base leading-none text-gray-800 ">000</p>
								</div>
								
							</div>
							<div>
								<div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
									<p className="text-2xl leading-normal text-gray-800 ">
										Total
									</p>
									<p className="text-2xl font-bold leading-normal text-right text-gray-800 ">
										,240
									</p>
								</div>
								<div className="flex gap-x-5">
                                <button
									className="text-base h-12 w-full py-2 bg-[#FF5A5A] rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
								>
									Cancelar
								</button>
                                <button
									className="text-base h-12 w-full py-2 bg-[#62FF5F] rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
								>
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
