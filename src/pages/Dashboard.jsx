import React from "react";
import Sidebar from "./dash/Sidebar";
import Dashcontent from "./dash/Dashcontent";
import { Authnav } from "../components";
import Mobileauthnav from "./dash/Mobileauthnav";

const Dashboard = () => {
	return (
		<section className="bg-slate-100 dark:bg-slate-950 h-screen flex">
			<div className="hidden md:block flex-shrink-0">
				<Sidebar />
			</div>
			<div className="flex-1 flex flex-col min-w-0">
				<div className="flex-shrink-0">
					<Authnav />
				</div>

				<div className="flex-1 overflow-auto">
					<Dashcontent />
				</div>
			</div>

			{/* Mobile Bottom Nav */}
			<Mobileauthnav />
		</section>
	);
};

export default Dashboard;
