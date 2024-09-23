import React from "react";

import BRANDS from "../../assets/brands/exporter";

import "./style.css";

const BrandList = () => {
	return BRANDS.map(({ key, label, character, logo, background }) => (
		<div key={key} className="brand">
			<div>
				<img src={background} alt="Background" />
			</div>
			<img src={character} alt="Character" />
			<img src={logo} alt="Logo" />
		</div>
	));
};

export default BrandList;
