import './LoginForm.css';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TextField } from '../TextField/TextField';
import { UI_TEXT } from './ui/text';
import { EMAIL_OPTIONS, PASSWORD_OPTIONS } from './utils/register-options';
import { loginService } from '@services/login.service';
import { PATHS } from '@src/constants/paths';

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
			navigation.navigate(PATHS.DASHBOARD);
		} catch (error) {
			if (error?.response?.status == 401) {
				return setErrorMessage(UI_TEXT.UNAUTHORIZED);
			}
			setErrorMessage(UI_TEXT.INTERNAL_ERROR);
		}
	};

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)} className="form-register" noValidate>
				<h2>{UI_TEXT.FORM_TITLE}</h2>
				<TextField
					id="email"
					type="email"
					placeholder={UI_TEXT.EMAIL_PLACEHOLDER}
					label={UI_TEXT.EMAIL_LABEL}
					isValid={!errors?.email}
					supportText={errors?.email?.message}
					supportIcon={<iconify-icon icon="mdi:email" />}
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
					supportIcon={<iconify-icon icon="mdi:password" />}
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
					<a href={PATHS.SIGNUP} className="button outline">
						{UI_TEXT.SIGNUP_BUTTON_TEXT}
					</a>
				</div>
			</form>
		</>
	);
};

export default LoginForm;
