import { GET, GET_BY_ID } from "./endpoints";
import { CONFIG } from "../config";

const PRODUCTS = {
	getById: async ({ id }) => {
		const response = await fetch(`${GET_BY_ID}/${id}`, {
			...CONFIG,
		});

		const product = await response.json()[0];

		return { product };
	},
	get: async ({ page, search }) => {
		const endpoint = search
			? `${GET}${page}&search=${search}`
			: `${GET}${page}`;

		const response = await fetch(endpoint, {
			...CONFIG,
		});

		const totalPages = response.headers.get("X-WP-TotalPages");
		const products = await response.json();

		return { products, totalPages };
	},
};

export default PRODUCTS;
