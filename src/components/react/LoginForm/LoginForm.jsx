import './LoginForm.css';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TextField } from '../text-field/text-field';
import { UI_TEXT } from './ui/text';
import { EMAIL_OPTIONS, PASSWORD_OPTIONS } from './utils/register-options';
import { loginService } from '../../../services';
import { HTTPError } from '../../../services/httpError/httpError';

const LoginForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ mode: 'all' });
	const [errorMessage, setErrorMessage] = useState('');
	const [isShowPassword, setIsShowPassword] = useState(false);

	const onSubmit = async (data) => {
		try {
			await loginService(data);
			localStorage.setItem('loginStatus', 'ok');
			navigation.navigate('/dashboard');
		} catch (error) {
			if (error?.response?.status == 401) {
				return setErrorMessage(UI_TEXT.UNAUTHORIZED);
			}
			if (error instanceof HTTPError) return setErrorMessage(error.msg);
			setErrorMessage('No se pudo iniciar sesion. Intenta de nuevo');
		}
	};

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)} className="form-register">
				<h2>{UI_TEXT.FORM_TITLE}</h2>
				<TextField
					id="email"
					type="email"
					placeholder={UI_TEXT.EMAIL_PLACEHOLDER}
					label={UI_TEXT.EMAIL_LABEL}
					isValid={!errors?.email}
					supportText={errors?.email?.message}
					{...register('email', EMAIL_OPTIONS)}
				/>
				<TextField
					id="password"
					type="password"
					canShowPassword
					isShowPassword={isShowPassword}
					setIsShowPassword={setIsShowPassword}
					label={UI_TEXT.PASSWORD_LABEL}
					isValid={!errors?.password}
					supportText={errors?.password?.message}
					{...register('password', PASSWORD_OPTIONS)}
				/>
				{errorMessage && (
					<span className="error_text">{errorMessage}</span>
				)}
				<div className="buttons">
					<input
						type="submit"
						value={UI_TEXT.SUBMIT_BUTTON_TEXT}
						className="button"
					/>
					<a href="/signup" className="button outline">
						{UI_TEXT.SIGNUP_BUTTON_TEXT}
					</a>
				</div>
			</form>
		</>
	);
};

export default LoginForm;
