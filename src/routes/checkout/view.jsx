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

	const [loading, setLoading] = useState(false);
	const [done, setDone] = useState(false);
	const [error, setError] = useState(false);
	const [result, setResult] = useState("");

	useEffect(() => {
		setAddress(`${road} ${main} #${secondary} - ${discriminatory}`);
	}, [road, main, secondary, discriminatory]);

	async function onSubmit(event) {
		event.preventDefault();

		setLoading(true);
		setDone(false);
		setError(false);

		setResult("Realizando orden, por favor espere un momento...");

		const formData = new FormData(event.target);

		formData.append("access_key", "893363b7-4104-4b58-a902-f840b4941e3e");

		const response = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			body: formData,
		});

		const data = await response.json();

		setLoading(false);
		setDone(true);
		if (!data.success) {
			setError(false);
			setResult("Su orden ha sido realizada exitosamente.");
			event.target.reset();
		} else {
			console.log("Error:", data);
			setError(true);
			setResult(
				"Ha ocurrido un error al intentar procesar su orden:",
				data.message
			);
		}
	}

	return cart[0] ? (
		<main>
			{done && !error && !loading && (
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
									(
										{ key, id, name, price, stock, image, quantity, total },
										i
									) => {
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
														stock={stock}
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
								name="Nombre completo"
								label="Nombre completo"
								placeholder="Andrés Mora"
								autocomplete="name"
								required
							/>
							<div>
								<Input
									name="Correo electrónico"
									label="Correo electrónico"
									placeholder="andres@dominio.com"
									autocomplete="email"
									required
								/>
								<Input
									name="Número de celular"
									label="Número de celular"
									placeholder="319 795 5021"
									autocomplete="tel-national"
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
									autocomplete="shipping address-level1"
									required
								/>
								<Input
									name="Ciudad"
									label="Ciudad"
									placeholder="Bucaramanga"
									autocomplete="shipping address-level2"
									required
								/>
							</div>
							<div>
								<Input
									name="Barrio"
									label="Barrio"
									placeholder="Cabecera"
									autocomplete="shipping address-level3"
									required
								/>
								<Input
									name="Código postal"
									label="Código postal"
									placeholder="100101"
									autocomplete="shipping postal-code"
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
									autocomplete="shipping address-line1"
									required
									onChange={(e) => setMain(e.target.value)}
								/>
								<Input
									label="Secundaria"
									placeholder="11E"
									autocomplete="shipping address-line2"
									required
									onChange={(e) => setSecondary(e.target.value)}
								/>
								<Input
									label="Discriminatorio"
									placeholder="90"
									autocomplete="shipping address-line3"
									required
									onChange={(e) => setDiscriminatory(e.target.value)}
								/>
							</div>
							<input type="hidden" name="Dirección" value={address} />
							<Input
								name="Información adicional"
								label="Información adicional"
								placeholder="Conjunto, condominio, apartamento, segundo piso, casa color verde..."
								autocomplete="shipping address-line4"
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
			)}
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
