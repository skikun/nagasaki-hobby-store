import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";

import PRODUCTS from "../../../api/products/api";

import Prev from "../../../assets/icons/prev.svg";
import Next from "../../../assets/icons/next.svg";

import "./style.css";

const View = () => {
	const [product, setProduct] = useState(null);
	const [current, setCurrent] = useState(0);
	const [srcs, setSrcs] = useState([]);

	const { addToCart } = useOutletContext();

	const first = document.querySelector(".first");
	const last = document.querySelector(".last");

	let { id } = useParams();

	function decodeHtmlEntities(str) {
		console.log(str);
		const parser = new DOMParser();
		const decodedString = parser.parseFromString(
			`<!doctype html><body>${str}`,
			"text/html"
		).body.textContent;
		console.log(decodedString);
		return decodedString;
	}

	useEffect(() => {
		async function retrieveData() {
			const _p = await PRODUCTS.get(id);
			const _ = {
				key: crypto.randomUUID(),
				name: decodeHtmlEntities(_p.name),
				description: decodeHtmlEntities(_p.description),
				price: _p.prices.price,
				images: _p.images,
				category: _p.categories[0].slug,
			};
			setProduct(_);
			setSrcs(_p.images.map(({ src }) => src));
		}

		retrieveData();
	}, [id]);

	function prev() {
		const highlighted = document.querySelector(".current");
		if (current > 0) {
			setCurrent(current - 1);
			highlighted.scrollIntoView({
				behavior: "smooth",
				inline: "center",
				block: "nearest",
			});
		} else {
			setCurrent(srcs.length - 1);
			last.scrollIntoView({
				behavior: "smooth",
				inline: "center",
				block: "nearest",
			});
		}
	}

	function next() {
		const highlighted = document.querySelector(".current");
		if (current < srcs.length - 1) {
			setCurrent(current + 1);
			highlighted.scrollIntoView({
				behavior: "smooth",
				inline: "start",
				block: "nearest",
			});
		} else {
			setCurrent(0);
			first.scrollIntoView({
				behavior: "smooth",
				inline: "center",
				block: "nearest",
			});
		}
	}

	return product ? (
		<main className="product">
			<section>
				<div>
					<button onClick={() => prev()}>
						<img src={Prev} alt="Leftwards arrow" />
					</button>
					<img src={srcs[current]} alt="Current selected" />
					<button onClick={() => next()}>
						<img src={Next} alt="Rightwards arrow" />
					</button>
				</div>
				<div>
					{product &&
						product.images.map(({ id, src }, i) => {
							const string = `${i === 0 ? "first" : ""} ${
								i === product.images.length - 1 ? "last" : ""
							} ${current === i ? "current" : ""}`.trim();
							const className = string === "" ? null : string;

							return (
								<div key={id}>
									<img
										src={src}
										alt={`Product ${i + 1}`}
										className={className}
										onClick={() => {
											setCurrent(i);
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
				<button onClick={() => addToCart(id)}>Añadir al carrito</button>
			</section>
		</main>
	) : (
		"Loading..."
	);
};

export default View;
