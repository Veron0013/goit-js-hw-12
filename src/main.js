import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import * as apiTools from "./js/pixabay-api.js"
import * as renderTools from "./js/render-functions.js"

const iconPath = '/img/error.svg';

const MSG_NO_DATA = "Sorry, there are no images matching your search query. Please, try again!";
const MSG_ERROR = "Sorry, there is error in your request. Please, try again later!";
const MSG_ERROR_LENGTH = "Sorry, there is error in your request. Please, try to write more than 3 letters!";
const MSG_ERROR_DIGITS = "Sorry, there is error in your request. Please, try to write not only digits!";

const searchForm = document.querySelector(".form");
const searchField = document.querySelector(".input_delay");

function toastText(message) {
	iziToast.show({
		id: 'error',
		title: 'Error',
		message: message,
		messageColor: 'white',
		color: '#ef4040',
		position: 'topCenter'
		//iconUrl: iconPath,
	});
}

function checkValidate(searchData) {
	if (searchData.length < 3) {
		toastText(MSG_ERROR_LENGTH);
		return false;
	} else if (/^\d+$/.test(searchData)) {
		toastText(MSG_ERROR_DIGITS);
		return false;
	}
	return true;
}

searchForm.addEventListener("submit", (event) => {

	event.preventDefault();
	const searchData = searchField.value.trim();

	if (!checkValidate(searchData)) {
		return;
	}
	renderTools.showLoader();

	apiTools.params.q = searchData;

	apiTools.getImagesByQuery(apiTools.params)
		.then(dataArray => {
			if (dataArray.length === 0) {
				renderTools.hideLoader();
				renderTools.clearGallery();
				toastText(MSG_NO_DATA);
				return;
			}
			renderTools.createGallery(dataArray);
			renderTools.hideLoader();
		})
		.catch((e) => {
			renderTools.hideLoader();
			renderTools.clearGallery();
			toastText(MSG_ERROR)
		})
		.finally(() => {
			renderTools.hideLoader();
		})
});


