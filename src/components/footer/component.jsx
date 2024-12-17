import React from "react";
import { Link, useLocation } from "react-router-dom";

import NESTED from "../../routes/overview/nested-routes";

import HarenaEstudiosLogo from "../../assets/harena-estudios/logo.svg";

import Instagram from "../../assets/social-media/instagram/colored.svg";
import Facebook from "../../assets/social-media/facebook/colored.svg";
import WhatsApp from "../../assets/social-media/whatsapp/colored.svg";

import Mascot from "../../assets/brand/mascot.png";

import "./style.css";

const Footer = () => {
	const { pathname } = useLocation();

	return (
		<footer>
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
			{pathname !== "/" && (
				<img src={Mascot} alt="Nagasaki Hobby Store's Mascot" />
			)}
			<p>Todos los derechos reservados. | Nagasaki Hobby Store © 2024</p>
			<div>
				Diseñado por
				<img src={HarenaEstudiosLogo} alt="Harena Estudios's brand logo" />
			</div>
		</footer>
	);
};

export default Footer;
