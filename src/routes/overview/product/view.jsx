import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";

import Prev from "../../../assets/icons/prev.svg";
import Next from "../../../assets/icons/next.svg";

import PRODUCTS from "../../../api/products/api";

import * as DECODER from "../../../utils/DECODER";
import * as HTML from "../../../utils/HTML";

import Loading from "../../../components/loading/component";

import "./style.css";

const View = () => {
	const [product, setProduct] = useState(null);
	const [current, setCurrent] = useState(0);
	const [srcs, setSrcs] = useState([]);
	const [content, setContent] = useState(null);

	const { addToCart } = useOutletContext();

	const first = document.querySelector(".first");
	const last = document.querySelector(".last");

	let { id } = useParams();

	function getDiscount(previous, current) {
		const decimal = current / previous - 1;
		const discount = decimal * -100;
		return discount;
	}

	useEffect(() => {
		async function retrieveData() {
			const _p = await PRODUCTS.get(id);
			const price = _p.prices.price;
			const regularPrice = _p.prices.regular_price;
			const _ = {
				key: crypto.randomUUID(),
				name: DECODER.decode(_p.name),
				price: price.replace(/(\d{1,3})(\d{3})/g, "$$$1.$2"),
				discount:
					price === regularPrice ? "" : getDiscount(regularPrice, price),
				images: _p.images,
				category: _p.categories[0].slug,
			};

			setProduct(_);
			setContent(_p.description);
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

	function getPreviousPrice(current, discount) {
		const decimal = discount / 100;
		const percentage = decimal - 1;
		const result = current / -percentage;
		return result.toString().replace(/(\d{1,3})(\d{3})/, "$$$1.$2");
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
				<span>
					{product.price}
					{product.discount && (
						<span>
							{getPreviousPrice(
								product.price.replace(/\D/g, ""),
								product.discount
							)}
						</span>
					)}
				</span>
				{HTML.render(content)}
				<button onClick={() => addToCart(id)}>Añadir al carrito</button>
			</section>
		</main>
	) : (
		<Loading />
	);
};

export default View;
