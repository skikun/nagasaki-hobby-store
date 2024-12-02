import PokemonCharacter from "./pokemon/character.png";
import PokemonLogo from "./pokemon/logo.png";
import PokemonBackground from "./pokemon/background.png";

import OnePieceCharacter from "./one-piece/character.png";
import OnePieceLogo from "./one-piece/logo.png";
import OnePieceBackground from "./one-piece/background.png";

import DigimonCharacter from "./digimon/character.png";
import DigimonLogo from "./digimon/logo.png";
import DigimonBackground from "./digimon/background.png";

import MitosYLeyendasCharacter from "./mitos-y-leyendas/character.png";
import MitosYLeyendasLogo from "./mitos-y-leyendas/logo.png";
import MitosYLeyendasBackground from "./mitos-y-leyendas/background.png";

import AccesoriosCharacter from "./accesorios/character.png";
import AccesoriosLogo from "./accesorios/logo.png";
import AccesoriosBackground from "./accesorios/background.png";

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
		route: "mitos-y-leyendas",
		character: MitosYLeyendasCharacter,
		logo: MitosYLeyendasLogo,
		background: MitosYLeyendasBackground,
		key: crypto.randomUUID(),
	},
	{
		route: "accesories",
		character: AccesoriosCharacter,
		logo: AccesoriosLogo,
		background: AccesoriosBackground,
		key: crypto.randomUUID(),
	},
];

export default BRANDS;
