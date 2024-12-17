import { useEffect, useState } from "react";

import * as DECODER from "../../../utils/DECODER";

import PRODUCTS from "../../../api/products/api";

import Item from "../../../components/item/component";
import Loading from "../../../components/loading/component";

import CATEGORIES from "../../../api/categories/api";

import "./style.css";

const View = ({ category }) => {
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);

	function getDiscount(previous, current) {
		const decimal = current / previous - 1;
		const discount = decimal * -100;
		return discount;
	}

	useEffect(() => {
		async function retrieveData() {
			setLoading(true);

			const { tag } = await CATEGORIES.search({ search: category });

			const { featured } = await PRODUCTS.getFeatured({
				tag,
			});

			const catalogue = featured.map((product) => {
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
					stock: product.is_in_stock,
					featured: product.tags[0] ? true : false,
				};
			});

			setItems(catalogue);

			setLoading(false);
		}

		retrieveData();
	}, [category]);

	return (
		<div className="catalogue featured">
			<h2>Productos destacados</h2>
			{loading ? (
				<Loading />
			) : items[0] ? (
				<div className="product-grid">
					{items.map(
						({ key, id, image, name, price, discount, stock, featured }) => (
							<Item
								key={key}
								id={id}
								image={image}
								name={name}
								price={price}
								discount={discount}
								stock={stock}
								featured={featured}
							/>
						)
					)}
				</div>
			) : (
				<p>
					En este momento no tenemos productos destacados, ¡pero dentro de poco
					los habrán!.
				</p>
			)}
		</div>
	);
};

export default View;
