import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { updateUserService, sendVerificationService } from '@src/services';
import '../registerForm/registerForm.css';

const RegisterForm = ({ name, email, username, profile_img }) => {
  const [profileImg, setProfileImg] = useState(profile_img);
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register: formRegister,
    handleSubmit,
    formState: { errors, isDirty },
    getValues,
    reset,
  } = useForm({
    defaultValues: {
      name,
      email,
      password: '',
      confirmarPassword: '',
      user_name: username,
      code: '',
    },
  });

  useEffect(() => {

    reset({
      name,
      email,
      password: '',
      confirmarPassword: '',
      user_name: username,
      code: '',
    });
  }, [name, email, username, reset]);

  const onSubmit = async (data) => {
    try {
      await updateUserService(data, data.user_name);
      navigation.navigate('/dashboard');
    } catch (error) {
      if (error instanceof HTTPError) {
        setErrorMessage(error.msg);
      } else {
        setErrorMessage('Unable to update your information');
      }
    }
  };

  const handleUpdateImg = (e) => {
    const imgUrl = URL.createObjectURL(e.target.files[0]);
    setProfileImg(imgUrl);
  };

  useEffect(() => {
    return () => {
      if (profileImg && profileImg.startsWith('blob:')) {
        URL.revokeObjectURL(profileImg);
      }
    };
  }, [profileImg]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-register" noValidate>
      <label htmlFor="profile_picture" className="label">
        <img src={profileImg} alt="Profile" />
        Profile Picture
      </label>
      <input
        type="file"
        id="profile_picture"
        className="input input-password"
        hidden
        {...formRegister('profile_picture', {
          onChange: handleUpdateImg,
        })}
      />

      <label htmlFor="name" className="label">Name</label>
      <input
        type="text"
        id="name"
        placeholder="Enter your name"
        className="input input-password"
        {...formRegister('name')}
      />
      {errors.name && (
        <span className="helper__text helper__text--warning">
          {errors.name.message}
        </span>
      )}

      <label htmlFor="email" className="label">E-MAIL</label>
      <input
        type="email"
        id="email"
        placeholder="Enter your email"
        className="input input-password"
        {...formRegister('email', {
          required: 'Email is required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.(com|net|mx)$/i,
            message: 'Invalid email format',
          },
        })}
      />
      {errors.email && (
        <span className="helper__text helper__text--warning">
          {errors.email.message}
        </span>
      )}

      <label htmlFor="password" className="label">Password</label>
      <input
        type="password"
        id="password"
        placeholder="Enter a password"
        className="input input-password"
        {...formRegister('password')}
      />

      <label htmlFor="confirmarPassword" className="label">Confirm Password</label>
      <input
        type="password"
        id="confirmarPassword"
        placeholder="Confirm your password"
        className="input"
        {...formRegister('confirmarPassword', {
          validate: (value) =>
            value === getValues('password') || 'Passwords do not match',
        })}
      />
      {errors.confirmarPassword && (
        <span className="helper__text helper__text--alert">
          {errors.confirmarPassword.message}
        </span>
      )}

      <label htmlFor="user_name" className="label">User Name</label>
      <input
        type="text"
        id="user_name"
        placeholder="Create a username"
        className="input input-password"
        {...formRegister('user_name')}
      />
      {errors.user_name && (
        <span className="helper__text helper__text--warning">
          {errors.user_name.message}
        </span>
      )}

      <label className="label" htmlFor="code">Verification Code</label>
      <div className="verification__container">
        <input
          type="text"
          id="code"
          placeholder="Enter verification code"
          className="input input-verification"
          {...formRegister('code', {
            required: {
              value: true,
              message: 'Verification code is required',
            },
          })}
        />
        <button
          className="button__verification"
          type="button"
          onClick={async () => {
            try {
              await sendVerificationService(getValues('user_name'));
            } catch (error) {
              setErrorMessage('Error sending verification code');
            }
          }}
        >
          Get Code
        </button>
      </div>
      {errors.code && (
        <span className="helper__text helper__text--warning">
          {errors.code.message}
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
