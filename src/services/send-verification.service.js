import { contentService } from './services';
export const sendVerificationService = async (userName) => {
	return await contentService.GET('/verification/' + userName);
};
