import './contactForm.css';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { register } from '../../services/services';

const ContactForm = () => {
	const {
		register: formRegister,
		handleSubmit,
		formState: { errors, isDirty },
		getValues,
	} = useForm();
	const [errorMessage, setErrorMessage] = useState('');

	const onSubmit = async (data) => {
		try {
			const result = await register(data);
			console.log('Registro exitoso', result);
			if (result) navigation.navigate('/');
		} catch (error) {
			// console.error('Falló el registro:', error);
			setErrorMessage('El registro falló. Ahorita no joven');
		}
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			action="/"
			className="form-register"
			noValidate
		>
			{/* <Input
        label="name"
        name="name"
        placeholder="Enter your name"
        formRegister={formRegister}
        pattern={{
          value: /^\D/i,
          message: "Nombre invalido",
        }}
        required={{
          value: true,
          message:"el nombre es requerido"
        }}
      /> */}

			<label htmlFor="name" className="label">
				Name
			</label>
			<input
				type="text"
				id="name"
				placeholder="Enter your name"
				className="input input-password"
				{...formRegister('name', {
					required: {
						value: true,
						message: 'El nombre es requerido',
					},
					pattern: {
						value: /^[A-Za-záéíóúüÜñÑ\s]+$/i,
						message: 'Nombre inválido',
					},
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
				placeholder="@"
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
			<label htmlFor="name" className="label">
				User Name
			</label>
			<input
				type="text"
				id="user_name"
				placeholder="Crea un nombre de usuario"
				className="input input-password"
				{...formRegister('user_name', {
					required: {
						value: true,
						message: 'El Nombre de usuario es requerido',
					},
				})}
			/>
			{errors.user_name && (
				<span className="helper__text helper__text--warning">
					{errors.user_name.message}
				</span>
			)}

			{/* <label htmlFor="confirmarPassword" className="label">
        Confirmar Password
      </label>
      <input
        type="password"
        id="confirmarPassword"
        placeholder="*******"
        className="input"
        {...formRegister("confirmarPassword", {
          validate: (value) =>
            value === getValues("password") || "Las contraseñas no coinciden.",
        })}
      />
      {errors.confirmarPassword && (
        <span className="helper__text helper__text--alert">
          {errors.confirmarPassword.message}
        </span>
      )} */}

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

export default ContactForm;
