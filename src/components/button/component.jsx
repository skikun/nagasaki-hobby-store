import React from "react";

import "./style.css";

const Button = ({ onClick, label }) => {
	return <button onClick={onClick}>{label}</button>;
};

export default Button;
