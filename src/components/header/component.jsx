import React from "react";
import { Link } from "react-router-dom";

import Shop from "../../assets/icons/shop.svg";
import ShoppingCart from "../../assets/icons/shopping-cart.svg";

import "./style.css";

const Header = () => {
	return (
		<header>
			<img src="" alt="" />
			<ul>
				<li>
					<Link to="/pokemon">Pokémon</Link>
				</li>
				<li>
					<Link to="/one-piece">One Piece</Link>
				</li>
				<li>
					<Link to="/digimon">Digimón</Link>
				</li>
				<li>
					<Link to="/yu-gi-oh">Yu-Gi-Oh!</Link>
				</li>
				<li>
					<Link to="/lore-cana">Lore Cana</Link>
				</li>
			</ul>
			<div>
				<img src={Shop} alt="A shop icon that redirects to the store." />
				<img
					src={ShoppingCart}
					alt="A shopping cart icon that redirects to the shopping cart."
				/>
			</div>
		</header>
	);
};

export default Header;
