import { UI_TEXT } from '../ui/text';

export const getCardsToastParam = {
	success: UI_TEXT.CARDS_RECEIVED,
	pending: UI_TEXT.GETTING_CARDS,
	error: {
		render({ data: error }) {
			if (error.status == 500) return UI_TEXT.SERVER_ERROR;
			if (error.name == 'TypeError') {
				return UI_TEXT.GET_CARDS_CONEXION_ERROR;
			}
		},
	},
};
