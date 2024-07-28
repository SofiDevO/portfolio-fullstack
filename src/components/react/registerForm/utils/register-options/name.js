import { NAME_REGEX } from '@src/utils/regex/regex';
import { UI_TEXT } from '../../ui/text';

export const NAME_OPTIONS = {
	required: {
		value: true,
		message: UI_TEXT.NAME_REQUIRED,
	},
	pattern: {
		value: NAME_REGEX,
		message: UI_TEXT.NAME_INVALID,
	},
};
