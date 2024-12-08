import { GET } from "./endpoints";
import { CONFIG } from "../config";

const PRODUCTS = {
	get: async (id, page) => {
		const response = await fetch(
			id ? `${GET}/${id}` : `${GET}?page=${page}&per_page=100`,
			{
				...CONFIG,
			}
		);

		const pages = response.headers.get("X-WP-TotalPages");

		const products = await response.json();

		return { products, pages };
	},
};

export default PRODUCTS;
