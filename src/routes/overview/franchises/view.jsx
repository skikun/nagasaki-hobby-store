import { useState } from "react";

import Catalogue from "../catalogue/view";

import "../style.css";

const View = ({ slug, heading, description, layout, theme }) => {
	const [search, setSearch] = useState("");

	function onSearch(e) {
		setSearch(e.target.value);
	}

	return (
		<>
			<section className={`landing ${layout} ${theme}`}>
				<img
					loading="lazy"
					src={require(`./assets/banners/${slug}.png`)}
					alt="Banner"
				/>
				<div>
					<h1>{heading}</h1>
					<p>{description}</p>
				</div>
			</section>
			<main>
				<h2>Catálogo de productos de {heading}</h2>
				<div className="product-grid">
					<input
						type="search"
						placeholder="Buscar un producto..."
						onChange={(e) => onSearch(e)}
						value={search}
					/>
					<Catalogue category={slug} search={search} />
					<Catalogue category={slug} search={search} />
					<Catalogue category={slug} search={search} />
					<Catalogue category={slug} search={search} />
					<Catalogue category={slug} search={search} />
					<Catalogue category={slug} search={search} />
					<Catalogue category={slug} search={search} />
					<Catalogue category={slug} search={search} />
					<Catalogue category={slug} search={search} />
					<Catalogue category={slug} search={search} />
					<Catalogue category={slug} search={search} />
					<Catalogue category={slug} search={search} />
				</div>
			</main>
		</>
	);
};

export default View;
