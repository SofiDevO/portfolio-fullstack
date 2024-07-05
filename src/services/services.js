import { HTTPError } from "./httpError/httpError";

const baseURL = 'https://sofi.igarrux.com';

const headers = {
	'Content-Type': 'application/json',
};

const register = async (data) => {
	const response = await fetch(`${baseURL}/auth/singup`, {
		method: 'POST',
		headers,
		body: JSON.stringify(data),
		credentials: "include"

	});
	if (response.status.toString().startsWith('20')) return true;
	throw new HTTPError(response);
};

const login = async (data) => {
	const response = await fetch(`${baseURL}/auth/login`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
		credentials: "include"
	});

	if (response.status.toString().startsWith('20')) return true;
	throw new HTTPError(response);
};

export { register, login };
