import Catalogue from "../catalogue/view";

import "../style.css";

const View = ({ slug, heading, description, layout, theme }) => {
	return (
		<>
			<section className={`landing ${layout} ${theme}`}>
				<img src={require(`./assets/banners/${slug}.png`)} alt="Banner" />
				<h1>{heading}</h1>
				<p>{description}</p>
			</section>
			<section>
				<h2>Catálogo de productos</h2>
				<div className="catalogue">
					<Catalogue filter={slug} />
				</div>
			</section>
			<section></section>
		</>
	);
};

export default View;
