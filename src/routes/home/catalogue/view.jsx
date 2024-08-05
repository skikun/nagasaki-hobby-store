import React from "react";

import Item from "../../../components/item/component";

const items = [
	{
		name: "Item 1",
		price: 100,
		key: crypto.randomUUID(),
	},
	{
		name: "Item 2",
		price: 200,
		key: crypto.randomUUID(),
	},
	{
		name: "Item 3",
		price: 300,
		key: crypto.randomUUID(),
	},
	{
		name: "Item 4",
		price: 400,
		key: crypto.randomUUID(),
	},
	{
		name: "Item 5",
		price: 500,
		key: crypto.randomUUID(),
	},
];

const Catalogue = () => {
	return (
		<div>
			{items.map(({ name, price, key }) => (
				<Item key={key} name={name} price={price} />
			))}
		</div>
	);
};

export default Catalogue;
