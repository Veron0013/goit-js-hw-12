import axios from "axios";

const API_KEY = "50823959-4aaa76fee656d12ff3aaa5105";
const URL = "https://pixabay.com/api/";


export const params = {
	"key": API_KEY,
	"q": "",
	"image_type": "photo",
	"orientation": "horizontal",
	"safesearch": "true",
	"per_page": "15",
	"page": "1"
};

export async function getImagesByQuery(qParams) {
	//console.log(URL, qParams);
	const queryString = new URLSearchParams(qParams).toString();

	return await axios(`${URL}?${queryString}`)
		.then(res => {
			return res.data.hits;
		})
		.catch(error => {
			return [];
		})
}