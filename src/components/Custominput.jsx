import React from "react";
import { motion } from "framer-motion";
import { palette, animations } from "../styles/styles";

const Custominput = ({
	label,
	value,
	onChange,
	name,
	placeHolder,
	type = "text",
}) => {
	return (
		<motion.div
			variants={animations.emergeFromBottom}
			initial="hidden"
			animate="visible"
			className="flex flex-col gap-2 w-full"
		>
			{/* Label */}
			<label htmlFor={name} className={`${palette.font.subheading} capitalize`}>
				{label}
			</label>

			{/* Input */}
			<input
				type={type}
				id={name}
				name={name}
				value={value}
				onChange={onChange}
				autoComplete="off"
				placeholder={placeHolder}
				className={`px-3 py-2 h-[46px] rounded-lg border w-full outline-none transition
					bg-gray-50 dark:bg-gray-900
					text-gray-900 dark:text-gray-100
					placeholder-gray-400 dark:placeholder-gray-500
					border-gray-300 dark:border-gray-700
					focus:ring-2 focus:ring-green-500 focus:border-green-500
				`}
			/>
		</motion.div>
	);
};

export default Custominput;
