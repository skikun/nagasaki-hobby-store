import "./style.css";

const Input = ({
	id,
	label,
	placeholder,
	name,
	value,
	autocomplete,
	required,
	disabled,
	onChange,
}) => {
	return (
		<div>
			<label htmlFor={id}>{label}</label>
			<input
				id={id}
				placeholder={placeholder}
				name={name}
				value={value}
				autoComplete={autocomplete}
				required={required}
				disabled={disabled}
				onChange={onChange}
			/>
		</div>
	);
};

export default Input;
