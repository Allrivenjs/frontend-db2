import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import logo from "../assets/logo.png"

const Navbar = () => {
	return (
		<div className="w-full h-24 bg-white shadow-md flex flex-col justify-between fixed z-50 ">
			<div className="w-full h-full flex items-center justify-between bg-[#B2A3D1] px-4">
				<div className="font-bold text-xl flex items-center mr-6">
					<img src={logo} className="w-16" /> Wintmerch
				</div>
				<div className=" flex gap-x-10">
					<span>Hombre</span>
					<span>Mujer</span>
				</div>
				<div className="flex">
					<div className="border border-black bg-white flex items-center justify-center w-7">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
						>
							<path d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z" />
						</svg>
					</div>
					<input
						type="text"
						placeholder="Buscar"
						className="px-2 border border-black w-64"
					/>
				</div>
				<div className="flex items-center h-full">
					<div className="bg-white rounded-lg px-2">
						<div className="flex items-center gap-x-2"><FiUser></FiUser><p>Usuario</p></div>
					</div>

					{/* <nav className="mt-1">
						<Link
							className="hover:underline text-slate-500 mr-3 text-sm"
							to="/login"
						>
							Iniciar sesión
						</Link>
						<Link
							className="hover:underline text-white mr-3 text-sm bg-blue-400 px-3 py-2 rounded-md font-bold hover:bg-blue-600 transition-colors"
							to="/register"
						>
							Registrarse
						</Link>
					</nav> */}
				</div>
			</div>
			<div className="w-full flex h-16 justify-between items-center px-4 bg-[#816CA8]">
				<div className="flex flex-row items-center h-full w-full justify-between">
					<nav className="mt-1 flex gap-x-8">
						<Link
							className="hover:underline text-white mr-3 text-sm"
							to="/"
						>
							Inicio
						</Link>
						<Link
							className="hover:underline text-white mr-3 text-sm"
							to="/products"
						>
							Accesorios
						</Link>
						<Link
							className="hover:underline text-white mr-3 text-sm"
							to="/"
						>
							T-Shirts
						</Link>
						<Link
							className="hover:underline text-white mr-3 text-sm"
							to="/"
						>
							Troussers
						</Link>
						<Link
							className="hover:underline text-white mr-3 text-sm"
							to="/"
						>
							Shoes
						</Link>
					</nav>
					<div className="flex bg-[#C4C4C4] rounded-lg px-2">
						<a href="">Carrito</a>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							className="ml-2"
						>
							<path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921z" />
							<circle cx="10.5" cy="19.5" r="1.5" />
							<circle cx="17.5" cy="19.5" r="1.5" />
						</svg>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
