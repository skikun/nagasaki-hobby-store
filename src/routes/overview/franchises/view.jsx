import Catalogue from "../catalogue/view";

import "../style.css";

const View = ({ slug, heading, description, layout, theme }) => {
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
			<Catalogue category={slug} />
		</>
	);
};

export default View;
