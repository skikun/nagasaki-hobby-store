import Add from "../../assets/icons/add.svg";
import Minus from "../../assets/icons/minus.svg";

import "./style.css";

const Component = ({ stock, quantity, onChange }) => {
	const word =
		quantity === stock ? (stock === 1 ? "productos" : "productos") : "";

	return (
		<>
			<div className="incrementer">
				<button onClick={() => onChange(-1)} disabled={quantity === 1}>
					<img src={Minus} alt="Minus symbol icon" />
				</button>
				{quantity}
				<button
					onClick={() => onChange(1)}
					disabled={quantity === stock}
					title={
						quantity === stock && `Solo hay ${stock} ${word} en existencias.`
					}
				>
					<img src={Add} alt="Plus symbol icon" />
				</button>
			</div>
		</>
	);
};

export default Component;
