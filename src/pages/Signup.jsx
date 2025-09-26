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

					{/* Actions */}
					<div className="flex items-center justify-between">
						<a href="/signin" className={palette.link.base}>
							Already have an account? <span>Sign In</span>
						</a>
					</div>

					<button type="submit" className={`${palette.button.primary} w-full`}>
						Sign In
					</button>
				</form>

				{/* Footer */}
				<div className="text-center mt-6">
					<p className={palette.font.small}>
						Don’t have an account?{" "}
						<a href="/signup" className={palette.link.base}>
							Sign up
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
		</section>
	);
};

export default Signup;
