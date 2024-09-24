import React, { useEffect, useState } from "react";

import Item from "../../../components/item/component";

import PRODUCTS from "../../../api/products/api";

const Catalogue = () => {
	const [items, setItems] = useState([]);

	async function retrieveData() {
		const products = await PRODUCTS.get();
		const catalogue = products.map((product) => {
			return {
				id: product.id,
				image: product.images[0].src,
				name: product.name.replace(/&amp;/g, "&"),
				description: product.description
					.replace(/&amp;/g, "&")
					.replace(/&nbsp;/g, "")
					.replace(/<\/{0,}p>/g, "")
					.replace(/<br {0,}\/>/g, "")
					.replace(/<\/{0,}strong>/g, ""),
				price: product.prices.price.replace(/(\d{1,3})(\d{3})/g, "$1.$2"),
			};
		});
		setItems(catalogue);
	}

	useEffect(() => {
		retrieveData();
	}, []);

	return (
		<>
			{items.map(({ id, image, name, description, price }) => (
				<Item
					key={id}
					image={image}
					name={name}
					description={description}
					price={price}
				/>
			))}
		</>
	);
};

export default Catalogue;
