import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

import Incrementer from "../incrementer/component";

import "./style.css";

const Component = ({ open, onToggle, cart, onChange }) => {
	const navigate = useNavigate();

	return (
		<div>
			<button onClick={() => onToggle(!open)}>Seguir comprando</button>
			<aside open={open}>
				<div>
					<h3>Carrito de compras</h3>
					{cart &&
						cart.map(({ key, id, name, price, image, quantity, total }) => {
							console.log(price, total);
							return (
								<Fragment key={key}>
									<article>
										<div>
											<img src={image} alt="Product" />
										</div>
										<div>
											<h6>{name}</h6>
											<Incrementer
												quantity={quantity}
												onChange={(value) => onChange(value, id)}
											/>
											<div>
												<span>
													{price
														.toString()
														.replace(/\D/g, "")
														.replace(/^(\d{1,3})(\d{3})$/, "$1.$2")
														.replace(/^(\d{1,3})(\d{3})(\d{3})$/, "$1'$2.$3")}
												</span>
												<span>
													{total
														.toString()
														.replace(/\D/g, "")
														.replace(/^(\d{1,3})(\d{3})$/, "$1.$2")
														.replace(/^(\d{1,3})(\d{3})(\d{3})$/, "$1'$2.$3")}
												</span>
											</div>
										</div>
									</article>
									<hr />
								</Fragment>
							);
						})}
					{cart.length === 0 && <p>No hay productos en el carrito.</p>}
				</div>
				{cart.length !== 0 && (
					<div>
						{cart
							.reduce((acc, { total }) => acc + parseFloat(total), 0)
							.toString()
							.replace(/\D/g, "")
							.replace(/^(\d{1,3})(\d{3})$/, "$1.$2")
							.replace(/^(\d{1,3})(\d{3})(\d{3})$/, "$1'$2.$3")}
						<hr />
						<button
							onClick={() => {
								navigate("cart");
								onToggle(!open);
							}}
						>
							Ir al cheque
						</button>
					</div>
				)}
			</aside>
		</div>
	);
};

export default Component;
