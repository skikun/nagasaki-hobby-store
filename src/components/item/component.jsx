import { useNavigate } from "react-router-dom";

import "./style.css";

const Item = ({ id, image, name, price, stock, discount }) => {
	const navigate = useNavigate();

	function getPreviousPrice() {
		const decimal = discount / 100;
		const percentage = decimal - 1;
		const result = (price / -percentage) * 1000;
		return result.toString().replace(/(\d{1,3})(\d{3})/, "$$$1.$2");
	}

	console.log("a", stock);

	return (
		<article
			onClick={() => navigate(`../p/${id}`)}
			stock={stock ? "true" : "false"}
		>
			<div>
				<img loading="lazy" src={image} alt="Foto del producto" />
			</div>
			{discount && <span>{Math.round(discount)}</span>}
			<h6>{name}</h6>
			<span data-content={discount ? getPreviousPrice() : null}>{price}</span>
		</article>
	);
};

export default Item;
