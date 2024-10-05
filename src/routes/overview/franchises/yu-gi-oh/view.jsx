import React from "react";

import Catalogue from "../../catalogue/view";

import "../../style.css";

const YuGiOh = () => {
	return (
		<>
			<section className="landing">
				<img src={require("./assets/banner.png")} alt="Banner" />
				<h1>Yu-Gi-Oh!</h1>
			</section>
			<section>
				<h2>Catálogo de productos</h2>
				<div className="catalogue">
					<Catalogue filter="yu-gi-oh" />
				</div>
			</section>
		</>
	);
};

export default YuGiOh;
