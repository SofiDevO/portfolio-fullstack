import './LoginForm .css';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { login } from '../../services/services';
import { HTTPError } from '../../services/httpError/httpError';
const LoginForm = () => {
	const {
		register: formRegister,
		handleSubmit,
		formState: { errors, isDirty },
		getValues,
	} = useForm();
	const [errorMessage, setErrorMessage] = useState('');

	const onSubmit = async (data) => {
		try {
			await login(data);
			localStorage.setItem("loginStatus", "ok")
			navigation.navigate('/dashboard');
		} catch (error) {
			if (error instanceof HTTPError) return setErrorMessage(error.msg);
			setErrorMessage('No se pudo iniciar sesion. Intenta de nuevo');
		}
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			action=""
			className="form-register"
			noValidate
		>
			<label htmlFor="email" className="label">
				E-MAIL
			</label>
			<input
				type="email"
				id="email"
				placeholder="Ingresa un email"
				className="input input-password"
				{...formRegister('email', {
					required: {
						value: true,
						message: 'El correo es requerido',
					},
					pattern: {
						value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.(com|net|mx)$/i,
						message:
							'Correo inválido. Asegúrate de que el correo contenga el formato correcto',
					},
				})}
			/>
			{errors.email && (
				<span className="helper__text helper__text--warning">
					{errors.email.message}
				</span>
			)}

			<label htmlFor="password" className="label">
				Password
			</label>
			<input
				type="password"
				id="password"
				placeholder="Escribe una contraseña"
				className="input input-password"
				{...formRegister('password', {
					required: {
						value: true,
						message: 'El password es requerido',
					},
				})}
			/>
			{errors.password && (
				<span className="helper__text helper__text--warning">
					{errors.password.message}
				</span>
			)}
			{errorMessage && <p className="error-message">{errorMessage}</p>}

			<input
				type="submit"
				value="Confirm"
				className="login-button"
				disabled={!isDirty}
			/>
		</form>
	);
};

export default LoginForm;
