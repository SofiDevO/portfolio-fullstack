import { ServiceManager } from './serviceManager';
export const BASE_URL = 'https://sofi.igarrux.com';
export const baseURL = 'https://sofi.igarrux.com';

let token = typeof window == 'object' ? localStorage.getItem('auth') : '';
export const contentService = new ServiceManager(
	'https://sofi.igarrux.com',
	'cors',
	'omit',
	'authorization',
	`Bearer ${token}`
);
