import React from "react";
import { Authnav } from "../components";
import Mobileauthnav from "./dash/Mobileauthnav";
import Sidebar from "./dash/Sidebar";

const Rooms = () => {
	return (
		<section className=" bg-slate-100 dark:bg-slate-950 h-screen">
			<div className="grid md:grid-cols-4">
				<div className="md:col-span-1">
					<Sidebar />
				</div>
				<div className="md:col-span-3">
					<Authnav />
					<div className="mt-[50px] p-6">Rooms</div>
				</div>
				<Mobileauthnav />
			</div>
		</section>
	);
};

export default Rooms;
