import React from "react";

import Characters from "./assets/characters.png";
import ThousandSunny from "./assets/thousand-sunny.png";
import Ocean from "./assets/ocean.png";
import Sky from "./assets/sky.png";

import "./style.css";

const OnePieceBanner = () => {
	return (
		<section className="one-piece-banner">
			<div>
				<img src={Sky} alt="Sky" />
				<img src={Ocean} alt="Ocean" />
				<img src={ThousandSunny} alt="Thousand Sunny" />
				<div></div>
			</div>
			<div>
				<h3>
					¡Navega hacia la aventura con el nuevo juego de cartas de One Piece!
				</h3>
				<p>
					¡La espera ha terminado y la oportunidad de unirte a la tripulación
					está aquí! Una experiencia épica donde podrás vivir la emoción de la
					Gran Línea en cada partida.
				</p>
				<a href="/one-piece">Ir a la colección</a>
			</div>
			<img src={Characters} alt="Characters" />
		</section>
	);
};

export default OnePieceBanner;
