import {
	LucideUser,
	Mail,
	Bell,
	Shield,
	LogOut,
	LucideToggleLeft,
} from "lucide-react";
import { motion } from "framer-motion";
import { palette, animations } from "../../styles/styles";
import { getUser } from "../../../services/service";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { MdToggleOff, MdToggleOn } from "react-icons/md";

const Profilecontent = () => {
	const [user, setUser] = useState("");
	const mutation = useMutation({
		mutationFn: getUser,
		onSuccess: (data) => {
			setUser(data.data);
		},
	});

	useEffect(() => {
		mutation.mutate();
	}, []);

	const handleLogout = () => {
		// Add your logout logic here
		console.log("Logging out...");
	};

	return (
		<div className="mt-[60px] p-4 md:p-6 overflow-auto">
			<motion.div
				variants={animations.emergeFromBottom}
				initial="hidden"
				animate="visible"
				className="max-w-2xl mx-auto"
			>
				{/* Header */}
				<div className="text-center mb-8">
					<h1 className={palette.font.heading}>Profile & Settings</h1>
					<p className={palette.font.subheading + " mt-2"}>
						Manage your account preferences
					</p>
				</div>

				{/* Profile Card */}
				<div className={palette.card.elevated + " mb-6"}>
					<div className="flex items-center space-x-4 mb-6">
						<div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
							{user.avatar ? (
								<img
									src={user.avatar}
									alt={user.name}
									className="w-16 h-16 rounded-full"
								/>
							) : (
								<LucideUser className="w-8 h-8 text-green-600 dark:text-green-400" />
							)}
						</div>
						<div className="flex-1">
							<h2 className={`${palette.font.heading} capitalize`}>
								{user?.name?.firstname} {user?.name?.lastname}
							</h2>
							<p className={palette.font.small + " " + palette.color.primary}>
								{user?.status || "Online"}
							</p>
							<p className={palette.font.small}>{user?.personal?.email}</p>
						</div>
					</div>

					<button className={palette.button.secondary + " w-full"}>
						Edit Profile
					</button>
				</div>

				{/* Settings Sections */}
				<div className="space-y-4">
					{/* Notification Settings */}
					<div className={palette.card.base}>
						<div className="flex items-center space-x-3 mb-4">
							<Bell className="w-5 h-5 text-gray-600 dark:text-gray-400" />
							<h3 className={palette.font.subheading}>Notifications</h3>
						</div>
						<div className="space-y-3">
							<div className="flex items-center justify-between cursor-pointer">
								<span className={palette.font.body}>Push Notifications</span>
								<MdToggleOff size={30} />
							</div>
							<div className="flex items-center justify-between cursor-pointer">
								<span className={palette.font.body}>Email Notifications</span>
								<MdToggleOff size={30} />
							</div>
						</div>
					</div>

					{/* Privacy Settings */}
					<div className={palette.card.base}>
						<div className="flex items-center space-x-3 mb-4">
							<Shield className="w-5 h-5 text-gray-600 dark:text-gray-400" />
							<h3 className={palette.font.subheading}>Privacy</h3>
						</div>
						<div className="space-y-3">
							<label className="flex items-center justify-between cursor-pointer">
								<span className={palette.font.body}>Online Status</span>
								<select className="bg-transparent border border-gray-300 dark:border-gray-600 rounded px-2 py-1 text-sm">
									<option>Everyone</option>
									<option>Contacts Only</option>
									<option>Nobody</option>
								</select>
							</label>
							<div className="flex items-center justify-between cursor-pointer">
								<span className={palette.font.body}>Read Receipts</span>
								<MdToggleOn size={30} className="text-green-500" />
							</div>
						</div>
					</div>

					{/* Account Actions */}
					<div className={palette.card.base}>
						<div className="flex items-center space-x-3 mb-4">
							<Mail className="w-5 h-5 text-gray-600 dark:text-gray-400" />
							<h3 className={palette.font.subheading}>Account</h3>
						</div>
						<div className="space-y-2">
							<button className="w-full text-left py-2 px-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
								<span className={palette.font.body}>Change Email</span>
							</button>
							<button className="w-full text-left py-2 px-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
								<span className={palette.font.body}>Change Password</span>
							</button>
						</div>
					</div>

					{/* Logout Button */}
					<button
						onClick={handleLogout}
						className={
							palette.button.danger +
							" w-full flex items-center justify-center space-x-2 mt-6"
						}
					>
						<LogOut className="w-4 h-4" />
						<span>Log Out</span>
					</button>
				</div>
			</motion.div>
		</div>
	);
};

export default Profilecontent;
