import {
	LucideMessageCircle,
	LucideMoon,
	LucideSun,
	LucideUserCircle,
} from "lucide-react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectNavSlice, setDarkMode } from "../features/navSlice";
import Usermenu from "./Usermenu";

import { motion } from "framer-motion";
import { animations } from "../styles/styles";

const Authnav = () => {
	const dispatch = useDispatch();
	const { darkMode } = useSelector(selectNavSlice);
	const [showMenu, setShowMenu] = useState(false);
	return (
		<motion.header
			initial="hidden"
			animate="visible"
			variants={animations.dropIn}
			className="fixed top-0 left-0 w-full z-50 bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700"
		>
			<nav className="flex justify-between items-center px-6 py-3">
				<h3 className="font-semibold">Welcome, User</h3>
				<div className="flex items-center gap-4">
					<button type="button" className="relative">
						<LucideMessageCircle className="w-6 h-6" />
						<span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
							0
						</span>
					</button>
					<button onClick={() => dispatch(setDarkMode())}>
						{!darkMode ? <LucideSun /> : <LucideMoon />}
					</button>
					<button onClick={() => setShowMenu((prev) => !prev)}>
						<LucideUserCircle className="w-6 h-6" />
					</button>
				</div>
				{showMenu && <Usermenu />}
			</nav>
		</motion.header>
	);
};

export default Authnav;
