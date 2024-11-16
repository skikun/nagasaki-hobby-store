import * as HTML from "../../utils/HTML";

import "./style.css";

const Component = ({ title, description, day, month, year, hour }) => {
	return (
		<div className="event">
			<h1>{title}</h1>
			{HTML.render(description)}
			<p>
				{day} de {month} del {year} - {hour}
			</p>
		</div>
	);
};

export default Component;
