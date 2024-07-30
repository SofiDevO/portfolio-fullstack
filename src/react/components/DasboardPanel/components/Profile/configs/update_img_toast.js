import { UI_TEXT } from '../../ui/text';

export const updateImgToastParams = {
	success: UI_TEXT.IMAGE_UPDATED,
	pending: UI_TEXT.UPDATING_IMG,
	error: {
		render({ data: error }) {
			if (error.status == 431) return UI_TEXT.IMG_TOO_LARGE;
			if (error.status == 500) return UI_TEXT.SERVER_ERROR;
			if (error.name == 'TypeError') return UI_TEXT.CONECTION_ERROR;
		},
	},
};