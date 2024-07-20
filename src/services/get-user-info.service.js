import { contentService } from './services';
export const getUserInfo = async () => {
	return await contentService.GET('/auth/user-info/');
};
