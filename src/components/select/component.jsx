import React, { useState } from "react";
import ReactSelect, { components } from "react-select";

import "./style.css";

const SELECT_PLACEHOLDER_OPTIONS = [
	{ value: "1", label: "Opción 1" },
	{ value: "2", label: "Opción 2" },
	{ value: "3", label: "Opción 3" },
	{ value: "4", label: "Opción 4" },
	{ value: "5", label: "Opción 5" },
	{ value: "6", label: "Opción 6" },
	{ value: "7", label: "Opción 7" },
	{ value: "8", label: "Opción 8" },
	{ value: "9", label: "Opción 9" },
	{ value: "10", label: "Opción 10" },
	{ value: "11", label: "Opción 11" },
];

const Select = ({
	id,
	label,
	options,
	placeholder,
	value,
	resize,
	onChange,
	noResultsMessage,
	required,
	disabled,
}) => {
	const [valid, setValid] = useState("false");

	function handleChange(e) {
		onChange(e);
		setValid(e ? "true" : "false");
	}

	const NoOptionsMessage = (props) => {
		return (
			<components.NoOptionsMessage {...props}>
				{noResultsMessage
					? noResultsMessage
					: "No se encontró ningún resultado."}
			</components.NoOptionsMessage>
		);
	};

	return (
		<div resize={resize ? "true" : "false"}>
			<label htmlFor={id} valid={valid}>
				{label}
			</label>
			<ReactSelect
				id={`${id}-select`}
				inputId={id}
				options={options ? options : SELECT_PLACEHOLDER_OPTIONS}
				placeholder={placeholder ? placeholder : "Selecciona una opción"}
				components={{ NoOptionsMessage }}
				styles={{
					option: (base, state) => ({
						...base,
						background: state.isFocused ? "var(--accent)" : "",
						color: state.isFocused ? "var(--white)" : "",
						"&::after": {
							color: state.isFocused ? "var(--white) !important" : "",
						},
					}),
					noOptionsMessage: (base) => ({
						...base,
						lineHeight: "2.5rem",
						cursor: "not-allowed",
					}),
				}}
				value={value}
				onChange={(e) => handleChange(e)}
				required={required}
				isDisabled={disabled}
				unstyled
			/>
		</div>
	);
};

export default Select;
