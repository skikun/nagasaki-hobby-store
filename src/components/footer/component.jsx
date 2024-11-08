import React from "react";
import { Link } from "react-router-dom";

import NESTED from "../../routes/overview/nested-routes";

import Instagram from "../../assets/social-media/instagram/colored.svg";
import Facebook from "../../assets/social-media/facebook/colored.svg";
import WhatsApp from "../../assets/social-media/whatsapp/colored.svg";

import "./style.css";

const Footer = () => {
	return (
		<footer>
			<div>
				<ul>
					<li>
						<h6>Información</h6>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut.
					</li>
					<li>
						<h6>Preguntas frecuentes</h6>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut.
					</li>
					<li>
						<h6>Contáctanos</h6>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut.
					</li>
					<li></li>
				</ul>
			</div>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut.
			</p>
			<nav>
				<div>
					{NESTED.filter(({ path }) => path !== "/").map(
						({ key, path, label }) => (
							<Link key={key} to={path}>
								{label}
							</Link>
						)
					)}
				</div>
				<div>
					<a href="https://www.instagram.com/nagasaki_hobby_store/">
						<img loading="lazy" src={Instagram} alt="Instagram logo" />
					</a>
					<a href="https://facebook.com/NagasakiHobbyStore/">
						<img loading="lazy" src={Facebook} alt="Facebook logo" />
					</a>
					<a href="https://wa.me/573134431709">
						<img loading="lazy" src={WhatsApp} alt="WhatsApp logo" />
					</a>
				</div>
			</nav>
		</footer>
	);
};

export default Footer;
