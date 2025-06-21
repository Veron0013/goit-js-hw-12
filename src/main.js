import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

//import * as apiTools from "./js/pixabay-api.js";
import * as renderTools from "./js/render-functions.js";

import getImagesByQuery from "./js/pixabay-api.js";

const MSG_NO_DATA = "Sorry, there are no images matching your search query. Please, try again!";
const MSG_ERROR = "Sorry, there is error in your request. Please, try again later!";
//const MSG_ERROR_LENGTH = "Sorry, there is error in your request. Please, try to write more than 3 letters!";
const MSG_ERROR_DIGITS = "Sorry, there is error in your request. Please, try to write not only digits!";
const MSG_END_CONTENT = "Sorry, there is nothing to show more!";

const searchForm = document.querySelector(".form");
const searchField = document.querySelector(".input_delay");
const btnLoadMore = document.querySelector(".btn_more");
const loader = document.querySelector(".loader_cont");

const iconPath = 'error.svg';

const per_page = 15;

let page = 1;
let totalQueryPages = 0;

function toastText(message) {
	iziToast.show({
		id: 'error',
		title: 'Error',
		message: message,
		messageColor: 'white',
		color: '#ef4040',
		position: 'topCenter',
		iconUrl: iconPath,
	});
}

function checkValidate(searchData) {
	if (searchData.length < 1) {
		toastText(MSG_ERROR_LENGTH);
		return false;
	} else if (/^\d+$/.test(searchData)) {
		toastText(MSG_ERROR_DIGITS);
		return false;
	}
	return true;
}

searchForm.addEventListener("submit", (e) => {
	//console.log("search");
	e.preventDefault();

	page = 1;
	renderTools.clearGallery();
	handleApiData();
});

function handleApiData() {
	const searchData = searchField.value.trim();

	if (!checkValidate(searchData)) {
		return;
	}
	renderTools.showViewElement(loader);
	renderTools.hideViewElement(btnLoadMore);

	try {
		getImagesByQuery(searchData, page)
			.then(dataArray => {
				if (dataArray.hits.length === 0) {
					renderTools.hideViewElement(loader);
					renderTools.clearGallery();
					toastText(MSG_NO_DATA);
					return;
				}
				renderTools.createGallery(dataArray.hits);
				renderTools.hideViewElement(loader);
				totalQueryPages = Math.max(Math.floor(dataArray.totalHits / per_page), 1);
				//console.log(page, per_page, totalQueryPages);

				if (page >= totalQueryPages) {
					toastText(MSG_END_CONTENT);
				} else if (page <= totalQueryPages) {
					renderTools.showViewElement(btnLoadMore);
				}
				renderTools.setScrollHeight();
			})
			.catch((e) => {
				renderTools.hideViewElement(loader);
				renderTools.hideViewElement(btnLoadMore);
				renderTools.clearGallery();
				toastText(MSG_ERROR)
			})
			.finally(() => {
				renderTools.hideViewElement(loader);
				btnLoadMore.disabled = false;
			})
	} catch (error) {
		toastText(MSG_ERROR);
	}
}

btnLoadMore.addEventListener("click", (e) => {
	page++;

	btnLoadMore.disabled = true;
	handleApiData();
	renderTools.setScrollHeight();
})



