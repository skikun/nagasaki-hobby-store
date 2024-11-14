import { useEffect, useState } from "react";
import { useOutletContext, Link } from "react-router-dom";

import Input from "../../components/input/component";
import Incrementer from "../../components/incrementer/component";

import "./style.css";

const View = () => {
	const { cart, onChange } = useOutletContext();

	const [road, setRoad] = useState("");
	const [main, setMain] = useState("");
	const [secondary, setSecondary] = useState("");
	const [discriminatory, setDiscriminatory] = useState("");

	const [address, setAddress] = useState("");

	const [result, setResult] = useState("");

	useEffect(() => {
		setAddress(`${road} ${main} #${secondary} - ${discriminatory}`);
	}, [road, main, secondary, discriminatory]);

	async function onSubmit(event) {
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
	}

	return cart[0] ? (
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
								name="Departamento"
								label="Departamento"
								placeholder="Santander"
								required
							/>
							<Input
								name="Ciudad"
								label="Ciudad"
								placeholder="Bucaramanga"
								required
							/>
						</div>
						<div>
							<Input
								name="Barrio"
								label="Barrio"
								placeholder="Cabecera"
								required
							/>
							<Input
								name="Código postal"
								label="Código postal"
								placeholder="100101"
								required
							/>
							<Input
								label="Tipo de vía"
								placeholder="Calle"
								required
								onChange={(e) => setRoad(e.target.value)}
							/>
						</div>
						<div>
							<Input
								label="Principal"
								placeholder="8va"
								required
								onChange={(e) => setMain(e.target.value)}
							/>
							<Input
								label="Secundaria"
								placeholder="11E"
								required
								onChange={(e) => setSecondary(e.target.value)}
							/>
							<Input
								label="Discriminatorio"
								placeholder="90"
								required
								onChange={(e) => setDiscriminatory(e.target.value)}
							/>
						</div>
						<input type="hidden" name="Dirección" value={address} />
						<Input
							name="Información adicional"
							label="Información adicional"
							placeholder="Conjunto, condominio, apartamento, segundo piso, casa color verde..."
						/>
						{cart.map(({ key, id, name, price, quantity, total }, i) => {
							return (
								<input
									key={key}
									type="hidden"
									name={`Producto #${i + 1}`}
									value={`ID: ${id} - ${name}\nCantidad: ${quantity}\nPrecio por unidad: ${price
										.toString()
										.replace(/\D/g, "")
										.replace(/^(\d{1,3})(\d{3})$/, "$$$1.$2")
										.replace(
											/^(\d{1,3})(\d{3})(\d{3})$/,
											"$$$1'$2.$3"
										)}\nTotal: ${total
										.toString()
										.replace(/\D/g, "")
										.replace(/^(\d{1,3})(\d{3})$/, "$$$1.$2")
										.replace(/^(\d{1,3})(\d{3})(\d{3})$/, "$$$1'$2.$3")}`}
								/>
							);
						})}
					</form>
				</section>
			</div>
			<aside>
				<input type="submit" form="checkout" value="Realizar orden" />
				<span>{result}</span>
			</aside>
		</main>
	) : (
		<section className="not-found">
			<h1>¡Oops! El carrito de compras se encuentra vacío.</h1>
			<p>
				No hay productos para mostrar, el carrito está vacío. Dirígete a la{" "}
				<Link to="/">página principal</Link> o a alguna de nuestras franquicias
				promocionadas y añade algún producto.
			</p>
		</section>
	);
};

export default View;
