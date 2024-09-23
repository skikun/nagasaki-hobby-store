import React from "react";

import BrandList from "../../../components/brand-list/component";
import Button from "../../../components/button/component";

import Catalogue from "../catalogue/view";

import "./style.css";

const Home = () => {
	return (
		<>
			<section className="categories">
				<BrandList />
			</section>
			<section className="summary">
				<h1>
					Juegos únicos
					<br />
					de tus <font>marcas</font>
					<br />
					favoritas
				</h1>
				<p>
					Descripción de juegos o cosas muy
					<br />
					chéveres que se pueden comprar en esta
					<br />
					tienda, básicamente un texto donde se
					<br />
					convence para comprar.
				</p>
				<Button onClick={console.log("a")} label="Más información" />
			</section>
			<section className="catalogue">
				<Catalogue />
			</section>
		</>
	);
};

export default Home;
