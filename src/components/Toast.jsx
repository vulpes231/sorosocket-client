import React from "react";
import { MdCheck, MdClose } from "react-icons/md";
import { LucideAlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Toast = ({ type = "success", onClose, message, show }) => {
	return (
		<AnimatePresence>
			{show && (
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 20 }}
					transition={{ duration: 0.3 }}
					className={`fixed top-[80px] right-5 z-50 rounded-xl shadow-lg p-4 w-80 flex items-start gap-3
						${
							type === "success"
								? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
								: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300"
						}
					`}
				>
					{/* Icon */}
					<div
						className={`p-2 rounded-full flex items-center justify-center
							${
								type === "success"
									? "bg-green-200 text-green-700 dark:bg-green-800 dark:text-green-300"
									: "bg-red-200 text-red-700 dark:bg-red-800 dark:text-red-300"
							}
						`}
					>
						{type === "success" ? (
							<MdCheck size={20} />
						) : (
							<LucideAlertCircle size={20} />
						)}
					</div>

					{/* Text */}
					<div className="flex-1">
						<p className="font-semibold capitalize">
							{type === "success" ? "Success" : "Error"}
						</p>
						<p className="text-sm opacity-90">{message}</p>
					</div>

					{/* Close button */}
					<button
						onClick={onClose}
						className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
					>
						<MdClose size={18} />
					</button>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default Toast;
