//@ts-check
// ! POR FAVOR, IGNORA ESTE COMENTARIO, SOLO OCULTALO CON EL EDITOR.
// ! Este comentario de abajo es util para que sepas cómo usar la función.
/**
 * @typedef {import("react-hook-form").UseFormSetError<import("react-hook-form").FieldValues>} SetError
 * @description Manejador de errores HTTP para useForm, permite mostrar los errores del servidor
 * @param {Response} response Error devuelto por el servicio
 * @param {SetError} setError metodo de reactHookForm que permite establecer errores
 * @example
 *
 *  import { useForm } from 'react-hook-form';
 *	import yourService from 'path/to/yourService';
 *	import httpErrorHandler from 'path/to/handler';
 *	const Component = () => {
 *			const { register, setError } = useForm();
 *
 *			return (
 *				<form
 *				onSubmit={(data) => {
 *						yourService(data).catch((error) => {
 *							httpErrorHandler(error.response, setError);
 *						});
 *					}}
 *				>
 *					<input {...register('name')}></input>
 *				</form>
 *			);
 *	};
 */

export const httpErrorHandler = async (response, setError) => {
	const contentType = response?.headers?.get('Content-Type') || '';
	if (!contentType?.includes('application/json')) return false;
	if (response.status != 400 && response.status != 409) return false;

	const causeInfo = await response.json();
	if (!Array.isArray(causeInfo)) return false;

	causeInfo.forEach(({ path, message }) => {
		setError(path, { message });
	});
	return true;
};
