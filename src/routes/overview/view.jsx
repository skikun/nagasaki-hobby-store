import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "../../components/header/component";
import Footer from "../../components/footer/component";
import Cart from "../../components/cart/component";

import PRODUCTS from "../../api/products/api";

import * as DECODER from "../../utils/DECODER";

const Overview = () => {
	const [open, setOpen] = useState(false);
	const [cart, setCart] = useState([]);

	async function addToCart(id) {
		const { data } = await PRODUCTS.getById({ id });
		const stock = data.add_to_cart.maximum;

		const itemIndex = cart.findIndex((item) => item.id === id);
		let updatedCart = [...cart];

		if (itemIndex !== -1) {
			if (stock === updatedCart[itemIndex].quantity) {
				return;
			}
			updatedCart[itemIndex].quantity += 1;
			updatedCart[itemIndex].total =
				updatedCart[itemIndex].price * updatedCart[itemIndex].quantity;
			setCart(updatedCart);
		} else {
			setCart([
				...cart,
				{
					key: crypto.randomUUID(),
					id: id,
					quantity: 1,
					name: DECODER.decode(data.name),
					price: data.prices.price,
					stock: data.add_to_cart.maximum,
					image: data.images[0].src,
					total: data.prices.price,
				},
			]);
		}
	}

	function handleQuantity(value, id) {
		const itemIndex = cart.findIndex((item) => item.id === id);
		let updatedCart = [...cart];

		updatedCart[itemIndex].quantity += value;

		updatedCart[itemIndex].total =
			updatedCart[itemIndex].price * updatedCart[itemIndex].quantity;

		if (updatedCart[itemIndex].quantity === 0) {
			updatedCart.splice(itemIndex, 1);
		}

		setCart(updatedCart);
	}

	return (
		<>
			<Header open={open} onToggle={(value) => setOpen(value)} cart={cart} />
			<div>
				<Outlet
					context={{
						addToCart: (e) => addToCart(e),
						onChange: (value, id) => handleQuantity(value, id),
						cart: cart,
					}}
				/>
				<Footer />
				<Cart
					open={open}
					onToggle={(value) => setOpen(value)}
					cart={cart}
					onChange={(value, id) => handleQuantity(value, id)}
				/>
			</div>
		</>
	);
};

export default Overview;
