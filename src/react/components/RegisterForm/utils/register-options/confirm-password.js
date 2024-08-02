import { UI_TEXT } from '../../ui/text';

export const getConfirmPasswordOptions = (passwordValue) => ({
	validate: (value) => {
		return passwordValue == value || UI_TEXT.CONFIRM_PASSWORD_DONT_MATCH;
	},
});
