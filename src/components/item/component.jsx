import React from "react";

const Item = ({ name, price }) => {
	return (
		<div>
			{name}-{price}
		</div>
	);
};

export default Item;
