import React from "react";

import Brand from "./assets/brand.svg";

import "./style.css";

const card_backs = [
	"pokemon",
	"pokemon",
	"pokemon",
	"digimon",
	"one-piece",
	"pokemon",
	"one-piece",
	"digimon",
	"pokemon",
	"pokemon",
	"pokemon",
];

const LandingBannner = () => {
	return (
		<>
			<div style={{ "--quantity": card_backs.length }}>
				{card_backs.map((back, index) => (
					<div key={index} style={{ "--position": index + 1 }}>
						<img
							loading="lazy"
							src={require(`./assets/${index + 1}.png`)}
							alt={index + 1}
						/>
						<img
							loading="lazy"
							src={require(`./assets/${back}.png`)}
							alt={index + 1}
						/>
					</div>
				))}
			</div>
			<div>
				<div>
					<img
						loading="lazy"
						src={require("./assets/character.png")}
						alt="Character"
					/>
					<img loading="lazy" src={Brand} alt="Brand logo" />
				</div>
			</div>
		</>
	);
};

export default LandingBannner;
