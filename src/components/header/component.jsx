import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import NESTED from "../../routes/overview/nested-routes";

import Brand from "../../assets/brand/simple.svg";

import Calendar from "../../assets/icons/calendar.svg";
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
				<button
					onClick={() => navigate("events")}
					title="Calendario de eventos"
					open={pathname === "/events"}
				>
					<img
						loading="lazy"
						src={Calendar}
						alt="A shop icon that redirects to the store."
					/>
				</button>
				<button
					onClick={() => onToggle(!open)}
					open={open}
					title="Carrito de compras"
				>
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
