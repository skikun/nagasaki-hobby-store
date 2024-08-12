import React from "react";

import "./style.css";

const Item = ({ image, name, price }) => {
	return (
		<div>
			<img src={image} alt="Foto del producto" />
			<span>
				<label>{name}</label>
				<strong>{price}</strong>
			</span>
		</div>
	);
};

export default Item;
