import { GET } from "./endpoints";
import { CONFIG } from "../config";

const EVENTS = {
	get: async (id) => {
		const response = await (
			await fetch(id ? `${GET}/${id}` : GET, {
				...CONFIG,
			})
		).json();
		return response;
	},
};

export default EVENTS;
