import { contentService } from './services';
export const singupService = async (dataJSON) => {
	return await contentService.POSTFormData(dataJSON, '/auth/singup');
};
