import { GET } from "./endpoints";
import { CONFIG } from "../config";

const CATEGORIES = {
	search: async ({ search }) => {
		const endpoint = `${GET}${search}`;

		const response = await fetch(endpoint, {
			...CONFIG,
		});

		const json = await response.json();
		const tag = json[0] ? json[0].id : "";

		return { tag };
	},
};

export default CATEGORIES;
