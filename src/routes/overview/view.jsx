import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "../../components/header/component";
import Footer from "../../components/footer/component";
import Cart from "../../components/cart/component";

const Overview = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<Header open={open} onChange={(value) => setOpen(value)} />
			<div>
				<Outlet />
				<Footer />
				<Cart open={open} onChange={(value) => setOpen(value)} />
			</div>
		</>
	);
};

export default Overview;
