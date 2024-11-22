import Add from "../../assets/icons/add.svg";
import Minus from "../../assets/icons/minus.svg";
import TrashCan from "../../assets/icons/trash-can.svg";

import "./style.css";

const Component = ({ stock, quantity, onChange }) => {
	const word =
		quantity === stock ? (stock === 1 ? "producto" : "productos") : "";

	return (
		<>
			<div className="incrementer">
				<button
					onClick={() => onChange(-1)}
					title={quantity === 1 ? "Quitar del carrito" : ""}
				>
					<img
						src={quantity === 1 ? TrashCan : Minus}
						alt="Minus symbol icon"
					/>
				</button>
				{quantity}
				<button
					onClick={() => onChange(1)}
					disabled={quantity === stock}
					title={
						quantity === stock
							? `Solo hay ${stock} ${word} en existencias.`
							: ""
					}
				>
					<img src={Add} alt="Plus symbol icon" />
				</button>
			</div>
		</>
	);
};

export default Component;
