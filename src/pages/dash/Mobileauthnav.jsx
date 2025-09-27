import {
	LucideMessageCircle,
	LucidePhone,
	LucideSettings,
	LucideUsers,
} from "lucide-react";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { palette, animations } from "../../styles/styles";
import { motion } from "framer-motion";

const links = [
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

const Mobileauthnav = () => {
	const navigate = useNavigate();
	const location = useLocation();
	console.log(location.pathname);
	return (
		<motion.div
			initial="hidden"
			animate="visible"
			variants={animations.emergeFromBottom}
			className="fixed bottom-0 left-0 md:hidden w-full bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800"
		>
			<div className="flex items-center justify-evenly p-2">
				{links.map((link) => {
					const icon =
						link.id === "chats" ? (
							<LucideMessageCircle />
						) : link.id === "rooms" ? (
							<LucideUsers />
						) : link.id === "contacts" ? (
							<LucidePhone />
						) : link.id === "settings" ? (
							<LucideSettings />
						) : null;
					return (
						<Link
							className={`${
								location.pathname.slice(1) === link.id
									? palette.color.primary
									: ""
							} flex flex-col gap-1 items-center justify-center`}
							key={link.id}
							// to={link.path}
							onClick={(e) => {
								e.preventDefault();
								navigate(link.path);
							}}
						>
							{" "}
							{icon}
							<small> {link.name}</small>
						</Link>
					);
				})}
			</div>
		</motion.div>
	);
};

export default Mobileauthnav;
