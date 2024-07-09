import { contentService } from './services';
export const updateUserService = async (dataJSON, userName) => {
	return await contentService.PATCHFormData(
		dataJSON,
		'/auth/user-info/' + userName
	);
};
