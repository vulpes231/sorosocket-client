import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectNavSlice } from "./features/navSlice";
import { Navbar } from "./components";
import { Route, Routes } from "react-router-dom";
import { Landing } from "./pages";

const App = () => {
	const { darkMode } = useSelector(selectNavSlice);

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

			<div className="min-h-screen mt-[90px] p-6 bg-slate-100 dark:bg-slate-950">
				<Routes>
					<Route path="/" element={<Landing />} />
				</Routes>
			</div>
		</section>
	);
};

export default App;
