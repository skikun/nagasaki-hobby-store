import { GET } from "./endpoints";
import { CONFIG } from "./config";

const PRODUCTS = {
	get: async () => {
		const response = await (
			await fetch(GET, {
				...CONFIG,
			})
		).json();
		return response;
	},
};

export default PRODUCTS;
