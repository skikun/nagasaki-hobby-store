import Logo from "../../assets/brand/logo.svg";

import "./style.css";

const Component = ({ title, day, month, year, hour, franchise }) => {
	let brand =
		franchise === undefined || franchise === "mitos-y-leyendas"
			? "nagasaki"
			: franchise;

	return (
		<div className="event">
			{brand !== "nagasaki" && (
				<>
					<img
						src={require(`../../assets/franchises/${brand}/background.png`)}
						alt={`${brand} background`}
					/>
					<img
						src={require(`../../assets/franchises/${brand}/logo.png`)}
						alt={`${brand} logo`}
					/>
					<img
						src={require(`../../assets/franchises/${brand}/character.png`)}
						alt=""
					/>
				</>
			)}
			{brand === "nagasaki" && (
				<>
					<img src="" alt="Placeholder" />
					<img src={Logo} alt="Naga-Saki Hobby Store's logo" />
					<img
						src={require(`../../assets/brand/mascot.png`)}
						alt="Naga-Saki Hobby Store's mascot"
					/>
				</>
			)}
			<h1>{title}</h1>
			<p>
				{day} de {month} del {year} - {hour}
			</p>
		</div>
	);
};

export default Component;
