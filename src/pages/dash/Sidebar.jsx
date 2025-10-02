import React from "react";
import { Custominput } from "../../components";
import { motion } from "framer-motion";
import { animations } from "../../styles/styles";

const sideBarLinks = [
	{
		id: "chats",
		name: "chats",
		path: "/chats",
	},
	{
		id: "rooms",
		name: "rooms",
		path: "/rooms",
	},
	{
		id: "contacts",
		name: "contacts",
		path: "/contacts",
	},
	{
		id: "settings",
		name: "settings",
		path: "/settings",
	},
];

const Sidebar = () => {
	return (
		<motion.aside
			initial="hidden"
			animate="visible"
			variants={animations.slideRight}
			className="hidden md:flex flex-col h-full mt-[50px] bg-white dark:bg-slate-900"
		>
			<div className="p-4 font-bold text-lg border-b border-slate-200 dark:border-slate-800">
				SoroSocket
			</div>
		</motion.aside>
	);
};

export default Sidebar;

{
	/* <div className="p-4 space-y-3">
				<button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg">
					Start Chat
				</button>
				<Custominput placeholder="Search..." />
			</div> */
}
