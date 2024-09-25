import React from "react";

import Left from "../../../assets/summary/left.png";
import Right from "../../../assets/summary/right.png";

import BrandList from "../../../components/brand-list/component";
import Button from "../../../components/button/component";

import Catalogue from "../catalogue/view";
import OnePieceBanner from "./one-piece-banner/view";

import "./style.css";

const Home = () => {
	return (
		<>
			<section>
				<div className="categories">
					<BrandList />
				</div>
			</section>
			<section className="summary">
				<img src={Left} alt="1" />
				<div>
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
					<Button label="Más información" />
				</div>
				<img src={Right} alt="1" />
			</section>
			<section className="catalogue">
				<Catalogue />
				<Catalogue />
				<Catalogue />
				<Catalogue />
				<Catalogue />
			</section>
			<OnePieceBanner />
		</>
	);
};

export default Home;
