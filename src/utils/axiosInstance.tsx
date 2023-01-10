import axios from "axios";

const API = axios.create({ baseURL: `${process.env.SERVER_URL}/api/v1/` });

API.interceptors.request.use((req: any) => {
	// const token = JSON.parse(localStorage.getItem(`${process.env.REACT_APP_CREATO_TOKEN}`) || "{}");
	// if (localStorage.getItem(`${process.env.REACT_APP_CREATO_TOKEN}`)) {
		// req.headers.Authorization = `Bearer ${token}`;
		// req.headers.Range = "bytes=0~";
	// }
	return req;
});

export default API;