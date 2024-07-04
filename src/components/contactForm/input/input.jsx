export const Input = ({
	label,
	placeholder,
	type="text",
	formRegister,
	pattern,
	required,
	errors,
	name,
}) => {
	return (
		<>
			<label htmlFor={name} className="label">
				{label}
			</label>
			<input
				type={type}
				id={name}
				placeholder={placeholder}
				className="input input-password"
				{...formRegister(name, {
					required,
					pattern,
				})}
			/>
			{errors[name] && (
				<span className="helper__text helper__text--warning">
					{errors[name].message}
				</span>
			)}
		</>
	);
};
