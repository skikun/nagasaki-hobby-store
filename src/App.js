import React from "react";
import { Routes, Route } from "react-router-dom";

import NESTED from "./routes/overview/nested-routes";

import NotFound from "./routes/not-found/view";
import Overview from "./routes/overview/view";
import ShoppingCart from "./routes/shopping-cart/view";
import Product from "./routes/overview/product/view";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Overview />}>
				{NESTED.map(({ path, element, key }) => (
					<Route key={key} exact path={path} element={element} />
				))}
				<Route path="p/:id" element={<Product />}></Route>
				<Route path="cart" element={<ShoppingCart />} />
			</Route>
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}

export default App;
