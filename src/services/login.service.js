import { contentService } from './services';
export const loginService = async (dataJSON) => {
	const res = await contentService.POSTJson(dataJSON, '/auth/login');
	localStorage.setItem('auth', res.headers.get("token"));
	return res;
};
