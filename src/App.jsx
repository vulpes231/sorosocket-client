import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectNavSlice } from "./features/navSlice";
import { Navbar } from "./components";
import { Route, Routes } from "react-router-dom";
import {
	Contacts,
	Dashboard,
	Landing,
	Profile,
	Rooms,
	Signin,
	Signup,
} from "./pages";
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
			{!token && <Navbar />}

			<div className="">
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="/signin" element={<Signin />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/chats" element={!token ? <Signin /> : <Dashboard />} />
					<Route path="/rooms" element={!token ? <Signin /> : <Rooms />} />
					<Route path="/settings" element={!token ? <Signin /> : <Profile />} />
					<Route
						path="/contacts"
						element={!token ? <Signin /> : <Contacts />}
					/>
				</Routes>
			</div>
		</section>
	);
};

export default App;
