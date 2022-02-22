import {AiFillDelete} from "react-icons/ai"

const CartItem = () => {
	return (
		<>
			<div className=" bg-[#D1B9FF] py-4 px-4 shadow-xl rounded-lg my-4 mx-4">
				<div className="flex px-4 items-center w-full ">
					<div>
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Anuel_AA_Entrevista_2018.png"
							className="w-24 object-cover h-32"
						/>
					</div>

					<div className="flex justify-between w-full items-center">
						<div className="text-lg font-semibold px-8 flex flex-col  w-1/2">
							<p>Title</p>
                             <p className="font-normal text-sm">aasdasasdasdasdassaaaaaaaaaaaaaaaaaaaaaa</p>
							<p className="text-gray-700 text-base">RM 500.00</p>
						</div>
						<div className="text-lg font-semibold flex items-center justify-end  h-fit">
                            <p className="px-4">Cantidad: 1</p>
							<button className="focus:outline-none  hover:bg-gray-200 font-bold py-2 px-2 rounded-full inline-flex items-center ">
                            <AiFillDelete className="w-5 h-5"/>
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CartItem;
