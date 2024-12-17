import { GET } from "./endpoints";
import { CONFIG } from "../config";

const EVENTS = {
	get: async () => {
		const response = await fetch(GET, {
			...CONFIG,
		});

		const json = await response.json();

		const events = json.events;

		return { events };
	},
};

export default EVENTS;
