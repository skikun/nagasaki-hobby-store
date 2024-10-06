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
				description="Pokémon es una franquicia de medios que originalmente comenzó con un videojuego RPG creado por Satoshi Tajiri, y presentado por Nintendo. La franquicia se ha expandido a juegos de cartas, series de televisión, películas, juguetes, y otros productos."
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
				description="One Piece es una serie de manga escrita e ilustrada por Eiichirō Oda. Comenzó a publicarse en la revista japonesa Weekly Shōnen Jump el 22 de julio de 1997. Shueisha publica los capítulos en volúmenes. La historia sigue las aventuras de Monkey D. Luffy, un joven que accidentalmente consume una fruta mágica y se convierte en un hombre de goma."
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
				description="Digimón es una franquicia de medios japonesa, que incluye anime, manga, juguetes, videojuegos, juegos de cartas y otros medios. La franquicia se centra en criaturas ficticias llamadas Digimon, seres digitales que habitan en un mundo digital."
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
