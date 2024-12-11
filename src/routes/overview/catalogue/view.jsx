import { useEffect, useState } from "react";

import * as DECODER from "../../../utils/DECODER";

import PRODUCTS from "../../../api/products/api";

import Paginator from "../../../components/paginator/component";
import Item from "../../../components/item/component";
import Loading from "../../../components/loading/component";

import "./style.css";
import CATEGORIES from "../../../api/categories/api";

const Catalogue = ({ category }) => {
	const [items, setItems] = useState([]);
	const [page, setPage] = useState(1);
	const [pages, setPages] = useState(null);
	const [search, setSearch] = useState("");
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

			const { products, totalPages } = await PRODUCTS.get({
				search,
				page,
				tag,
			});

			setPages(Array.from({ length: totalPages }, (_, i) => i + 1));

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

			setItems(catalogue);

			setLoading(false);
		}

		retrieveData();
	}, [category, page, search]);

	return (
		<main className="catalogue">
			<h2>Catálogo de productos</h2>
			<div>
				<input
					type="search"
					placeholder="Buscar un producto..."
					onChange={(e) => setSearch(e.target.value)}
					value={search}
				/>
				{pages && (
					<Paginator total={pages} current={page} onClick={(e) => setPage(e)} />
				)}
			</div>
			{loading ? (
				<Loading />
			) : items[0] ? (
				<div className="product-grid">
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
			) : (
				<p>La búsqueda no arrojó ningún resultado.</p>
			)}
			{pages && (
				<Paginator total={pages} current={page} onClick={(e) => setPage(e)} />
			)}
		</main>
	);
};

export default Catalogue;
