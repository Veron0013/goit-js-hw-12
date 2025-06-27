import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

//import * as apiTools from "./js/pixabay-api.js";
import * as renderTools from "./js/render-functions.js";

import getImagesByQuery from "./js/pixabay-api.js";

const MSG_NO_DATA = "Sorry, there are no images matching your search query. Please, try again!";
const MSG_ERROR = "Sorry, there is error in your request. Please, try again later!";
const MSG_ERROR_LENGTH = "Sorry, there is error in your request. Please, try to write at least 1 letter!";
const MSG_ERROR_DIGITS = "Sorry, there is error in your request. Please, try to write not only digits!";
const MSG_END_CONTENT = "Sorry, there is nothing to show more!";

const searchForm = document.querySelector(".form");
//const searchField = document.querySelector(".input_delay");
const btnLoadMore = document.querySelector(".btn_more");
const loader = document.querySelector(".loader_cont");

const iconPath = 'error.svg';

const per_page = 15;

let page = 1;
let totalQueryPages = 1;

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

searchForm.addEventListener("submit", async (e) => {
	//console.log("search");
	e.preventDefault();

	page = 1;
	renderTools.clearGallery();
	const searchData = e.currentTarget.elements['search-text'].value.trim();
	await handleApiData(searchData);
});

btnLoadMore.addEventListener("click", async (e) => {
	page++;

	btnLoadMore.disabled = true;
	const searchData = searchForm.elements['search-text'].value.trim();
	await handleApiData(searchData);
	//console.log("render");
	setScrollHeight();
})

async function handleApiData(searchData) {
	//const searchData = searchField.value.trim();

	renderTools.hideViewElement(btnLoadMore);
	renderTools.showViewElement(loader);

	if (!checkValidate(searchData)) {
		renderTools.hideViewElement(loader);
		return;
	}

	try {
		const dataArray = await getImagesByQuery(searchData, page);

		if (dataArray.hits.length === 0) {
			//renderTools.hideViewElement(btnLoadMore);
			toastText(MSG_NO_DATA);
			return;
		}
		eventOnSuccess(dataArray);

	} catch (error) {
		toastText(MSG_ERROR);
	} finally {
		renderTools.hideViewElement(loader);
		if (page < totalQueryPages) {
			btnLoadMore.disabled = false;
		}
	}
}

function eventOnSuccess(dataArray) {

	renderTools.createGallery(dataArray.hits);
	//renderTools.hideViewElement(loader);

	totalQueryPages = Math.max(Math.ceil(dataArray.totalHits / per_page), 1);
	//console.log(page, per_page, totalQueryPages);
	if (page >= totalQueryPages) {
		renderTools.hideViewElement(btnLoadMore);
		toastText(MSG_END_CONTENT);
	} else {
		renderTools.showViewElement(btnLoadMore);
	}
}

function setScrollHeight() {

	const listItem = document.querySelector('.gallery').firstElementChild;
	let scrollSpeed = listItem.getBoundingClientRect().height;

	window.scrollBy({
		left: 0,
		top: scrollSpeed * 2,
		behavior: "smooth"
	});
}


