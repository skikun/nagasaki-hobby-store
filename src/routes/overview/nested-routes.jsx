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
				description="¡El mundo de Pokémon TCG te espera! Colecciona cartas, construye tu mazo y enfrenta a entrenadores de todo el mundo. Con cada carta, una nueva estrategia. ¡Hazte con las cartas más poderosas y conviértete en el campeón!"
				layout="left"
				theme="dark"
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
				description="¡Embárcate en la aventura con One Piece TCG! Reúne tu tripulación, crea estrategias únicas y conquista el Grand Line. ¡Colecciona cartas de tus personajes favoritos y enfrenta a poderosos rivales! ¡El tesoro está esperando!"
				layout="right"
				theme="dark"
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
				description="¡Sumérgete en la acción con Digimon TCG! Colecciona cartas, evoluciona tus Digimon y vence a tus rivales en épicas batallas. ¡Haz crecer tu equipo, mejora tus estrategias y conquista el Mundo Digital!"
				layout="right"
				theme="dark"
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
				description="¡Desafía a los mejores duelistas y libera tu poder en el campo de batalla! 🃏✨ Aprende, juega y domina el emocionante TCG de Yu-Gi-Oh! ¿Estás listo para ser el próximo Rey de los Duelos?"
				layout="left"
				theme="dark"
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
				description="Equípate como un verdadero duelista 🃏⚡ En nuestra tienda encontrarás todo lo que necesitas para tus juegos TCG: fundas premium para proteger tus cartas, tapetes de diseño exclusivo, deck boxes resistentes y organizadores para mantener tu mazo en perfectas condiciones. ¡Haz que cada duelo cuente y juega con estilo!"
				layout="right"
				theme="dark"
			/>
		),
		label: "Accesorios & Juegos de Mesa",
		key: crypto.randomUUID(),
	},
];

export default NESTED_HOME;
