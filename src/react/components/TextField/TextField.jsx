import { forwardRef } from 'react';
import { EyeIcon } from './icons/Eye.icon';
import './text-field.style.css';
export const TextField = forwardRef(
	(
		{
			label,
			supportText,
			isValid,
			supportIcon,
			isShowPassword,
			setIsShowPassword,
			canShowPassword,
			...props
		},
		ref
	) => {
		if (props.type == 'email') props.type = 'text';
		return (
			<div className="text-field">
				<label is-valid={`${isValid}`}>
					<span>{label}</span>
					{supportIcon && <div>{supportIcon}</div>}
					<input
						{...props}
						ref={ref}
						type={isShowPassword ? 'text' : props.type}
						required
					/>
					{props?.type == 'password' && canShowPassword && (
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
	}
);
