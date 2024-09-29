import React, { useEffect, useState } from "react";

import Item from "../../../components/item/component";

import PRODUCTS from "../../../api/products/api";

const Catalogue = ({ filter }) => {
	const [items, setItems] = useState([]);

	useEffect(() => {
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
						.replace(/<\/{0,}strong>/g, "")
						.replace(/<\/{0,}em>/g, ""),
					price: product.prices.price.replace(/(\d{1,3})(\d{3})/g, "$1.$2"),
					category: product.categories[0].slug,
				};
			});
			const filtered = catalogue.filter((item) => item.category === filter);
			setItems(filter ? filtered : catalogue);
			console.log(catalogue);
		}

		retrieveData();
	}, [filter]);

	return (
		<>
			{items.map(({ id, image, name, description, price, category }) => (
				<Item
					key={id}
					image={image}
					name={name}
					description={description}
					price={price}
					category={category}
				/>
			))}
		</>
	);
};

export default Catalogue;
