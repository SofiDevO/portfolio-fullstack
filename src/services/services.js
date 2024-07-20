import { HTTPError } from './httpError/httpError';
import { ServiceManager } from './serviceManager';
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

const getUserInfo = async ()=>{
	const response = await  fetch(`${baseURL}/auth/user-info`,{
		method: 'GET',
		headers,
		credentials: 'include',
		mode: 'cors',
	});
	if (resposne.status.toString().startsWith('20')){
		const data = await  response.json();
		return data;
	}
	throw new HTTPError(response);
}



// Get User data
const token = localStorage.getItem('auth');
export const contentService = new ServiceManager(
	'https://sofi.igarrux.com',
	'cors',
	'include',
	'authorization',
	`Bearer ${token}`
);
export { register, login, getUserInfo };
