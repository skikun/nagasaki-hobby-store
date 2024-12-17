import Featured from "../featured/view";
import Catalogue from "../catalogue/view";

import "../style.css";

const View = ({ slug, heading, description, layout }) => {
	return (
		<>
			<section className={`landing ${layout}`}>
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
			<Featured category={slug} />
			<Catalogue category={slug} />
		</>
	);
};

export default View;
