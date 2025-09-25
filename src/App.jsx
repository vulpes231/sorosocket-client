import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectNavSlice } from "./features/navSlice";
import { Navbar } from "./components";

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
		<div>
			<Navbar />
			<h3 className="uppercase">hello world</h3>
		</div>
	);
};

export default App;
