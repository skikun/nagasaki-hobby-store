import React from "react";

import Catalogue from "../../catalogue/view";

import "../../style.css";

const View = () => {
	return (
		<>
			<section className="landing">
				<img src={require("./assets/banner.png")} alt="Banner" />
				<h1>Accesories</h1>
			</section>
			<section>
				<h2>Catálogo de productos</h2>
				<div className="catalogue">
					<Catalogue filter="accesorios" />
				</div>
			</section>
		</>
	);
};

export default View;
