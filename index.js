import{S as p,a as S,i as w}from"./assets/vendor-DcJMNLUH.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function l(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=l(t);fetch(t.href,s)}})();const f=document.querySelector(".gallery");let E=new p(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",animationSpeed:250,showCounter:!1});function L(e){f.insertAdjacentHTML("beforeend",b(e)),E.refresh()}function O(){f.innerHTML=""}function h(e){e.classList.remove("hidden")}function n(e){e.classList.add("hidden")}function b(e){return e.map(({webformatURL:r,largeImageURL:l,tags:a,likes:t,views:s,comments:o,downloads:g})=>r&&l&&a?`<li class="data_list_items">
				<a class="gallery_link" href="${l}">
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
							<p class="gallery_list_attr_text">${s}</p>
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
			</li>`:null).filter(r=>r!==null).join("")}const M="50823959-4aaa76fee656d12ff3aaa5105",P="https://pixabay.com/api/";async function q(e,r){return await S.get(P,{params:{key:M,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}}).then(l=>l.data).catch(l=>[])}const v="Sorry, there are no images matching your search query. Please, try again!",G="Sorry, there is error in your request. Please, try again later!",x="Sorry, there is error in your request. Please, try to write at least 2 letters!",R="Sorry, there is error in your request. Please, try to write not only digits!",T="Sorry, there is nothing to show more!",N=document.querySelector(".form"),$=document.querySelector(".input_delay"),i=document.querySelector(".btn_more"),y=document.querySelector(".loader_cont"),D="error.svg",A=15;let u=1,d=1;function c(e){w.show({id:"error",title:"Error",message:e,messageColor:"white",color:"#ef4040",position:"topCenter",iconUrl:D})}function C(e){return e.length<1?(c(x),!1):/^\d+$/.test(e)?(c(R),!1):!0}N.addEventListener("submit",async e=>{e.preventDefault(),u=1,O(),await m()});async function m(){const e=$.value.trim();if(n(i),!!C(e)){h(y);try{const r=await q(e,u);if(r.hits.length===0){_(v);return}I(r)}catch{_(G)}}}i.addEventListener("click",async e=>{u++,i.disabled=!0,await m(),H()});function I(e){L(e.hits),n(y),d=Math.max(Math.ceil(e.totalHits/A),1),u>=d?(n(i),c(T)):(h(i),i.disabled=!1)}function _(e){n(y),c(e)}function H(){let r=document.querySelector(".data_list_items").getBoundingClientRect().height;window.scrollBy({left:0,top:r*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
