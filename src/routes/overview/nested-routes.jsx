import Home from "./home/view";
import Franchise from "./franchises/view";

const NESTED_HOME = [
	{
		path: "/",
		element: <Home />,
		key: crypto.randomUUID(),
	},
	{
		path: "pokemon",
		element: (
			<Franchise
				slug="pokemon"
				heading="Pokémon"
				description="Colecciona cartas, construye tu mazo y enfrenta a entrenadores de todo el mundo. Con cada carta, una nueva estrategia. ¡Hazte con las cartas más poderosas y conviértete en el campeón!"
				layout="left"
			/>
		),
		label: "Pokémon",
		key: crypto.randomUUID(),
	},
	{
		path: "one-piece",
		element: (
			<Franchise
				slug="one-piece"
				heading="One Piece"
				description="Reúne tu tripulación, crea estrategias únicas y conquista el Grand Line. ¡Colecciona cartas de tus personajes favoritos y enfrenta a poderosos rivales! ¡El tesoro está esperando!"
				layout="right"
			/>
		),
		label: "One Piece",
		key: crypto.randomUUID(),
	},
	{
		path: "digimon",
		element: (
			<Franchise
				slug="digimon"
				heading="Digimón"
				description="Colecciona cartas, evoluciona tus Digimon y vence a tus rivales en épicas batallas. ¡Haz crecer tu equipo, mejora tus estrategias y conquista el Mundo Digital!"
				layout="right"
			/>
		),
		label: "Digimón",
		key: crypto.randomUUID(),
	},
	{
		path: "mitos-y-leyendas",
		element: (
			<Franchise
				slug="mitos-y-leyendas"
				heading="Mitos & Leyendas"
				description="Sumérgete en un juego de cartas coleccionables de origen chileno que te permite explorar mitologías universales. Colecciona cartas de Aliados, Tótems, Talismanes, Armas y Oros, cada una con habilidades únicas que enriquecerán tus estrategias. Construye tu mazo, despliega tácticas legendarias y desafía a otros jugadores en épicas batallas. ¡Revive las leyendas y forja tu propio destino en el universo de Mitos y Leyendas!"
				layout="left"
			/>
		),
		label: "Mitos & Leyendas",
		key: crypto.randomUUID(),
	},
	{
		path: "accesories-and-board-games",
		element: (
			<Franchise
				slug="accesorios"
				heading="Accesorios & Juegos de Mesa"
				description="Equípate como un verdadero duelista. En nuestra tienda encontrarás todo lo que necesitas para tus juegos TCG: fundas premium para proteger tus cartas, tapetes de diseño exclusivo, deck boxes resistentes y organizadores para mantener tu mazo en perfectas condiciones. ¡Haz que cada duelo cuente y juega con estilo!"
				layout="right"
			/>
		),
		label: "Accesorios & Juegos de Mesa",
		key: crypto.randomUUID(),
	},
];

export default NESTED_HOME;
