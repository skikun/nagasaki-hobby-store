import { GET, GET_BY_ID } from "./endpoints";
import { CONFIG } from "../config";

const PRODUCTS = {
	getById: async ({ id }) => {
		const response = await fetch(`${GET_BY_ID}${id}`, {
			...CONFIG,
		});

		const data = await response.json();

		return { data };
	},
	get: async ({ page, search, tag }) => {
		const endpoint =
			search && tag
				? `${GET}${page}&category=${tag}&search=${search}`
				: search && !tag
				? `${GET}${page}&search=${search}`
				: !search && tag
				? `${GET}${page}&category=${tag}`
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
