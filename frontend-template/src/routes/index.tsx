import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Product from "../pages/Product";
import Products from "../pages/Products";
import Register from "../pages/Register";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
				<Route element={<Layout />} >
                	<Route path="/" element={<Home />} />
					<Route path="/products" element={<Products />} />
					<Route path="/product/:id" element={<Product />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
				</Route>

				<Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
