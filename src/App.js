import React from "react";
import { Routes, Route } from "react-router-dom";

import Overview from "./routes/overview/view";
import NESTED from "./routes/overview/nested-routes";

import NotFound from "./routes/not-found/view";
import Item from "./routes/item/view";
import ShoppingCart from "./routes/shopping-cart/view";
import Checkout from "./routes/checkout/view";

function App() {
	const MAIN_ROUTES = NESTED.map((route) => {
		return { ...route, key: crypto.randomUUID() };
	});
	return (
		<Routes>
			<Route path="/" element={<Overview />}>
				{MAIN_ROUTES.map(({ path, element, key }) => (
					<Route key={key} exact path={path} element={element} />
				))}
			</Route>
			<Route path="*" element={<NotFound />} />
			<Route path="/item" element={<Item />} />
			<Route path="/shopping-cart" element={<ShoppingCart />} />
			<Route path="/checkout" element={<Checkout />} />
		</Routes>
	);
}

export default App;
