import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import * as apiTools from "./js/pixabay-api.js"
import * as renderTools from "./js/render-functions.js"

const MSG_NO_DATA = "Sorry, there are no images matching your search query. Please, try again!";
const MSG_ERROR = "Sorry, there is error in your request. Please, try again later!";
const MSG_ERROR_LENGTH = "Sorry, there is error in your request. Please, try to write more than 3 letters!";
const MSG_ERROR_DIGITS = "Sorry, there is error in your request. Please, try to write not only digits!";

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
	if (searchData.length < 3) {
		toastText(MSG_ERROR_LENGTH);
		return false;
	} else if (/^\d+$/.test(searchData)) {
		toastText(MSG_ERROR_DIGITS);
		return false;
	}
	return true;
}

searchForm.addEventListener("submit", async (e) => {
	console.log("search");

	e.preventDefault();
	renderTools.clearGallery();
	try {
		await handleApiData();
	} catch (error) {
		toastText(MSG_ERROR);
	}
});

async function handleApiData() {
	const searchData = searchField.value.trim();

	if (!checkValidate(searchData)) {
		return;
	}
	renderTools.showViewElement(loader);

	apiTools.params.q = searchData;
	apiTools.params.page = page;
	apiTools.params.per_page = per_page;

	console.log(apiTools.params);


	try {
		apiTools.getImagesByQuery(apiTools.params)
			.then(dataArray => {
				if (dataArray.hits.length === 0) {
					renderTools.hideViewElement(loader);
					renderTools.clearGallery();
					toastText(MSG_NO_DATA);
					return;
				}
				renderTools.createGallery(dataArray.hits);
				renderTools.hideViewElement(loader);
				totalQueryPages = Math.floor(dataArray.totalHits / per_page);
				console.log(page, per_page, totalQueryPages);

				btnLoadMore.disabled = false;

				if (page >= totalQueryPages) {
					renderTools.hideViewElement(btnLoadMore);
				} else if (page <= totalQueryPages) {
					renderTools.showViewElement(btnLoadMore)
				}
				renderTools.setScrollHeight();
			})
			.catch((e) => {
				renderTools.hideViewElement(loader);
				renderTools.clearGallery();
				toastText(MSG_ERROR)
			})
			.finally(() => {
				renderTools.hideViewElement(loader);
			})
	} catch (error) {
		toastText(MSG_ERROR);
	}
}

btnLoadMore.addEventListener("click", async (e) => {
	btnLoadMore.disabled = true;
	page++;
	try {
		await handleApiData();
		renderTools.setScrollHeight();
	} catch (error) {
		toastText(MSG_ERROR);
	}
})



