import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Products from "../pages/Products";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
				<Route element={<Layout />} >
                	<Route path="/" element={<Home />} />
					<Route path="/products" element={<Products />} />
					<Route path="/product" element={<Product />} />
				</Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
