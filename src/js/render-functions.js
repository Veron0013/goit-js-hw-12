import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


const listView = document.querySelector(".gallery")
const loader = document.querySelector(".loader_cont");

let gallery = new SimpleLightbox('.gallery a', {
	captions: true,
	captionsData: 'alt',
	captionPosition: 'bottom',
	animationSpeed: 250,
	showCounter: false,
});


export function createGallery(images) {
	listView.innerHTML = createGalleryMark(images);
	gallery.refresh();
}

export function clearGallery() {
	listView.innerHTML = "";
}

export function showLoader() {
	loader.classList.remove("hidden");
}

export function hideLoader() {
	loader.classList.add("hidden");
}

function createGalleryMark(images) {
	return images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
		return webformatURL && largeImageURL && tags ?
			`<li class="data_list_items">
				<a class="gallery_link" href="${largeImageURL}">
					<img
						class="gallery_list_img"
						src="${webformatURL}" 
						alt="${tags}"/>		
					<ul class="gallery_list_attr">
						<li class="gallery_list_attr_itm">
							<h3 class="gallery_list_attr_title">Likes</h3>
							<p class="gallery_list_attr_text">${likes}</p>
						</li>
						<li class="gallery_list_attr_itm">
							<h3 class="gallery_list_attr_title">Views</h3>
							<p class="gallery_list_attr_text">${views}</p>
						</li>
						<li class="gallery_list_attr_itm">
							<h3 class="gallery_list_attr_title">Comments</h3>
							<p class="gallery_list_attr_text">${comments}</p>
						</li>
						<li class="gallery_list_attr_itm">
							<h3 class="gallery_list_attr_title">Downloads</h3>
							<p class="gallery_list_attr_text">${downloads}</p>
						</li>
					</ul>
				</a>
			</li>` : null;
	})
		.filter(el => el !== null)
		.join("");
}
