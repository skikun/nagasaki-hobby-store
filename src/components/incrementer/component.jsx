import Add from "../../assets/icons/add.svg";
import Minus from "../../assets/icons/minus.svg";

import "./style.css";

const Component = ({ quantity, onChange }) => {
	return (
		<div className="incrementer">
			<button onClick={() => onChange(-1)} disabled={quantity === 1}>
				<img src={Minus} alt="Minus symbol icon" />
			</button>
			{quantity}
			<button onClick={() => onChange(1)}>
				<img src={Add} alt="Plus symbol icon" />
			</button>
		</div>
	);
};

export default Component;
