import { useNavigate } from "react-router-dom";

import "./style.css";

const Component = ({ open, onToggle, cart }) => {
	const navigate = useNavigate();

	return (
		<div>
			<button onClick={() => onToggle(!open)}>X</button>
			<aside open={open}>
				<h3>Carrito de compras</h3>
				{cart.length === 0 && <p>No hay productos en el carrito.</p>}
				{cart.map(({ key, name, price, image, quantity }) => (
					<>
						<article key={key}>
							<div>
								<img src={image} alt="" />
							</div>
							<div>
								<h6>{name}</h6>
								<div>
									<span>{price}</span>
									{quantity > 1 && <span>{quantity}</span>}
								</div>
							</div>
						</article>
						<hr />
					</>
				))}
				{cart.length !== 0 && (
					<button
						onClick={() => {
							navigate("cart");
							onToggle(!open);
						}}
					>
						Ir al cheque
					</button>
				)}
			</aside>
		</div>
	);
};

export default Component;
