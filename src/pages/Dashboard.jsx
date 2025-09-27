import React from "react";
import Sidebar from "./dash/Sidebar";
import Dashcontent from "./dash/Dashcontent";
import { Authnav } from "../components";
import Mobileauthnav from "./dash/Mobileauthnav";

const Dashboard = () => {
	return (
		<section className="bg-slate-100 dark:bg-slate-950 h-screen">
			<div className="grid md:grid-cols-4 h-full">
				{/* Sidebar */}
				<aside className="hidden md:flex md:flex-col md:col-span-1 border-r border-slate-200 dark:border-slate-800">
					<Sidebar />
				</aside>

				{/* Main Content */}
				<div className="flex flex-col md:col-span-3 h-full">
					<Authnav />
					<main className="flex-1 overflow-y-auto p-6 mt-[60px]">Chats</main>
				</div>

				{/* Mobile Bottom Nav */}
				<Mobileauthnav />
			</div>
		</section>
	);
};

export default Dashboard;
