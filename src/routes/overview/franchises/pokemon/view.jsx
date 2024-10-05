import React from "react";

import Catalogue from "../../catalogue/view";

import "../../style.css";

const Pokemon = () => {
	return (
		<>
			<section className="landing">
				<img src={require("./assets/banner.png")} alt="Banner" />
				<h1>Pokémon</h1>
			</section>
			<section>
				<h2>Catálogo de productos</h2>
				<div className="catalogue">
					<Catalogue filter="pokemon" />
				</div>
			</section>
		</>
	);
};

export default Pokemon;
