import { API_URL } from "../config";

const GET = `${API_URL}wp-json/wc/store/products?per_page=20&page=`;
const GET_BY_ID = `${API_URL}wp-json/wc/store/products/`;

export { GET, GET_BY_ID };
