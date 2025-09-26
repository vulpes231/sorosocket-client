import axios from "axios";
import { devUrl, getAccessToken } from "../constants";

export const api = axios.create({
	baseURL: `${devUrl}`,
	headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use(
	(config) => {
		const token = getAccessToken();
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => Promise.reject(error)
);

api.interceptors.response.use(
	(response) => response,
	(error) => {
		if (error.response && error.response.status === 401) {
			sessionStorage.clear();
			localStorage.clear();
			window.location.href = "/signin";
		}
		return Promise.reject(error);
	}
);
