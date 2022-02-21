const Merch = (props: any) => {
	return (
		<>
			<div className="w-[15rem] m-5 bg-[#D9C6FF] flex flex-col items-center justify-center h-72 rounded-xl">
				<img className="w-36 mt-4" src={props.image} />
				<div className="w-full flex flex-col items-center justify-center h-full">
					<p className="my-4">{props.name}</p>
				</div>
			</div>
		</>
	);
};

export default Merch;
