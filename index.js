import{S,a as w,i as L}from"./assets/vendor-DcJMNLUH.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const n of l.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(r){if(r.ep)return;r.ep=!0;const l=s(r);fetch(r.href,l)}})();const h=document.querySelector(".gallery");let E=new S(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",animationSpeed:250,showCounter:!1});function b(e){h.insertAdjacentHTML("beforeend",M(e)),E.refresh()}function d(){h.innerHTML=""}function _(e){e.classList.remove("hidden")}function i(e){e.classList.add("hidden")}function M(e){return e.map(({webformatURL:t,largeImageURL:s,tags:o,likes:r,views:l,comments:n,downloads:p})=>t&&s&&o?`<li class="data_list_items">
				<a class="gallery_link" href="${s}">
					<img
						class="gallery_list_img"
						src="${t}" 
						alt="${o}"/>		
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
							<p class="gallery_list_attr_text">${n}</p>
						</li>
						<li class="gallery_list_attr_itm">
							<h3 class="gallery_list_attr_title">Downloads</h3>
							<p class="gallery_list_attr_text">${p}</p>
						</li>
					</ul>
				</a>
			</li>`:null).filter(t=>t!==null).join("")}function m(){let t=document.querySelector(".data_list_items").getBoundingClientRect().height*2;window.scrollBy({left:0,top:t,behavior:"smooth"})}const P="50823959-4aaa76fee656d12ff3aaa5105",q="https://pixabay.com/api/";async function O(e,t){return await w.get(q,{params:{key:P,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}}).then(s=>s.data).catch(s=>[])}const G="Sorry, there are no images matching your search query. Please, try again!",v="Sorry, there is error in your request. Please, try again later!",x="Sorry, there is error in your request. Please, try to write at least 2 letters!",R="Sorry, there is error in your request. Please, try to write not only digits!",T="Sorry, there is nothing to show more!",N=document.querySelector(".form"),$=document.querySelector(".input_delay"),a=document.querySelector(".btn_more"),u=document.querySelector(".loader_cont"),A="error.svg",D=15;let y=1,f=1;function c(e){L.show({id:"error",title:"Error",message:e,messageColor:"white",color:"#ef4040",position:"topCenter",iconUrl:A})}function C(e){return e.length<1?(c(x),!1):/^\d+$/.test(e)?(c(R),!1):!0}N.addEventListener("submit",async e=>{e.preventDefault(),y=1,await g()});async function g(){const e=$.value.trim();if(i(a),!!C(e)){_(u);try{const t=await O(e,y);if(t.hits.length===0){i(u),d(),c(G);return}d(),b(t.hits),i(u),f=Math.max(Math.floor(t.totalHits/D),1),a.disabled=!1,_(a),m(),y>=f&&(i(a),c(T))}catch{i(u),i(a),c(v)}}}a.addEventListener("click",async e=>{y++,a.disabled=!0,await g(),m()});
//# sourceMappingURL=index.js.map
