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
				theme="light"
			/>
		),
		key: crypto.randomUUID(),
		label: "Pokémon",
	},
	{
		path: "one-piece",
		element: (
			<Franchise
				slug="one-piece"
				heading="One Piece"
				description="¡Embárcate en la aventura con One Piece TCG! Reúne tu tripulación, crea estrategias únicas y conquista el Grand Line. ¡Colecciona cartas de tus personajes favoritos y enfrenta a poderosos rivales! ¡El tesoro está esperando!"
				layout="right"
				theme="light"
			/>
		),
		key: crypto.randomUUID(),
		label: "One Piece",
	},
	{
		path: "digimon",
		element: (
			<Franchise
				slug="digimon"
				heading="Digimón"
				description="¡Sumérgete en la acción con Digimon TCG! Colecciona cartas, evoluciona tus Digimon y vence a tus rivales en épicas batallas. ¡Haz crecer tu equipo, mejora tus estrategias y conquista el Mundo Digital!"
				layout="right"
				theme="light"
			/>
		),
		key: crypto.randomUUID(),
		label: "Digimón",
	},
	{
		path: "yu-gi-oh",
		element: (
			<Franchise
				slug="yu-gi-oh"
				heading="Yu-Gi-Oh!"
				description="¡Desafía a los mejores duelistas y libera tu poder en el campo de batalla! 🃏✨ Aprende, juega y domina el emocionante TCG de Yu-Gi-Oh! ¿Estás listo para ser el próximo Rey de los Duelos?"
				layout="left"
				theme="dark"
			/>
		),
		key: crypto.randomUUID(),
		label: "Yu-Gi-Oh!",
	},
	{
		path: "accesories",
		element: (
			<Franchise
				slug="accesorios"
				heading="Accesorios"
				description="Equípate como un verdadero duelista 🃏⚡ En nuestra tienda encontrarás todo lo que necesitas para tus juegos TCG: fundas premium para proteger tus cartas, tapetes de diseño exclusivo, deck boxes resistentes y organizadores para mantener tu mazo en perfectas condiciones. ¡Haz que cada duelo cuente y juega con estilo!"
				layout="right"
				theme="dark"
			/>
		),
		key: crypto.randomUUID(),
		label: "Accesorios",
	},
];

export default NESTED_HOME;
