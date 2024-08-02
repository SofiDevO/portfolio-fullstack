import { contentService } from './services';
export const getUserCards = async () => await contentService.GET('/cards');
