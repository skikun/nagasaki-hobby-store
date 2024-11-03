import "./style.css";

const Input = ({ id, label, placeholder, name, value, required, disabled }) => {
	return (
		<div>
			<label htmlFor={id}>{label}</label>
			<input
				id={id}
				placeholder={placeholder}
				name={name}
				value={value}
				required={required}
				disabled={disabled}
			/>
		</div>
	);
};

export default Input;
