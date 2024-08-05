import React from "react";

import Catalogue from "./catalogue/view";

import Pokemon from "./pokemon/view";
import OnePiece from "./one-piece/view";
import Digimon from "./digimon/view";
import YuGiOh from "./yu-gi-oh/view";
import LoreCana from "./lore-cana/view";

const NESTED_HOME = [
	{ path: "/", element: <Catalogue /> },
	{ path: "pokemon", element: <Pokemon /> },
	{ path: "one-piece", element: <OnePiece /> },
	{ path: "digimon", element: <Digimon /> },
	{ path: "yu-gi-oh", element: <YuGiOh /> },
	{ path: "lore-cana", element: <LoreCana /> },
];

export default NESTED_HOME;
