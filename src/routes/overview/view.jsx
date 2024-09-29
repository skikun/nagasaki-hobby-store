import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../../components/header/component";
import Footer from "../../components/footer/component";

const Overview = () => {
	return (
		<>
			<Header />
			<div>
				<Outlet />
				<Footer />
			</div>
		</>
	);
};

export default Overview;
