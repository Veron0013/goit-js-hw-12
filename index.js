import{S,a as w,i as E}from"./assets/vendor-DcJMNLUH.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const l of t)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const l={};return t.integrity&&(l.integrity=t.integrity),t.referrerPolicy&&(l.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?l.credentials="include":t.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(t){if(t.ep)return;t.ep=!0;const l=s(t);fetch(t.href,l)}})();const _=document.querySelector(".gallery");let L=new S(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",animationSpeed:250,showCounter:!1});function O(e){_.insertAdjacentHTML("beforeend",b(e)),console.log(e),L.refresh()}function f(){_.innerHTML=""}function h(e){e.classList.remove("hidden")}function c(e){e.classList.add("hidden")}function b(e){return e.map(({webformatURL:r,largeImageURL:s,tags:a,likes:t,views:l,comments:i,downloads:p})=>r&&s&&a?`<li class="data_list_items">
				<a class="gallery_link" href="${s}">
					<img
						class="gallery_list_img"
						src="${r}" 
						alt="${a}"/>		
					<ul class="gallery_list_attr">
						<li class="gallery_list_attr_itm">
							<h3 class="gallery_list_attr_title">Likes</h3>
							<p class="gallery_list_attr_text">${t}</p>
						</li>
						<li class="gallery_list_attr_itm">
							<h3 class="gallery_list_attr_title">Views</h3>
							<p class="gallery_list_attr_text">${l}</p>
						</li>
						<li class="gallery_list_attr_itm">
							<h3 class="gallery_list_attr_title">Comments</h3>
							<p class="gallery_list_attr_text">${i}</p>
						</li>
						<li class="gallery_list_attr_itm">
							<h3 class="gallery_list_attr_title">Downloads</h3>
							<p class="gallery_list_attr_text">${p}</p>
						</li>
					</ul>
				</a>
			</li>`:null).filter(r=>r!==null).join("")}function M(){const e=document.querySelector(".data_list_items");let r=e.getBoundingClientRect().height*2;console.log("scroll"),e.scrollBy({left:0,top:r,behavior:"smooth"})}const P="50823959-4aaa76fee656d12ff3aaa5105",q="https://pixabay.com/api/";async function v(e,r){return await w.get(q,{params:{key:P,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}}).then(s=>s.data).catch(s=>[])}const G="Sorry, there are no images matching your search query. Please, try again!",x="Sorry, there is error in your request. Please, try again later!",R="Sorry, there is error in your request. Please, try to write at least 2 letters!",T="Sorry, there is error in your request. Please, try to write not only digits!",N="Sorry, there is nothing to show more!",$=document.querySelector(".form"),D=document.querySelector(".input_delay"),o=document.querySelector(".btn_more"),y=document.querySelector(".loader_cont"),A="error.svg",C=15;let n=1,g=1;function u(e){E.show({id:"error",title:"Error",message:e,messageColor:"white",color:"#ef4040",position:"topCenter",iconUrl:A})}function H(e){return e.length<1?(u(R),!1):/^\d+$/.test(e)?(u(T),!1):!0}$.addEventListener("submit",async e=>{e.preventDefault(),n=1,f(),await m()});async function m(){const e=D.value.trim();if(c(o),!!H(e)){h(y);try{const r=await v(e,n);if(console.log(e,n),r.hits.length===0){d(G);return}I(r),n>=g&&(c(o),u(N))}catch{d(x)}}}o.addEventListener("click",async e=>{n++,o.disabled=!0,await m(),console.log("render"),M()});function I(e){O(e.hits),c(y),g=Math.max(Math.floor(e.totalHits/C),1),h(o),o.disabled=!1}function d(e){f(),c(y),c(o),u(e)}
//# sourceMappingURL=index.js.map
