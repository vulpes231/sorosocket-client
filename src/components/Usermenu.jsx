import { useMutation } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { logoutUser } from "../../services/service";
import Toast from "./Toast";
import { clearError } from "../constants";

const menuLinks = [
	{ id: "home", name: "Home", path: "/" },
	{ id: "about", name: "About", path: "/" },
	{ id: "support", name: "Support", path: "/" },
];

const Usermenu = () => {
	const [error, setError] = useState("");
	const mutation = useMutation({
		mutationFn: logoutUser,
		onSuccess: (data) => {
			console.log(data);
		},
		onError: (err) => {
			console.log(err);
		},
	});

	const handleSubmit = (e) => {
		e.preventDefault();

		mutation.mutate();
	};

	useEffect(() => {
		const cleanup = clearError(error, setError);
		return cleanup;
	}, [error]);

	useEffect(() => {
		let timeout;
		if (mutation.isSuccess) {
			timeout = setTimeout(() => {
				sessionStorage.clear();
				window.location.href = "/signin";
			}, 3000);
		}
		return () => clearTimeout(timeout);
	}, [mutation.isSuccess]);

	return (
		<div className="absolute top-[50px] right-[16px]">
			<span className="flex flex-col gap-4">
				{menuLinks.map((link) => {
					return <Link key={link.id}>{link.name}</Link>;
				})}
			</span>
			<button onClick={handleSubmit}>logout</button>
			{error && (
				<Toast
					type="error"
					message={error}
					onClose={() => setError("")}
					show={true}
				/>
			)}
			{mutation.isSuccess && (
				<Toast
					type="success"
					message={"Logout success."}
					onClose={() => mutation.reset()}
					show={true}
				/>
			)}
		</div>
	);
};

export default Usermenu;
