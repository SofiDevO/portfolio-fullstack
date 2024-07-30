import './registerForm.css';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { singupService } from '@src/services';
import { getConfirmPasswordOptions } from './utils/register-options/confirm-password';
import { TextField } from '../TextField/TextField';
import { UI_TEXT } from './ui/text';
import {
	EMAIL_OPTIONS,
	NAME_OPTIONS,
	PASSWORD_OPTIONS,
	USER_NAME_OPTIONS,
} from './utils/register-options';
import { httpErrorHandler } from '@src/utils/handlers/http-error.handler';
const RegisterForm = () => {
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors },
		getValues,
	} = useForm({ mode: 'all' });

	const [errorMessage, setErrorMessage] = useState('');
	const [isShowPassword, setIsShowPassword] = useState(false);

	const onSubmit = async (data) => {
		setErrorMessage();
		try {
			const { confirmPassword, ...submitData } = data;
			await singupService(submitData);
			window.location.href = '/login';
		} catch (error) {
			if (await httpErrorHandler(error.response, setError)) return;
			setErrorMessage(UI_TEXT.INTERNAL_SERVER_ERROR);
		}
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			action="/"
			className="form-register"
			noValidate
		>
			<h2>Registrarme</h2>
			<TextField
				label={UI_TEXT.NAME_LABEL}
				placeholder={UI_TEXT.NAME_PLACEHOLDER}
				isValid={!errors?.name}
				supportText={errors?.name?.message}
				supportIcon={<iconify-icon icon="mdi:account-edit" />}
				{...register('name', NAME_OPTIONS)}
			/>
			<TextField
				label={UI_TEXT.USER_NAME_LABEL}
				placeholder={UI_TEXT.USER_NAME_PLACEHOLDER}
				isValid={!errors?.user_name}
				supportIcon={<iconify-icon icon="mdi:user" />}
				supportText={errors?.user_name?.message}
				{...register('user_name', USER_NAME_OPTIONS)}
			/>
			<TextField
				label={UI_TEXT.EMAIL_LABEL}
				placeholder={UI_TEXT.EMAIL_PLACEHOLDER}
				isValid={!errors?.email}
				supportText={errors?.email?.message}
				supportIcon={<iconify-icon icon="mdi:email" />}
				{...register('email', EMAIL_OPTIONS)}
			/>
			<TextField
				type="password"
				canShowPassword
				setIsShowPassword={setIsShowPassword}
				isShowPassword={isShowPassword}
				label={UI_TEXT.PASSWORD_LABEL}
				placeholder={UI_TEXT.PASSWORD_PLACEHOLDER}
				isValid={!errors?.password}
				supportText={errors?.password?.message}
				supportIcon={<iconify-icon icon="mdi:password" />}
				{...register('password', PASSWORD_OPTIONS)}
			/>
			<TextField
				type="password"
				label={UI_TEXT.CONFIRM_PASSWORD_LABEL}
				canShowPassword
				setIsShowPassword={setIsShowPassword}
				isShowPassword={isShowPassword}
				supportIcon={<iconify-icon icon="mdi:password-alert" />}
				isValid={!errors?.confirmPassword}
				supportText={errors?.confirmPassword?.message}
				{...register(
					'confirmPassword',
					getConfirmPasswordOptions(getValues('password'))
				)}
			/>

			{errorMessage && <p className="error-message">{errorMessage}</p>}
			<div className="buttons">
				<input
					type="submit"
					value={UI_TEXT.SIGNUP}
					className="button"
				/>
				<a href="/login" className="button outline text">
					{UI_TEXT.LOGIN}
				</a>
			</div>
		</form>
	);
};

export default RegisterForm;
