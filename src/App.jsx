import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectNavSlice } from "./features/navSlice";
import { Navbar } from "./components";
import { Route, Routes } from "react-router-dom";
import { Dashboard, Landing, Profile, Rooms, Signin, Signup } from "./pages";
import { getAccessToken } from "./constants";

const App = () => {
	const { darkMode } = useSelector(selectNavSlice);

	const token = getAccessToken();

	useEffect(() => {
		if (darkMode) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [darkMode]);

	return (
		<section>
			<Navbar />

			<div className="">
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="/signin" element={<Signin />} />
					<Route path="/signup" element={<Signup />} />
					<Route
						path="/dashboard"
						element={!token ? <Signin /> : <Dashboard />}
					/>
					<Route path="/rooms" element={!token ? <Signin /> : <Rooms />} />
					<Route path="/profile" element={!token ? <Signin /> : <Profile />} />
				</Routes>
			</div>
		</section>
	);
};

export default App;
