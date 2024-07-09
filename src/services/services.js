import { HTTPError } from './httpError/httpError';

export const BASE_URL = 'https://sofi.igarrux.com';
export const baseURL = 'https://sofi.igarrux.com';

const headers = {
	'Content-Type': 'application/json',
};
// registro
const register = async (data) => {
	const response = await fetch(`${baseURL}/auth/singup`, {
		method: 'POST',
		headers,
		body: JSON.stringify(data),
		credentials: 'include',
		mode: 'cors',
	});
	if (response.status.toString().startsWith('20')) return true;
	throw new HTTPError(response);
};
// Login
const login = async (data) => {
	const response = await fetch(`${baseURL}/auth/login`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
		credentials: 'include',
		mode: 'cors',
	});

	if (response.status.toString().startsWith('20')) return true;
	throw new HTTPError(response);
};

// Get User data

export { register, login };
