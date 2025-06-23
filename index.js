import{S,a as w,i as E}from"./assets/vendor-DcJMNLUH.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function l(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=l(t);fetch(t.href,s)}})();const _=document.querySelector(".gallery");let L=new S(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",animationSpeed:250,showCounter:!1});function O(e){_.insertAdjacentHTML("beforeend",b(e)),L.refresh()}function f(){_.innerHTML=""}function h(e){e.classList.remove("hidden")}function n(e){e.classList.add("hidden")}function b(e){return e.map(({webformatURL:r,largeImageURL:l,tags:i,likes:t,views:s,comments:o,downloads:p})=>r&&l&&i?`<li class="data_list_items">
				<a class="gallery_link" href="${l}">
					<img
						class="gallery_list_img"
						src="${r}" 
						alt="${i}"/>		
					<ul class="gallery_list_attr">
						<li class="gallery_list_attr_itm">
							<h3 class="gallery_list_attr_title">Likes</h3>
							<p class="gallery_list_attr_text">${t}</p>
						</li>
						<li class="gallery_list_attr_itm">
							<h3 class="gallery_list_attr_title">Views</h3>
							<p class="gallery_list_attr_text">${s}</p>
						</li>
						<li class="gallery_list_attr_itm">
							<h3 class="gallery_list_attr_title">Comments</h3>
							<p class="gallery_list_attr_text">${o}</p>
						</li>
						<li class="gallery_list_attr_itm">
							<h3 class="gallery_list_attr_title">Downloads</h3>
							<p class="gallery_list_attr_text">${p}</p>
						</li>
					</ul>
				</a>
			</li>`:null).filter(r=>r!==null).join("")}function M(){let r=document.querySelector(".data_list_items").getBoundingClientRect().height;window.scrollBy({left:0,top:r*2,behavior:"smooth"})}const P="50823959-4aaa76fee656d12ff3aaa5105",q="https://pixabay.com/api/";async function v(e,r){return await w.get(q,{params:{key:P,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}}).then(l=>l.data).catch(l=>[])}const G="Sorry, there are no images matching your search query. Please, try again!",x="Sorry, there is error in your request. Please, try again later!",R="Sorry, there is error in your request. Please, try to write at least 2 letters!",T="Sorry, there is error in your request. Please, try to write not only digits!",N="Sorry, there is nothing to show more!",$=document.querySelector(".form"),D=document.querySelector(".input_delay"),a=document.querySelector(".btn_more"),y=document.querySelector(".loader_cont"),A="error.svg",C=15;let c=1,m=1;function u(e){E.show({id:"error",title:"Error",message:e,messageColor:"white",color:"#ef4040",position:"topCenter",iconUrl:A})}function I(e){return e.length<1?(u(R),!1):/^\d+$/.test(e)?(u(T),!1):!0}$.addEventListener("submit",async e=>{e.preventDefault(),c=1,f(),await g()});async function g(){const e=D.value.trim();if(n(a),!!I(e)){h(y);try{const r=await v(e,c);if(r.hits.length===0){d(G);return}H(r),c>=m&&(n(a),u(N))}catch{d(x)}}}a.addEventListener("click",async e=>{c++,a.disabled=!0,await g(),M()});function H(e){O(e.hits),n(y),m=Math.max(Math.floor(e.totalHits/C),1),h(a),a.disabled=!1}function d(e){f(),n(y),n(a),u(e)}
//# sourceMappingURL=index.js.map
