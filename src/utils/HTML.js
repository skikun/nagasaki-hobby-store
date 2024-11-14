import DOMPurify from "dompurify";

function sanitizeHtml(htmlString) {
	return DOMPurify.sanitize(htmlString);
}

export function render(htmlString) {
	const sanitizedHtml = sanitizeHtml(htmlString);
	return <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />;
}
