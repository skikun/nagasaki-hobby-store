import React from "react";
import { useNavigate } from "react-router-dom";

import FRANCHISES from "../../assets/franchises/exporter";

import "./style.css";

const Component = () => {
	const navigate = useNavigate();
	return (
		<div className="categories">
			{FRANCHISES.map(({ key, route, character, logo, background }) => (
				<div key={key} className="brand" onClick={() => navigate(`./${route}`)}>
					<div>
						<img src={background} alt="Background" />
					</div>
					<img src={character} alt="Character" />
					<img src={logo} alt="Logo" />
				</div>
			))}
		</div>
	);
};

export default Component;
