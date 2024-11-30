import React from "react";
import { useNavigate } from "react-router-dom";

import BRANDS from "../../assets/franchises/exporter";

import "./style.css";

const BrandList = () => {
	const navigate = useNavigate();
	return BRANDS.map(({ key, route, character, logo, background }) => (
		<div key={key} className="brand" onClick={() => navigate(`./${route}`)}>
			<div>
				<img src={background} alt="Background" />
			</div>
			<img src={character} alt="Character" />
			<img src={logo} alt="Logo" />
		</div>
	));
};

export default BrandList;
