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
			setCart(updatedCart);
		} else {
			setCart([
				...cart,
				{
					key: crypto.randomUUID(),
					id: id,
					quantity: 1,
					name: decodeHtmlEntities(product.name),
					price: product.prices.price.replace(/(\d{1,3})(\d{3})/g, "$1.$2"),
					image: product.images[0].src,
				},
			]);
		}
	}

	return (
		<>
			<Header open={open} onToggle={(value) => setOpen(value)} cart={cart} />
			<div>
				<Outlet context={(e) => addToCart(e)} />
				<Footer />
				<Cart open={open} onToggle={(value) => setOpen(value)} cart={cart} />
			</div>
		</>
	);
};

export default Overview;
