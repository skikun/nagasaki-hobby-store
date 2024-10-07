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
				<img src={require(`./assets/banners/${slug}.png`)} alt="Banner" />
				<h1>{heading}</h1>
				<p>{description}</p>
			</section>
			<section>
				<h2>Catálogo de productos de {heading}</h2>
				<input
					type="search"
					id="search"
					placeholder="Buscar un producto..."
					onChange={(e) => onSearch(e)}
					value={search}
				/>
				<div className="product-grid">
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
			</section>
			<section></section>
		</>
	);
};

export default View;
