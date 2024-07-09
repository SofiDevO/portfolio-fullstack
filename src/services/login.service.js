import { contentService } from './services';
export const loginService = async (dataJSON) => {
	return await contentService.POSTJson(dataJSON, '/auth/login');
};
