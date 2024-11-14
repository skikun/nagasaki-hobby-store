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
				description="Yu-Gi-Oh! es una franquicia de medios japonesa creada por Kazuki Takahashi. La serie original se publicó por primera vez en la revista Weekly Shōnen Jump de Shueisha desde septiembre de 1996 hasta marzo de 2004, con 343 capítulos recopilados en 38 volúmenes de tankōbon."
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
				description="Accesorios para tus juegos de mesa favoritos."
				layout="right"
				theme="dark"
			/>
		),
		key: crypto.randomUUID(),
		label: "Accesorios",
	},
];

export default NESTED_HOME;
