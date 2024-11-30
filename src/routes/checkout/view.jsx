import { useEffect, useState } from "react";
import { useOutletContext, Link } from "react-router-dom";

import Input from "../../components/input/component";
import Select from "../../components/select/component";
import Incrementer from "../../components/incrementer/component";

import Bancolombia from "../../assets/payment-methods/bancolombia.svg";
import Nequi from "../../assets/payment-methods/nequi.svg";

import "./style.css";

const ROAD_TYPE_OPTIONS = [
	{ value: 1, label: "Calle" },
	{ value: 2, label: "Avenida" },
	{ value: 3, label: "Carrera" },
	{ value: 4, label: "Diagonal" },
	{ value: 5, label: "Peatonal" },
	{ value: 6, label: "Circunvalar" },
	{ value: 7, label: "Transversal" },
	{ value: 8, label: "Otra (debe especificar)" },
];

const View = () => {
	const { cart, onChange } = useOutletContext();

	const [name, setName] = useState("");
	const [nickname, setNickname] = useState("");
	const [cellphone, setCellphone] = useState("");
	const [email, setEmail] = useState("");
	const [province, setProvince] = useState("");
	const [city, setCity] = useState("");
	const [neighborhood, setNeighborhood] = useState("");
	const [zipcode, setZipcode] = useState("");

	const [road, setRoad] = useState(null);
	const [main, setMain] = useState("");
	const [secondary, setSecondary] = useState("");
	const [discriminatory, setDiscriminatory] = useState("");
	const [additional, setAdditional] = useState("");

	const [roadOther, setRoadOther] = useState("");

	const [address, setAddress] = useState("");

	const [done, setDone] = useState(false);
	const [success, setSuccess] = useState(false);
	const [result, setResult] = useState("");

	useEffect(() => {
		let address = `${main} #${secondary} - ${discriminatory}`;

		if (road) {
			address =
				road.value === 8
					? `${roadOther} ${address}`
					: `${road.label} ${address}`;
		}

		if (additional) {
			address = `${address} (${additional})`;
		}

		setAddress(address);
	}, [road, roadOther, main, secondary, discriminatory, additional]);

	async function onSubmit(e) {
		e.preventDefault();

		setResult("Realizando orden, por favor espere un momento...");

		setDone(false);
		setSuccess(false);

		const formData = new FormData(e.target);

		formData.append("access_key", "893363b7-4104-4b58-a902-f840b4941e3e");

		const response = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			body: formData,
		});

		const data = await response.json();

		setDone(true);

		if (data.success) {
			setSuccess(true);
			setResult("Su orden ha sido realizada exitosamente.");
			e.target.reset();
		} else {
			console.log("Error:", data);
			setSuccess(false);
			setResult(
				"Ha ocurrido un error al intentar procesar su orden:",
				data.message
			);
		}
	}

	return cart[0] ? (
		<main>
			{!success && (
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
							<p>Usaremos estos datos para contactarnos contigo.</p>
							<div>
								<Input
									id="full-name"
									name="Nombre completo"
									label="Nombre completo"
									placeholder="Andrés Mora"
									autocomplete="name"
									required
									onChange={(e) => setName(e.target.value)}
								/>
								<Input
									id="nickname"
									name="Nombre preferido o nickname"
									label="Nombre preferido o nickname"
									placeholder="Ski"
									autocomplete="nickname"
									onChange={(e) => setNickname(e.target.value)}
								/>
							</div>
							<div>
								<Input
									id="email"
									name="Correo electrónico"
									label="Correo electrónico"
									placeholder="andres@dominio.com"
									autocomplete="email"
									required
									onChange={(e) => setEmail(e.target.value)}
								/>
								<Input
									id="cellphone-number"
									name="Número de celular"
									label="Número de celular"
									placeholder="319 795 5021"
									autocomplete="tel-national"
									required
									onChange={(e) => setCellphone(e.target.value)}
								/>
							</div>
							<hr />
							<h2>Información para el envío</h2>
							<p>Esto nos ayudará a calcular el costo de tu envío.</p>
							<div>
								<Input
									id="province"
									name="Departamento"
									label="Departamento"
									placeholder="Santander"
									autocomplete="shipping address-level1"
									required
									onChange={(e) => setProvince(e.target.value)}
								/>
								<Input
									id="city"
									name="Ciudad"
									label="Ciudad"
									placeholder="Bucaramanga"
									autocomplete="shipping address-level2"
									required
									onChange={(e) => setCity(e.target.value)}
								/>
							</div>
							<div>
								<Input
									id="neighborhood"
									name="Barrio"
									label="Barrio"
									placeholder="Cabecera"
									autocomplete="shipping address-level3"
									required
									onChange={(e) => setNeighborhood(e.target.value)}
								/>
								<Input
									id="zipcode"
									name="Código postal"
									label="Código postal"
									placeholder="100101"
									autocomplete="shipping postal-code"
									required
									onChange={(e) => setZipcode(e.target.value)}
								/>
							</div>
							<div>
								<Select
									id="road"
									label="Tipo de vía"
									placeholder="Calle"
									value={road}
									onChange={(e) => {
										setRoad(e);
									}}
									options={ROAD_TYPE_OPTIONS}
									required
								/>
								{road?.value === 8 && (
									<Input
										id="road-other"
										label="Especificar tipo de vía"
										placeholder="Callejón"
										required
										onChange={(e) => setRoadOther(e.target.value)}
									/>
								)}
							</div>
							<div className="address-fields">
								<Input
									id="main"
									label="Principal"
									placeholder="8va"
									autocomplete="shipping address-line1"
									required
									onChange={(e) => setMain(e.target.value)}
								/>
								#
								<Input
									id="secondary"
									label="Secundaria"
									placeholder="11E"
									autocomplete="shipping address-line2"
									required
									onChange={(e) => setSecondary(e.target.value)}
								/>
								-
								<Input
									id="discriminatory"
									label="Discriminatorio"
									placeholder="90"
									autocomplete="shipping address-line3"
									required
									onChange={(e) => setDiscriminatory(e.target.value)}
								/>
							</div>
							<input type="hidden" name="Dirección" value={address} />
							<Input
								id="additional-information"
								label="Información adicional"
								placeholder="Condominio, apto 607, segundo piso, casa color verde, etc..."
								autocomplete="shipping address-level4"
								onChange={(e) => setAdditional(e.target.value)}
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
			{!done && !success ? (
				<div>
					<aside>
						<h2>Resumen</h2>
						{name && cellphone && email && (
							<>
								<p>
									Es un gusto atenderlo,{" "}
									<strong>{nickname ? nickname : name.split(" ", 2)[0]}</strong>
									.
									<br />
									<br />
									Nos comunicaremos por WhatsApp o llamada telefónica a su
									número <strong>{cellphone}</strong>. En caso de no responder,
									le enviaremos un correo a <strong>{email}</strong>.
								</p>
								<hr />
							</>
						)}
						{province &&
							city &&
							neighborhood &&
							(road ? (road.value === 8 ? roadOther : road) : road) && (
								<>
									<h6>Dirección de entrega</h6>
									<p>
										{address}, {neighborhood} {zipcode && `(${zipcode})`} -{" "}
										{city}, {province}
									</p>
									<hr />
								</>
							)}
						<h6>Listado de productos</h6>
						<table>
							<tbody>
								{cart.map(({ key, name, total }) => {
									return (
										<tr key={key}>
											<td>{name}</td>
											<td>
												{total
													.toString()
													.replace(/\D/g, "")
													.replace(/^(\d{1,3})(\d{3})$/, "$$$1.$2")
													.replace(/^(\d{1,3})(\d{3})(\d{3})$/, "$$$1'$2.$3")}
											</td>
										</tr>
									);
								})}
								<tr>
									<td>Envío</td>
									<td>(por definir)</td>
								</tr>
								<tr>
									<td>Total</td>
									<td>
										{cart
											.reduce((acc, { total }) => acc + parseFloat(total), 0)
											.toString()
											.replace(/\D/g, "")
											.replace(/^(\d{1,3})(\d{3})$/, "$1.$2")
											.replace(/^(\d{1,3})(\d{3})(\d{3})$/, "$1'$2.$3")}
									</td>
								</tr>
							</tbody>
						</table>
						<hr />
						<input type="submit" form="checkout" value="Realizar orden" />
						{result && <span>{result}</span>}
					</aside>
					Una vez puesta la orden, nos comunicaremos prontamente contigo para
					informarte del valor del envío y concluir la compra.
				</div>
			) : (
				<div>
					<aside>
						<h1>¡Tu orden ha sido realizada!</h1>
						<p>
							Por favor, comunícate con nosotros al{" "}
							<a href="https://wa.me/573134431709">317 249 6541</a>, o a nuestro
							correo electrónico{" "}
							<a href="mailto:nagasakihobbystore@gmail.com">
								nagasakihobbystore@gmail.com
							</a>
							.
						</p>
					</aside>
					<p>
						Estos son nuestros métodos de pago autorizados. ¿No tienes ninguno
						de los dos? ¡No te preocupes! Puedes recargar a Nequi usando PSE o
						Transfiya, <strong>¡y el dinero llega de una vez!</strong>
					</p>
					<div>
						<img src={Bancolombia} alt="Bancolombia logo" />
						<img src={Nequi} alt="Nequi logo" />
					</div>
				</div>
			)}
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
