// services/auth.js
import { api } from "../src/features/interceptors";

export async function loginUser(formData) {
	try {
		const response = await api.post("/signin", formData);
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
		const response = await api.post("/signup", formData);
		return response.data;
	} catch (error) {
		// Bubble up actual backend error message if available
		const msg =
			error.response?.data?.message || error.message || "Registration Failed.";
		throw new Error(msg);
	}
}
