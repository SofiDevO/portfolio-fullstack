import { toast } from 'react-toastify';
import { ALLOWED_TYPES } from './mimetypes';
import { UI_TEXT } from '../../ui/text';
import { getFileType } from './utils/get-file-type';
export const validateImgFile = (file) =>
	new Promise((resolve) => {
		if (!file) return resolve(false);
		if (!ALLOWED_TYPES.includes(file.type)) {
			toast.error(UI_TEXT.INVALID_IMG_FORMAT);
			return resolve(false);
		}
		getFileType(file, (type) => {
			if (ALLOWED_TYPES.includes(type)) return resolve(true);
			toast.error(UI_TEXT.INVALID_IMG_FORMAT);
			resolve(false);
		});
	});
