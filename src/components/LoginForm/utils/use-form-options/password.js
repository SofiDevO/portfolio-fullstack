import { UI_TEXT } from '../../ui/text';
export const PASSWORD_OPTIONS = {
	required: {
		value: true,
		message: UI_TEXT.PASSWORD_REQUIRED,
	},
	minLength: {
		value: 8,
		message: UI_TEXT.PASSWORD_TOO_SHORT,
	},
};
