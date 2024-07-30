import React, { useState, useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { register } from '@services/services';
import '../../react/components/RegisterForm/registerForm.css'
import { updateUserService, sendVerificationService } from '@src/services';
const RegisterForm = ({ name, email, username, profile_img }) => {
	const [userName, setUserName] = useState(name);
	const [userEmail, setUserEmail] = useState(email);
	const [userUsername, setUserUsername] = useState(username);

	const {
		register: formRegister,
		handleSubmit,
		formState: { errors, isDirty },
		getValues,
	} = useForm();

	const [errorMessage, setErrorMessage] = useState('');
	const [profileImg, setProfileImg] = useState('');
	const onSubmit = async (data) => {
		try {
			await updateUserService(data, userUsername/**Esto faltaba  */);
			navigation.navigate('/dashboard');
		} catch (error) {
			if (error instanceof HTTPError) return setErrorMessage(error.msg);
			setErrorMessage('No se pudo actualizar tu información');
		}
	};

	useEffect(() => {
		setUserName(name);
		setUserEmail(email);
		setUserUsername(username);
	}, [name, email, username]);

	const handleUpdateImg = (e) => {
		const imgUrl = URL.createObjectURL(e.target.files[0]);
		setProfileImg(imgUrl);
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			action="/"
			className="form-register"
			noValidate
		>
			<label htmlFor="profile_picture" className="label">
				<img src={profileImg || profile_img} alt="" />
				Profile Picture

			</label>
			<input
				type="file"
				id="profile_picture"
				className="input input-password"
				hidden
				{...formRegister('profile_picture', {
					required: {
						value: false,
						message: 'La foto de perfil es requerida',
					},
					onChange: handleUpdateImg,
				})}
			/>
			{errors.profile_picture && (
				<span className="helper__text helper__text--warning">
					{errors.profile_picture.message}
				</span>
			)}
			<label htmlFor="name" className="label">
				Name
			</label>
			<input
				type="text"
				id="name"
				value={userName}
				placeholder="Enter your name"
				className="input input-password"
				{...formRegister('name', {
					required: {
						value: false,
						message: 'El nombre es requerido',
					},
					pattern: {
						value: /^[A-Za-záéíóúüÜñÑ\s]+$/i,
						message: 'Nombre inválido',
					},
					onChange: (e) => setUserName(e.target.value),
				})}
			/>
			{errors.name && (
				<span className="helper__text helper__text--warning">
					{errors.name.message}
				</span>
			)}

			<label htmlFor="email" className="label">
				E-MAIL
			</label>
			<input
				type="email"
				id="email"
				value={userEmail}
				placeholder="Ingresa un email"
				className="input input-password"
				{...formRegister('email', {
					required: {
						value: false,
						message: 'El correo es requerido',
					},
					pattern: {
						value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.(com|net|mx)$/i,
						message:
							'Correo inválido. Asegúrate de que el correo contenga el formato correcto',
					},
					onChange: (e) => setUserEmail(e.target.value),
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
						value: false,
						message: 'El password es requerido',
					},
					minLength: {
						value: 8,
						message: 'Mínimo de 8 caracteres',
					},
					maxLength: {
						value: 26,
						message: 'Máximo de 26 caracteres',
					},
					pattern: {
						value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/i,
						message:
							'El password debe tener al menos 8 caracteres, 1 mayúscula, 1 signo',
					},
				})}
			/>
			{errors.password && (
				<span className="helper__text helper__text--warning">
					{errors.password.message}
				</span>
			)}

			<label htmlFor="confirmarPassword" className="label">
				Confirmar Password
			</label>
			<input
				type="password"
				id="confirmarPassword"
				placeholder="*******"
				className="input"
				{...formRegister('confirmarPassword', {
					validate: (value) =>
						value === getValues('password') ||
						'Las contraseñas no coinciden.',
				})}
			/>
			{errors.confirmarPassword && (
				<span className="helper__text helper__text--alert">
					{errors.confirmarPassword.message}
				</span>
			)}

			<label htmlFor="user_name" className="label">
				User Name
			</label>
			<input
				type="text"
				id="user_name"
				value={userUsername}
				placeholder="Crea un nombre de usuario"
				className="input input-password"
				{...formRegister('user_name', {
					required: {
						value: false,
						message: 'El Nombre de usuario es requerido',
					},
					onChange: (e) => setUserUsername(e.target.value),
				})}
			/>
			{errors.user_name && (
				<span className="helper__text helper__text--warning">
					{errors.user_name.message}
				</span>
			)}

			<label className="label" htmlFor="code">
				verification Code
			</label>
			<div className="verification__container">
				<input
					type="text"
					id="code"
					placeholder="Crea un nombre de usuario"
					className="input input-verification"
					{...formRegister('code', {
						required: {
							value: true,
							message: 'El código de verificación es requerido',
						},
					})}
				/>
				<button
					className="button__verification"
					type="button"
					onClick={async () => {
						await sendVerificationService(userUsername);
					}}
				>
					Get Code
				</button>
			</div>
			{errors.user_name && (
				<span className="helper__text helper__text--warning">
					{errors.user_name.message}
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

export default RegisterForm;
