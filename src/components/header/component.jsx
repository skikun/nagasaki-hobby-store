import React from "react";
import { Link } from "react-router-dom";

import NESTED from "../../routes/overview/nested-routes";

import Lens from "../../assets/icons/lens.svg";
import Shop from "../../assets/icons/shop.svg";
import ShoppingCart from "../../assets/icons/shopping-cart.svg";

import "./style.css";

const Header = () => {
	return (
		<header>
			<img src="" alt="" />
			<nav>
				{NESTED.filter(({ path }) => path !== "/").map(
					({ path, key, label }) => (
						<Link to={path}>{label}</Link>
					)
				)}
			</nav>
			<div>
				<button>
					<img src={Lens} alt="A lens icon that enables a search bar." />
				</button>
				<button>
					<img src={Shop} alt="A shop icon that redirects to the store." />
				</button>
				<button>
					<img
						src={ShoppingCart}
						alt="A shopping cart icon that redirects to the shopping cart."
					/>
				</button>
			</div>
		</header>
	);
};

export default Header;
