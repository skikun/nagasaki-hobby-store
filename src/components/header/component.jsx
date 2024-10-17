import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import NESTED from "../../routes/overview/nested-routes";

import Brand from "./assets/simple.svg";

import Lens from "../../assets/icons/lens.svg";
import Shop from "../../assets/icons/shop.svg";
import ShoppingCart from "../../assets/icons/shopping-cart.svg";

import "./style.css";

const Header = ({ open, onToggle, cart }) => {
	const navigate = useNavigate();

	const { pathname } = useLocation();

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
					({ key, path, label }) => {
						const pressed = pathname.includes(path).toString();
						return (
							<Link key={key} to={path} current={pressed}>
								{label}
							</Link>
						);
					}
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
				<button onClick={() => onToggle(!open)} open={open}>
					<img
						loading="lazy"
						src={ShoppingCart}
						alt="A shopping cart icon that opens the shopping cart at the side of the screen."
					/>
					{cart.length > 0 && <span>{cart.length}</span>}
				</button>
			</div>
		</header>
	);
};

export default Header;
