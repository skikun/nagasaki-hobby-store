import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import PRODUCTS from "../../../api/products/api";

import "./style.css";

const View = () => {
	const [product, setProduct] = useState(null);
	const [current, setCurrent] = useState(0);
	const [src, setSrc] = useState("");

	let { id } = useParams();

	useEffect(() => {
		async function retrieveData() {
			const _p = await PRODUCTS.get(id);
			const _ = {
				key: crypto.randomUUID(),
				name: _p.name,
				description: _p.description,
				price: _p.prices.price,
				images: _p.images,
				category: _p.categories[0].slug,
			};
			console.log(_p);
			setProduct(_);
			setSrc(_p.images[0].src);
		}

		retrieveData();
	}, [id]);

	return product ? (
		<main className="product">
			<section>
				<img src={src} alt="Current selected" />
				<div>
					{product &&
						product.images.map(({ id, src }, i) => {
							console.log(current, i);
							return (
								<div key={id}>
									<img
										src={src}
										alt={`Product ${i + 1}`}
										className={current === i && "current"}
										onClick={() => {
											setCurrent(i);
											setSrc(src);
										}}
									/>
								</div>
							);
						})}
				</div>
			</section>
			<section>
				<h1>{product.name}</h1>
				<p>{product.description}</p>
			</section>
		</main>
	) : (
		"Loading..."
	);
};

export default View;
