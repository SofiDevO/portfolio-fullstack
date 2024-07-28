import { EMAIL_REGEX } from '@src/utils/regex/regex';
import { UI_TEXT } from '../../ui/text';

export const EMAIL_OPTIONS = {
	required: {
		value: true,
		message: UI_TEXT.EMAIL_REQUIRED,
	},
	pattern: {
		value: EMAIL_REGEX,
		message: UI_TEXT.EMAIL_INVALID,
	},
};
