import React from "react";
import { Link, useNavigate } from "react-router-dom";

import NESTED from "../../routes/overview/nested-routes";

import Brand from "./assets/simple.svg";

import Lens from "../../assets/icons/lens.svg";
import Shop from "../../assets/icons/shop.svg";
import ShoppingCart from "../../assets/icons/shopping-cart.svg";

import "./style.css";

const Header = () => {
	const navigate = useNavigate();
	return (
		<header>
			<img
				loading="lazy"
				src={Brand}
				alt="Brand logo"
				onClick={() => navigate("/")}
			/>
			<nav>
				{NESTED.filter(({ path }) => path !== "/").map(
					({ key, path, label }) => (
						<Link key={key} to={path}>
							{label}
						</Link>
					)
				)}
			</nav>
			<div>
				<button>
					<img
						loading="lazy"
						src={Lens}
						alt="A lens icon that enables a search bar."
					/>
				</button>
				<button>
					<img
						loading="lazy"
						src={Shop}
						alt="A shop icon that redirects to the store."
					/>
				</button>
				<button>
					<img
						loading="lazy"
						src={ShoppingCart}
						alt="A shopping cart icon that redirects to the shopping cart."
					/>
				</button>
			</div>
		</header>
	);
};

export default Header;
