import Logo from "../../../../assets/brand/logo.svg";

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
						src={require("../../../../assets/brand/mascot.png")}
						alt="Naga-Saki Hobby Store's mascot"
					/>
					<img loading="lazy" src={Logo} alt="Naga-Saki Hobby Store's logo" />
				</div>
			</div>
		</>
	);
};

export default LandingBannner;
