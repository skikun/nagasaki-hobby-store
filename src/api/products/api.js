import { GET } from "./endpoints";
import { CONFIG } from "./config";

const PRODUCTS = {
	get: async (id) => {
		const response = await (
			await fetch(id ? `${GET}/${id}` : GET, {
				...CONFIG,
			})
		).json();
		return response;
	},
};

export default PRODUCTS;
