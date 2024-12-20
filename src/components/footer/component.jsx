import React from "react";
import { Link, useLocation } from "react-router-dom";

import NESTED from "../../routes/overview/nested-routes";

import HarenaEstudiosLogo from "../../assets/harena-estudios/logo.svg";

import Instagram from "../../assets/social-media/instagram/colored.svg";
import Facebook from "../../assets/social-media/facebook/colored.svg";
import WhatsApp from "../../assets/social-media/whatsapp/colored.svg";

import Mascot from "../../assets/brand/mascot.png";
import Brand from "../../assets/brand/simple.svg";

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
			<div>
				<div>
					<img src={Brand} alt="Nagasaki Hobby Store's Logo" />
					<p>Todos los derechos reservados. | Nagasaki Hobby Store © 2024</p>
					<a
						href="https://maps.app.goo.gl/DdP783MxZvzFAx4N6"
						target="_blank"
						rel="noreferrer"
					>
						Carrera 26A #12 - 10, Local 101 - Bucaramanga, Santander
					</a>
				</div>
				<div>
					Diseñado por
					<img src={HarenaEstudiosLogo} alt="Harena Estudios's brand logo" />
				</div>
			</div>
		</footer>
	);
};

export default Footer;
