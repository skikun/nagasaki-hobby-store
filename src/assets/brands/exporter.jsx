import OnePieceCharacter from "./one-piece/character.png";
import OnePieceLogo from "./one-piece/logo.png";

import PokemonCharacter from "./pokemon/character.png";
import PokemonLogo from "./pokemon/logo.png";

import YuGiOhCharacter from "./yu-gi-oh/character.png";
import YuGiOhLogo from "./yu-gi-oh/logo.png";

import DigimonCharacter from "./digimon/character.png";
import DigimonLogo from "./digimon/logo.png";

const brands = {
	onepiece: {
		character: OnePieceCharacter,
		logo: OnePieceLogo,
		label: "One Piece",
		color: "#E60012",
		key: crypto.randomUUID(),
	},
	pokemon: {
		character: PokemonCharacter,
		logo: PokemonLogo,
		label: "Pokémon",
		color: "#FFCB05",
		key: crypto.randomUUID(),
	},
	yugioh: {
		character: YuGiOhCharacter,
		logo: YuGiOhLogo,
		label: "Yu-Gi-Oh!",
		color: "#00539F",
		key: crypto.randomUUID(),
	},
	digimon: {
		character: DigimonCharacter,
		logo: DigimonLogo,
		label: "Digimón",
		color: "#00A6A6",
		key: crypto.randomUUID(),
	},
};

export default brands;
