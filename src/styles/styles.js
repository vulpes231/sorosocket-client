export const palette = {
	font: {
		heading: "text-lg md:text-2xl font-bold",
		subheading:
			"text-base md:text-lg font-medium text-gray-600 dark:text-gray-300",
		body: "text-sm md:text-base text-gray-700 dark:text-gray-200",
		small: "text-xs text-gray-500 dark:text-gray-400",
	},

	color: {
		primary: "text-green-600 dark:text-green-400",
		secondary: "text-yellow-500 dark:text-yellow-300",
		danger: "text-red-600 dark:text-red-400",
		success: "text-emerald-600 dark:text-emerald-400",
	},

	card: {
		base: "bg-white dark:bg-gray-800 rounded-xl shadow-md p-4",
		elevated:
			"bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700",
	},

	button: {
		primary:
			"bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg",
		secondary:
			"bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-4 rounded-lg",
		danger:
			"bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg",
	},

	link: {
		base: "text-green-600 hover:text-green-800 underline dark:text-green-400 dark:hover:text-green-300",
	},
};

export const animations = {
	slideLeft: {
		hidden: { x: 100, opacity: 0 },
		visible: {
			x: 0,
			opacity: 1,
			transition: { duration: 0.5, ease: "easeOut" },
		},
	},
	slideRight: {
		hidden: { x: -100, opacity: 0 },
		visible: {
			x: 0,
			opacity: 1,
			transition: { duration: 0.5, ease: "easeOut" },
		},
	},
	dropIn: {
		hidden: { y: -50, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: { duration: 0.6, type: "spring", bounce: 0.3 },
		},
	},
	emergeFromBottom: {
		hidden: { y: 80, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: { duration: 0.6, type: "spring", bounce: 0.25 },
		},
	},
};
