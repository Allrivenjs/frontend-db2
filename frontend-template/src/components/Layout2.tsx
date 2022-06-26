import { Outlet } from "react-router-dom";
import Footer from "./Footer";

import Navbar from "./Navbar";

const Layout = () => {
	return (
		<>
			<Outlet />
			<Footer />
		</>
	);
};

export default Layout;
