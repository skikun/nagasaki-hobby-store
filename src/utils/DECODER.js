const parser = new DOMParser();

export function decode(str) {
	return parser.parseFromString(`<!doctype html><body>${str}`, "text/html").body
		.textContent;
}
