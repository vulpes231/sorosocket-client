import React, { useEffect, useState } from "react";
import { Custominput, Toast } from "../components";
import { handleForm, clearError } from "../constants";
import { palette, animations } from "../styles/styles";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../../services/service";

const Signup = () => {
	const [form, setForm] = useState({ username: "", password: "", email: "" });
	const [error, setError] = useState("");

	const mutation = useMutation({
		mutationFn: registerUser,
		onSuccess: (data) => {
			console.log(data);
		},
		onError: (err) => {
			setError(err.message);
		},
	});

	const handleSubmit = (e) => {
		e.preventDefault();

		for (const key in form) {
			if (form[key] === "") {
				setError(`${key} required!`);
				return;
			}
		}

		mutation.mutate(form);
	};

	useEffect(() => {
		const cleanup = clearError(error, setError);
		return cleanup;
	}, [error]);

	useEffect(() => {
		let timeout;
		if (mutation.isSuccess) {
			setTimeout(() => {
				mutation.reset();
				window.location.href = "/signin";
			}, 3000);
		}
		return () => clearTimeout(timeout);
	}, [mutation.isSuccess]);

	return (
		<section className="h-screen flex items-center justify-center bg-slate-100 dark:bg-slate-950 p-6">
			{/* Card */}
			<motion.div
				variants={animations.dropIn}
				initial="hidden"
				animate="visible"
				className={`${palette.card.elevated} w-full max-w-md`}
			>
				{/* Header */}
				<div className="text-center mb-6">
					<h1 className={`${palette.font.heading} ${palette.color.primary}`}>
						Get Started
					</h1>
					<p className={palette.font.subheading}>
						Sign up to enjoy full site features
					</p>
				</div>

				{/* Form */}
				<form onSubmit={handleSubmit} className="flex flex-col gap-5">
					<Custominput
						onChange={(e) => handleForm(e, form, setForm)}
						value={form.username}
						name="username"
						label="Username"
						placeHolder="Enter your username"
					/>
					<Custominput
						onChange={(e) => handleForm(e, form, setForm)}
						value={form.email}
						name="email"
						label="Email"
						type="text"
						placeHolder="Enter your email"
					/>
					<Custominput
						onChange={(e) => handleForm(e, form, setForm)}
						value={form.password}
						name="password"
						label="Password"
						type="password"
						placeHolder="Enter your password"
					/>

					<button type="submit" className={`${palette.button.primary} w-full`}>
						Sign Up
					</button>
				</form>

				{/* Footer */}
				<div className="text-center mt-6">
					<p className={palette.font.small}>
						Already have an account?{" "}
						<a href="/signin" className={palette.link.base}>
							Sign In
						</a>
					</p>
				</div>
			</motion.div>

			{/* Toast */}
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
					message={"Account register success."}
					onClose={() => mutation.reset()}
					show={true}
				/>
			)}
		</section>
	);
};

export default Signup;
