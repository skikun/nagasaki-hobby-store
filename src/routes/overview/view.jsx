import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "../../components/header/component";
import Footer from "../../components/footer/component";
import Cart from "../../components/cart/component";
import PRODUCTS from "../../api/products/api";

const Overview = () => {
	const [open, setOpen] = useState(false);
	const [cart, setCart] = useState([]);

	function decodeHtmlEntities(str) {
		const parser = new DOMParser();
		const decodedString = parser.parseFromString(
			`<!doctype html><body>${str}`,
			"text/html"
		).body.textContent;
		return decodedString;
	}

	async function addToCart(id) {
		const product = await PRODUCTS.get(id);
		const itemIndex = cart.findIndex((item) => item.id === id);
		let updatedCart = [...cart];

		if (itemIndex !== -1) {
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
					name: decodeHtmlEntities(product.name),
					price: product.prices.price,
					image: product.images[0].src,
					total: product.prices.price,
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
