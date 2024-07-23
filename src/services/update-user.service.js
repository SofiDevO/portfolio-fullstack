import { contentService } from './services';

/**
 * @example
 * const newData = {
 *   name: "El nuevo nombre",
 *   profile_img: input.file[0],
 *   email: "nuevo@correo.com",
 *   password: "newPassword",
 *   code: codigoDeVerificacion
 * }
 * const response = await updateUserService(newData, 'username') // Con esto ya se actualiza la informacion
 * console.log(response.status) // Print the status
 */
export const updateUserService = async (dataJSON, userName) => {
	return await contentService.PATCHFormData(
		dataJSON,
		'/auth/user-info/' + userName
	);
};
