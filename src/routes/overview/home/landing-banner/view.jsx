import React from "react";

import "./style.css";

const quantity = 11;

const LandingBannner = () => {
	return (
		<>
			<div style={{ "--quantity": quantity }}>
				{Array.from({ length: quantity }).map((_, index) => (
					<div key={index} style={{ "--position": index + 1 }}>
						<img src={require(`./assets/${index + 1}.png`)} alt={index + 1} />
					</div>
				))}
			</div>
			<div>
				<div>
					<img src={require("./assets/character.png")} alt="Character" />
				</div>
			</div>
		</>
	);
};

export default LandingBannner;
