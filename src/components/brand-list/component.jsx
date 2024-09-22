import React from "react";

import brands from "../../assets/brands/exporter";

const BrandList = () => {
	return brands.map(({ key, label, character, logo }) => (
		<div key={key}>
			<img src={logo} alt={label} />
			<img src={character} alt={label} />
			<h2>{label}</h2>
		</div>
	));
};

export default BrandList;
