// services/auth.js
import { api } from "../src/features/interceptors";

export async function loginUser(formData) {
	try {
		const response = await api.post("/auth/signin", formData);
		return response.data;
	} catch (error) {
		// Bubble up actual backend error message if available
		const msg =
			error.response?.data?.message || error.message || "Login Failed.";
		throw new Error(msg);
	}
}

export async function registerUser(formData) {
	try {
		const response = await api.post("/auth/signup", formData);
		return response.data;
	} catch (error) {
		// Bubble up actual backend error message if available
		const msg =
			error.response?.data?.message || error.message || "Registration Failed.";
		throw new Error(msg);
	}
}

export async function getUser() {
	try {
		const response = await api.get("/user", formData);
		return response.data;
	} catch (error) {
		// Bubble up actual backend error message if available
		const msg =
			error.response?.data?.message || error.message || "Failed to get user.";
		throw new Error(msg);
	}
}

export async function updateUser(formData) {
	try {
		const response = await api.put("/signup", formData);
		return response.data;
	} catch (error) {
		// Bubble up actual backend error message if available
		const msg =
			error.response?.data?.message ||
			error.message ||
			"Failed to update user.";
		throw new Error(msg);
	}
}

export async function startChat(formData) {
	try {
		const response = await api.post("/chat", formData);
		return response.data;
	} catch (error) {
		// Bubble up actual backend error message if available
		const msg =
			error.response?.data?.message || error.message || "Registration Failed.";
		throw new Error(msg);
	}
}

export async function logoutUser() {
	try {
		const response = await api.put("/auth/signout", {});
		return response.data;
	} catch (error) {
		// Bubble up actual backend error message if available
		const msg =
			error.response?.data?.message ||
			error.message ||
			"Failed to signout user.";
		throw new Error(msg);
	}
}
