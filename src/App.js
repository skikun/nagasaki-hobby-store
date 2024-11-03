import React from "react";
import { Routes, Route } from "react-router-dom";

import NESTED from "./routes/overview/nested-routes";

import NotFound from "./routes/not-found/view";
import Overview from "./routes/overview/view";
import Checkout from "./routes/checkout/view";
import Product from "./routes/overview/product/view";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Overview />}>
				{NESTED.map(({ key, path, element }) => (
					<Route key={key} exact path={path} element={element} />
				))}
				<Route path="p/:id" element={<Product />}></Route>
				<Route path="checkout" element={<Checkout />} />
			</Route>
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}

export default App;
