import{S as p,a as S,i as w}from"./assets/vendor-DcJMNLUH.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(r){if(r.ep)return;r.ep=!0;const l=s(r);fetch(r.href,l)}})();const f=document.querySelector(".gallery");let E=new p(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",animationSpeed:250,showCounter:!1});function L(e){f.insertAdjacentHTML("beforeend",M(e)),E.refresh()}function b(){f.innerHTML=""}function h(e){e.classList.remove("hidden")}function u(e){e.classList.add("hidden")}function M(e){return e.map(({webformatURL:t,largeImageURL:s,tags:i,likes:r,views:l,comments:o,downloads:g})=>t&&s&&i?`<li class="data_list_items">
				<a class="gallery_link" href="${s}">
					<img
						class="gallery_list_img"
						src="${t}" 
						alt="${i}"/>		
					<ul class="gallery_list_attr">
						<li class="gallery_list_attr_itm">
							<h3 class="gallery_list_attr_title">Likes</h3>
							<p class="gallery_list_attr_text">${r}</p>
						</li>
						<li class="gallery_list_attr_itm">
							<h3 class="gallery_list_attr_title">Views</h3>
							<p class="gallery_list_attr_text">${l}</p>
						</li>
						<li class="gallery_list_attr_itm">
							<h3 class="gallery_list_attr_title">Comments</h3>
							<p class="gallery_list_attr_text">${o}</p>
						</li>
						<li class="gallery_list_attr_itm">
							<h3 class="gallery_list_attr_title">Downloads</h3>
							<p class="gallery_list_attr_text">${g}</p>
						</li>
					</ul>
				</a>
			</li>`:null).filter(t=>t!==null).join("")}const O="50823959-4aaa76fee656d12ff3aaa5105",P="https://pixabay.com/api/";async function v(e,t){return await S.get(P,{params:{key:O,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}}).then(s=>s.data).catch(s=>[])}const x="Sorry, there are no images matching your search query. Please, try again!",q="Sorry, there is error in your request. Please, try again later!",G="Sorry, there is error in your request. Please, try to write at least 1 letter!",T="Sorry, there is error in your request. Please, try to write not only digits!",R="Sorry, there is nothing to show more!",_=document.querySelector(".form"),a=document.querySelector(".btn_more"),y=document.querySelector(".loader_cont"),N="error.svg",$=15;let n=1,d=1;function c(e){w.show({id:"error",title:"Error",message:e,messageColor:"white",color:"#ef4040",position:"topCenter",iconUrl:N})}function C(e){return e.length<1?(c(G),!1):/^\d+$/.test(e)?(c(T),!1):!0}_.addEventListener("submit",async e=>{e.preventDefault(),n=1,b();const t=e.currentTarget.elements["search-text"].value.trim();await m(t)});a.addEventListener("click",async e=>{n++,a.disabled=!0;const t=_.elements["search-text"].value.trim();await m(t),A()});async function m(e){if(u(a),h(y),!C(e)){u(y);return}try{const t=await v(e,n);if(t.hits.length===0){c(x);return}D(t)}catch{c(q)}finally{u(y),n<d&&(a.disabled=!1)}}function D(e){L(e.hits),d=Math.max(Math.ceil(e.totalHits/$),1),n>=d?(u(a),c(R)):h(a)}function A(){let t=document.querySelector(".gallery").firstElementChild.getBoundingClientRect().height;window.scrollBy({left:0,top:t*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
