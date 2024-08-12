import React, { useEffect, useState } from "react";

import Item from "../../../components/item/component";

import PRODUCTS from "../../../api/products/api";

import "./style.css";

const Catalogue = () => {
	const [items, setItems] = useState([]);

	async function retrieveData() {
		const products = await PRODUCTS.get();
		const catalogue = products.map((product) => {
			return {
				id: product.id,
				name: product.name.replace(/&amp;/g, "&"),
				price: product.prices.price,
				image: product.images[0].src,
			};
		});
		setItems(catalogue);
	}

	useEffect(() => {
		retrieveData();
	}, []);

	return (
		<div className="catalogue">
			{items.map(({ id, image, name, price }) => (
				<Item key={id} image={image} name={name} price={price} />
			))}
		</div>
	);
};

export default Catalogue;
