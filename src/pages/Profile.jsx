import React from "react";
import { Authnav } from "../components";
import Mobileauthnav from "./dash/Mobileauthnav";
import Sidebar from "./dash/Sidebar";
import Profilecontent from "./profile/Profilecontent";

const Profile = () => {
	return (
		<section className="bg-slate-100 dark:bg-slate-950 h-screen flex">
			{/* Sidebar - completely separate from scrollable content */}
			<div className="hidden md:block flex-shrink-0">
				<Sidebar />
			</div>

			{/* Main content area - independent scrolling */}
			<div className="flex-1 flex flex-col min-w-0">
				<div className="flex-shrink-0">
					<Authnav />
				</div>

				<div className="flex-1 overflow-auto">
					<Profilecontent />
				</div>
			</div>

			{/* Mobile nav */}
			<Mobileauthnav />
		</section>
	);
};

export default Profile;
