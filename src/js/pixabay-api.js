import axios from "axios";

const API_KEY = "50823959-4aaa76fee656d12ff3aaa5105";
const URL = "https://pixabay.com/api/";

export default async function getImagesByQuery(q, page) {
	return await axios.get(URL, {
		params: {
			key: API_KEY,
			q,
			image_type: 'photo',
			orientation: 'horizontal',
			safesearch: true,
			page,
			per_page: 15,
		},
	})
		.then(res => {
			return res.data;
		})
		.catch(error => {
			return [];
		})
}