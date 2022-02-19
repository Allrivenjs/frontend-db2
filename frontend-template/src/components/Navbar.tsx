import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="w-full h-16 bg-white shadow-md px-4 flex items-center justify-between">
			<div className="flex items-center h-full">
				<div className="font-bold text-xl mr-6">Logo</div>
				<nav className="mt-1">
					<Link
						className="hover:underline text-slate-500 mr-3 text-sm"
						to="/"
					>
						Home
					</Link>
					<Link
						className="hover:underline text-slate-500 mr-3 text-sm"
						to="/products"
					>
						Productos
					</Link>
					<Link
						className="hover:underline text-slate-500 mr-3 text-sm"
						to="/account"
					>
						Cuenta
					</Link>
				</nav>
			</div>
			<div className="flex items-center h-full">
				<nav className="mt-1">
					<Link
						className="hover:underline text-slate-500 mr-3 text-sm"
						to="/"
					>
						Iniciar sesión
					</Link>
					<Link
						className="hover:underline text-white mr-3 text-sm bg-blue-400 px-3 py-2 rounded-md font-bold hover:bg-blue-600 transition-colors"
						to="/products"
					>
						Registrarse
					</Link>
				</nav>
			</div>
		</div>
	);
};

export default Navbar;
