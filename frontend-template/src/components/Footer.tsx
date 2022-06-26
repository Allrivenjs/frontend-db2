import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
	return (
		<footer className="p-4 rounded-lg shadow md:px-6 md:py-8 bg-[#B2A3D1] mt-32">
			<div className="sm:flex sm:items-center sm:justify-between">
				<div className="flex justify-between items-center">
					<div className="flex flex-col w-3/5">
						<b className="">Copyright</b>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud exercitation ullamco laboris nisi ut aliquip
							ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore
							eu fugiat nulla pariatur.
						</p>
					</div>
					<div className="h-16">
						<div className="bg-[#D9C6FF] flex flex-col items-center py-2 px-4 rounded-xl w-[11rem]">
							<p className="mb-2">Redes Sociales</p>
							<div className="flex flex-row w-full justify-between">
								<div className="bg-[#9889B9] p-2 rounded-3xl">
									<BsFacebook />
								</div>
								<div className="bg-[#9889B9] p-2 rounded-3xl">
									<BsInstagram />
								</div>
								<div className="bg-[#9889B9] p-2 rounded-3xl">
									<BsTwitter></BsTwitter>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
			<span className="flex items-center justify-center">
				© 2022 wintmerch™. All Rights Reserved.
			</span>
		</footer>
	);
};

export default Footer;
