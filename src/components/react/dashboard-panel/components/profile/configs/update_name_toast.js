import { UI_TEXT } from '../../ui/text';

export const updateNameToastParams = {
	success: UI_TEXT.NAME_UPDATED,
	pending: UI_TEXT.NAME_UPDATING,
	error: {
		render({ data: error }) {
			if (error.status == 500) return UI_TEXT.SERVER_ERROR;
			if (error.name == 'TypeError') return UI_TEXT.CONECTION_ERROR;
		},
	},
};
