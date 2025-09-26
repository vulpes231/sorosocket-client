export const getAccessToken = () => {
	return sessionStorage.getItem("token") || null;
};

export const devUrl = "";
export const liveUrl = "";

export const handleForm = (e, form, setForm) => {
	const { name, value } = e.target;
	setForm({ ...form, [name]: value });
};

export const clearError = (error, setError) => {
	let timeout;
	if (error) {
		timeout = setTimeout(() => {
			setError("");
		}, 3000);
	}
	return () => clearTimeout(timeout);
};
