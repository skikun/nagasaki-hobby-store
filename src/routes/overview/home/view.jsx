import React from "react";

import Left from "../../../assets/summary/left.png";
import Right from "../../../assets/summary/right.png";

import BrandList from "../../../components/brand-list/component";

import LandingBannner from "./landing-banner/view";
import OnePieceBanner from "./one-piece-banner/view";

import Catalogue from "../catalogue/view";

import "./style.css";
import "../style.css";

const Home = () => {
	return (
		<>
			<section className="landing-banner">
				<LandingBannner />
			</section>
			<section>
				<h1>Franquicias promocionadas</h1>
				<p>
					Estas son las franquicias con las que trabajamos. Selecciona alguna y
					navega por el catálogo de productos que ofrecemos para cada una de
					ellas.
				</p>
				<div className="categories">
					<BrandList />
				</div>
			</section>
			<section className="summary">
				<img loading="lazy" src={Left} alt="1" />
				<div>
					<h1>
						Juegos únicos de tus <font>marcas</font> favoritas
					</h1>
					<p>
						¡Embárcate en una aventura con los TCG de Pokémon, One Piece,
						Digimon y Yu-Gi-Oh!! Colecciona cartas, crea estrategias y desafía a
						tus amigos en emocionantes batallas. ¡Hazte con tus cartas favoritas
						y domina el juego!
					</p>
				</div>
				<img loading="lazy" src={Right} alt="2" />
			</section>
			<Catalogue />
			<OnePieceBanner />
			<div className="overlay">
				<h1>Página en construcción</h1>
				<p>
					Por favor, visítanos más adelante, ¡estamos seguros que te va a
					encantar!
				</p>
				<img
					src={require("../../../assets/brand/mascot.png")}
					alt="Naga-saki Hobby Store's Mascot"
				/>
				<img
					src={require("../../../assets/brand/logo.svg")}
					alt="Brand logo"
					loading="lazy"
				/>
			</div>
		</>
	);
};

export default Home;
