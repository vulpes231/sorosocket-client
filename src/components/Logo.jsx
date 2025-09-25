import React from "react";
import { motion } from "framer-motion";

const Logo = ({ size = 40, withText = true }) => {
	return (
		<motion.div
			className="flex items-center gap-2"
			initial={{ opacity: 0, x: -10 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.4, ease: "easeOut" }}
		>
			{/* SVG logo (chat bubble) */}
			<svg
				width={size}
				height={size}
				viewBox="0 0 160 160"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="flex-shrink-0"
			>
				<defs>
					<linearGradient id="soroGradient" x1="0" x2="1" y1="0" y2="1">
						<stop offset="0%" stopColor="#16a34a" /> {/* green-600 */}
						<stop offset="70%" stopColor="#facc15" /> {/* yellow-400 */}
					</linearGradient>
				</defs>

				{/* chat bubble */}
				<path
					d="M24 36C24 23.297 34.297 13 47 13h66c12.703 0 23 10.297 23 23v38c0 12.703-10.297 23-23 23H80l-20 18v-18H47c-12.703 0-23-10.297-23-23V36z"
					fill="url(#soroGradient)"
				/>

				{/* wave lines */}
				<path
					d="M44 66c8-6 20-6 28 0 8 6 20 6 28 0"
					stroke="#fff"
					strokeWidth="4"
					strokeLinecap="round"
					strokeLinejoin="round"
					opacity="0.95"
				/>
				<path
					d="M44 78c8-6 20-6 28 0 8 6 20 6 28 0"
					stroke="#fff"
					strokeWidth="3"
					strokeLinecap="round"
					strokeLinejoin="round"
					opacity="0.85"
				/>

				{/* ping dot */}
				<circle cx="128" cy="44" r="6" fill="#fff" opacity="0.9" />
			</svg>

			{/* Wordmark */}
			{withText && (
				<h1 className="text-xl font-extrabold tracking-tight">
					<span className="text-green-600 dark:text-green-400">soro</span>
					<span className="text-yellow-500 dark:text-yellow-300">socket</span>
				</h1>
			)}
		</motion.div>
	);
};

export default Logo;
