import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import Layout2 from "../components/Layout2";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Product from "../pages/Product";
import Products from "../pages/Products";
import Register from "../pages/Register";
import Cart from "../pages/Cart";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/home" element={<Home />} />
					<Route path="/products" element={<Products />} />
					<Route path="/product/:id" element={<Product />} />
					<Route path="/cart" element={<Cart />} />
				</Route>

				<Route element={<Layout2 />}>
					<Route path="/" element={<Login />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
				</Route>

				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
