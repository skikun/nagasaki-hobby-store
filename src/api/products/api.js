import { GET } from "./endpoints";
import { CONFIG } from "./config";

const PRODUCTS = {
	get: async () => {
		const response = await (
			await fetch(GET, {
				...CONFIG,
			})
		).json();
		console.log(response);
		return response;
	},
};

export default PRODUCTS;
