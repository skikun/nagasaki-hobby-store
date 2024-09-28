import PokemonCharacter from "./pokemon/character.png";
import PokemonLogo from "./pokemon/logo.png";
import PokemonBackground from "./pokemon/background.png";

import OnePieceCharacter from "./one-piece/character.png";
import OnePieceLogo from "./one-piece/logo.png";
import OnePieceBackground from "./one-piece/background.png";

import DigimonCharacter from "./digimon/character.png";
import DigimonLogo from "./digimon/logo.png";
import DigimonBackground from "./digimon/background.png";

import YuGiOhCharacter from "./yu-gi-oh/character.png";
import YuGiOhLogo from "./yu-gi-oh/logo.png";
import YuGiOhBackground from "./yu-gi-oh/background.png";

import StarWarsCharacter from "./star-wars/character.png";
import StarWarsLogo from "./star-wars/logo.png";
import StarWarsBackground from "./star-wars/background.png";

const BRANDS = [
	{
		route: "pokemon",
		character: PokemonCharacter,
		logo: PokemonLogo,
		background: PokemonBackground,
		key: crypto.randomUUID(),
	},
	{
		route: "one-piece",
		character: OnePieceCharacter,
		logo: OnePieceLogo,
		background: OnePieceBackground,
		key: crypto.randomUUID(),
	},
	{
		route: "digimon",
		character: DigimonCharacter,
		logo: DigimonLogo,
		background: DigimonBackground,
		key: crypto.randomUUID(),
	},
	{
		route: "yu-gi-oh",
		character: YuGiOhCharacter,
		logo: YuGiOhLogo,
		background: YuGiOhBackground,
		key: crypto.randomUUID(),
	},
	{
		route: "star-wars",
		character: StarWarsCharacter,
		logo: StarWarsLogo,
		background: StarWarsBackground,
		key: crypto.randomUUID(),
	},
];

export default BRANDS;
