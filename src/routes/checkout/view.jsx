import { useState } from "react";
import { useOutletContext } from "react-router-dom";

import Input from "../../components/input/component";
import Incrementer from "../../components/incrementer/component";

import "./style.css";

const View = () => {
	const { cart, onChange } = useOutletContext();
	const [result, setResult] = useState("");

	const onSubmit = async (event) => {
		event.preventDefault();
		setResult("Sending....");
		const formData = new FormData(event.target);

		formData.append("access_key", "893363b7-4104-4b58-a902-f840b4941e3e");

		const response = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			body: formData,
		});

		const data = await response.json();

		if (data.success) {
			setResult("Su orden ha sido realizada exitosamente.");
			event.target.reset();
		} else {
			console.log("Error", data);
			setResult(data.message);
		}
	};

	return (
		<main>
			<div>
				<section>
					<h2>Carrito de compras</h2>
					<table>
						<thead>
							<tr align="left">
								<th colSpan="2">PRODUCTO</th>
								<th>PRECIO</th>
								<th>CANTIDAD</th>
								<th width="128px">TOTAL</th>
							</tr>
						</thead>
						<tbody>
							{cart.map(
								({ key, id, name, price, image, quantity, total }, i) => {
									return (
										<tr key={key}>
											<td>
												<div>
													<img src={image} alt={`Product ${i}`} />
												</div>
											</td>
											<td>{name}</td>
											<td>
												{price
													.toString()
													.replace(/\D/g, "")
													.replace(/^(\d{1,3})(\d{3})$/, "$$$1.$2")
													.replace(/^(\d{1,3})(\d{3})(\d{3})$/, "$$$1'$2.$3")}
											</td>
											<td>
												<Incrementer
													quantity={quantity}
													onChange={(value) => onChange(value, id)}
												/>
											</td>
											<td>
												{total
													.toString()
													.replace(/\D/g, "")
													.replace(/^(\d{1,3})(\d{3})$/, "$$$1.$2")
													.replace(/^(\d{1,3})(\d{3})(\d{3})$/, "$$$1'$2.$3")}
											</td>
										</tr>
									);
								}
							)}
						</tbody>
					</table>
				</section>
				<section>
					<form id="checkout" onSubmit={onSubmit}>
						<h2>Información de contacto</h2>
						<p>Con estos datos nos pondremos en contacto contigo.</p>
						<Input
							id="full-name"
							name="Nombre completo"
							label="Nombre completo"
							placeholder="Andrés Mora"
							required
						/>
						<div>
							<Input
								id="email"
								name="Correo electrónico"
								label="Correo electrónico"
								placeholder="andres@dominio.com"
								required
							/>
							<Input
								id="cellphone-number"
								name="Número de celular"
								label="Número de celular"
								placeholder="319 795 5021"
								required
							/>
						</div>
						<hr />
						<h2>Información para el envío</h2>
						<p>Estos datos se usarán para calcular el costo del envío.</p>
						<div>
							<Input
								id="state"
								name="Departamento"
								label="Departamento"
								placeholder="Santander"
								required
							/>
							<Input
								id="city"
								name="Ciudad"
								label="Ciudad"
								placeholder="Bucaramanga"
								required
							/>
						</div>
						<div>
							<Input
								id="neighborhood"
								name="Barrio"
								label="Barrio"
								placeholder="Cabecera"
								required
							/>
							<Input
								id="zip-code"
								name="Código postal"
								label="Código postal"
								placeholder="100101"
								required
							/>
							<Input
								id="road-type"
								name="Tipo de vía"
								label="Tipo de vía"
								placeholder="Calle"
								required
							/>
						</div>
						<div>
							<Input id="main" label="Principal" placeholder="8va" required />
							<Input
								id="secondary"
								name="Secundaria"
								label="Secundaria"
								placeholder="11E"
								required
							/>
							<Input
								id="discriminatory"
								name="Discriminatorio"
								label="Discriminatorio"
								placeholder="90"
								required
							/>
						</div>
						<Input
							id="additional-information"
							name="Información adicional"
							label="Información adicional"
							placeholder="Apartamento, conjunto, casa, condominio, segundo piso, casa color verde..."
						/>
					</form>
				</section>
			</div>
			<aside>
				<input type="submit" form="checkout" value="Realizar orden" />
				<span>{result}</span>
			</aside>
		</main>
	);
};

export default View;
