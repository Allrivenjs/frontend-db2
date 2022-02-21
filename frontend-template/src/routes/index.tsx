import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useCookies } from "react-cookie";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const Router = () => {
	const [cookies] = useCookies(["user-token"]);
    return (
        <BrowserRouter>
            <Routes>
				<Route
					element={<Layout />}
				>
					<Route
						path="/register"
						element={
							cookies["user-token"] ? (
								<Navigate to="/" />
							) : (
								<Register />
							)
						}
					/>

					<Route
						path="/login"
						element={
							cookies["user-token"] ? (
								<Navigate to="/" />
							) : (
								<Login />
							)
						}
					/>

					<Route path="/" element={<Home />} />
				</Route>
			</Routes>
        </BrowserRouter>
    );
};

export default Router;
