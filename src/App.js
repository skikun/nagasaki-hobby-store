import React from "react";
import { Routes, Route } from "react-router-dom";

import NESTED from "./routes/overview/nested-routes";

import NotFound from "./routes/not-found/view";
import Overview from "./routes/overview/view";
import Checkout from "./routes/checkout/view";
import Events from "./routes/events/view";
import Product from "./routes/overview/product/view";

function App() {
	console.log(
		"This site was powered by Andrés Mora! Take a look at my socials down below:\nGithub:   https://github.com/skikun\nLinkedIn: https://www.linkedin.com/in/andrés-ui-ux-frontend\nUpWork:   https://www.upwork.com/freelancers/~01f21d6ccafdca1314\nBlueSky:  @skikun.bsky.social\nDiscord:  skikun"
	);

	return (
		<Routes>
			<Route path="/" element={<Overview />}>
				{NESTED.map(({ key, path, element }) => (
					<Route key={key} exact path={path} element={element} />
				))}
				<Route path="p/:id" element={<Product />} />
				<Route path="events" element={<Events />} />
				<Route path="checkout" element={<Checkout />} />
			</Route>
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}

export default App;
