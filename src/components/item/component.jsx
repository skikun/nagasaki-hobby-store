import React from "react";

import "./style.css";

const Item = ({ image, name, description, price }) => {
	return (
		<article>
			<div>
				<img loading="lazy" src={image} alt="Foto del producto" />
			</div>
			<label>{name}</label>
			<p>{description}</p>
			<span>{price}</span>
		</article>
	);
};

export default Item;
