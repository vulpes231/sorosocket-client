export const getAccessToken = () => {
	return sessionStorage.getItem("token") || null;
};
