import React from "react";
import { useNavigate } from "react-router-dom";

import "./style.css";

const Item = ({ id, image, name, description, price }) => {
	const navigate = useNavigate();
	return (
		<article onClick={() => navigate(`../p/${id}`)}>
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
