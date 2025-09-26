import React, { useEffect, useState } from "react";
import { Custominput, Toast } from "../components";
import { useDispatch } from "react-redux";
import { clearError, handleForm } from "../constants";

const Signin = () => {
	// const dispatch = useDispatch();
	const [form, setForm] = useState({ username: "", password: "" });
	const [error, setError] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log("clicked");

		for (const key in form) {
			if (form[key] === "") {
				setError(`${key} required!`);
				return;
			}
		}

		alert("submitted.");
	};

	useEffect(() => {
		const cleanup = clearError(error, setError);
		return cleanup;
	}, [error]);

	return (
		<section className="h-[100vh] flex items-center justify-center bg-slate-100 dark:bg-slate-950 mt-[90px] p-6">
			<div className="max-w-xl mx-auto w-full bg-white dark:bg-slate-800 rounded-md md:rounded-2xl p-6 ">
				<div className="w-full flex flex-col gap-4">
					<Custominput
						onChange={(e) => handleForm(e, form, setForm)}
						value={form.username}
						name={"username"}
						label={"username"}
					/>
					<Custominput
						onChange={(e) => handleForm(e, form, setForm)}
						value={form.password}
						name={"password"}
						label={"password"}
					/>
					<button onClick={handleSubmit}>sign in</button>
				</div>
			</div>
			{error && (
				<Toast
					type={"error"}
					message={error}
					onClose={() => setError("")}
					show={true}
				/>
			)}
		</section>
	);
};

export default Signin;
