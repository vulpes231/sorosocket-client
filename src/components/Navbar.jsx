import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { MdClose, MdMenu } from "react-icons/md";
import { LucideCloudMoon, LucideSunrise } from "lucide-react";
import Logo from "./Logo";
import { selectNavSlice, setDarkMode, setToggle } from "../features/navSlice";
import { palette, animations } from "../styles/styles";

const navLinks = [
	{ id: "home", name: "Home" },
	{ id: "about", name: "About" },
	{ id: "support", name: "Support" },
];

const navButtons = [
	{ id: "signin", name: "Sign In", path: "/signin" },
	{ id: "signup", name: "Sign Up", path: "/signup" },
];

const Navbar = () => {
	const dispatch = useDispatch();
	const { toggle, darkMode } = useSelector(selectNavSlice);

	return (
		<header className="fixed top-0 left-0 w-full z-50 bg-slate-100/70 dark:bg-slate-800/70 backdrop-blur-sm shadow-sm">
			<motion.nav
				initial="hidden"
				animate="visible"
				variants={animations.dropIn}
				className="max-w-6xl mx-auto w-full p-6 flex justify-between items-center"
			>
				{/* Logo */}
				<Logo />

				{/* Desktop Links */}
				<div className="hidden md:flex items-center gap-6">
					{navLinks.map((link) => (
						<motion.div
							key={link.id}
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}
						>
							<Link
								to={`/${link.id}`}
								className={`${palette.font.subheading} ${palette.color.primary}`}
							>
								{link.name}
							</Link>
						</motion.div>
					))}
				</div>

				{/* Buttons + Toggles */}
				<div className="flex items-center gap-3">
					{/* Sign In/Up Buttons */}
					<div className="hidden md:flex items-center gap-3">
						{navButtons.map((btn) => (
							<Link
								key={btn.id}
								to={btn.path}
								className={
									btn.id === "signup"
										? palette.button.primary
										: palette.button.secondary
								}
							>
								{btn.name}
							</Link>
						))}
					</div>

					{/* Dark mode toggle */}
					<motion.button
						whileTap={{ scale: 0.9 }}
						onClick={() => dispatch(setDarkMode())}
					>
						{!darkMode ? (
							<LucideSunrise className="w-6 h-6 text-yellow-500" />
						) : (
							<LucideCloudMoon className="w-6 h-6 text-blue-400" />
						)}
					</motion.button>

					{/* Mobile Menu Toggle */}
					<button className="md:hidden" onClick={() => dispatch(setToggle())}>
						{!toggle ? (
							<MdMenu className="w-7 h-7" />
						) : (
							<MdClose className="w-7 h-7" />
						)}
					</button>
				</div>
			</motion.nav>

			{/* Mobile Dropdown */}
			<AnimatePresence>
				{toggle && (
					<motion.div
						initial="hidden"
						animate="visible"
						exit="hidden"
						variants={animations.emergeFromBottom}
						className="md:hidden bg-slate-100 dark:bg-slate-800 shadow-lg rounded-b-2xl px-6 py-4 flex flex-col gap-4"
					>
						{navLinks.map((link) => (
							<Link
								key={link.id}
								to={`/${link.id}`}
								className={`${palette.font.subheading} ${palette.color.primary}`}
							>
								{link.name}
							</Link>
						))}
						<div className="flex flex-col gap-2 mt-4">
							{navButtons.map((btn) => (
								<Link
									key={btn.id}
									to={btn.path}
									className={
										btn.id === "signup"
											? palette.button.primary
											: palette.button.secondary
									}
								>
									{btn.name}
								</Link>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
};

export default Navbar;
