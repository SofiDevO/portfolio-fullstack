import { useState } from 'react';
import { EyeIcon } from './icons/eye.icon';
import './text-field.style.css';
export const TextField = ({
	label,
	supportText,
	isValid,
	supportIcon,
	isShowPassword,
	setIsShowPassword,
	...props
}) => {
	const [value, setValue] = useState('');
	if (props.type == 'email') props.type = 'text';
	return (
		<div className="text-field">
			<label is-valid={`${isValid}`}>
				<span>{label}</span>
				{supportIcon && <div>{supportIcon}</div>}
				<input
					{...props}
					value={value}
					type={isShowPassword ? 'text' : props.type}
					onChange={(e) => setValue(e.target.value)}
					required
				/>
				{props?.type == 'password' && (
					<div>
						<EyeIcon
							setIsOpen={setIsShowPassword}
							isOpen={isShowPassword}
						/>
					</div>
				)}
			</label>
			<span is-valid={`${isValid}`} className="support-text">
				{supportText}
			</span>
		</div>
	);
};
