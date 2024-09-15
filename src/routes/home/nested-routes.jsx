import React from "react";

import Catalogue from "./catalogue/view";

import Pokemon from "./pokemon/view";
import OnePiece from "./one-piece/view";
import Digimon from "./digimon/view";
import YuGiOh from "./yu-gi-oh/view";
import Magic from "./magic/view";
import Accesories from "./accesories/view";

const NESTED_HOME = [
	{
		path: "/",
		element: <Catalogue />,
		label: "Catálogo",
		key: crypto.randomUUID(),
	},
	{
		path: "pokemon",
		element: <Pokemon />,
		label: "Pokémon",
		key: crypto.randomUUID(),
	},
	{
		path: "one-piece",
		element: <OnePiece />,
		label: "One Piece",
		key: crypto.randomUUID(),
	},
	{
		path: "digimon",
		element: <Digimon />,
		label: "Digimón",
		key: crypto.randomUUID(),
	},
	{
		path: "yu-gi-oh",
		element: <YuGiOh />,
		label: "Yu-Gi-Oh!",
		key: crypto.randomUUID(),
	},
	{
		path: "magic",
		element: <Magic />,
		label: "Magic",
		key: crypto.randomUUID(),
	},
	{
		path: "accesories",
		element: <Accesories />,
		label: "Accesorios",
		key: crypto.randomUUID(),
	},
];

export default NESTED_HOME;
