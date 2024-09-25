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
			</div>
			<img src={Characters} alt="Characters" />
		</section>
	);
};

export default OnePieceBanner;
