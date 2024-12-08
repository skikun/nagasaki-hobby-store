import { useEffect, useState } from "react";

import PRODUCTS from "../../../api/products/api";

import * as DECODER from "../../../utils/DECODER";

import Item from "../../../components/item/component";
import Loading from "../../../components/loading/component";

import "./style.css";

const Catalogue = ({ category, search }) => {
	const [items, setItems] = useState([]);
	const [page, setPage] = useState(1);
	const [pages, setPages] = useState(null);

	function getDiscount(previous, current) {
		const decimal = current / previous - 1;
		const discount = decimal * -100;
		return discount;
	}

	useEffect(() => {
		async function retrieveData() {
			const { products, pages } = await PRODUCTS.get(undefined, page);

			setPages(pages);

			const catalogue = products.map((product) => {
				const price = product.prices.price;
				const regularPrice = product.prices.regular_price;
				return {
					key: crypto.randomUUID(),
					id: product.id,
					image: product.images[0].src,
					name: DECODER.decode(product.name),
					price: price.replace(/(\d{1,3})(\d{3})/g, "$1.$2"),
					discount:
						price === regularPrice ? "" : getDiscount(regularPrice, price),
					category: product.categories[0].slug,
					stock: product.is_in_stock,
				};
			});

			const categoryFiltered = catalogue.filter((item) => {
				return item.category === category;
			});

			const searchFiltered = categoryFiltered.filter((item) => {
				return item.name.toLowerCase().includes(search.toLowerCase());
			});

			setItems(
				search ? searchFiltered : category ? categoryFiltered : catalogue
			);
		}

		retrieveData();
	}, [category, search, page]);

	return items[0] ? (
		<main>
			<h2>Catálogo de productos</h2>
			<div className="slider">
				{items.map(
					({ key, id, image, name, price, discount, stock, category }) => (
						<Item
							key={key}
							id={id}
							image={image}
							name={name}
							price={price}
							discount={discount}
							stock={stock}
							category={category}
						/>
					)
				)}
			</div>
		</main>
	) : (
		<Loading />
	);
};

export default Catalogue;
