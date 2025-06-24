import{S as g,a as p,i as S}from"./assets/vendor-DcJMNLUH.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(r){if(r.ep)return;r.ep=!0;const l=s(r);fetch(r.href,l)}})();const _=document.querySelector(".gallery");let w=new g(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",animationSpeed:250,showCounter:!1});function L(e){_.insertAdjacentHTML("beforeend",b(e)),w.refresh()}function E(){_.innerHTML=""}function f(e){e.classList.remove("hidden")}function u(e){e.classList.add("hidden")}function b(e){return e.map(({webformatURL:t,largeImageURL:s,tags:i,likes:r,views:l,comments:o,downloads:m})=>t&&s&&i?`<li class="data_list_items">
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
							<p class="gallery_list_attr_text">${m}</p>
						</li>
					</ul>
				</a>
			</li>`:null).filter(t=>t!==null).join("")}const M="50823959-4aaa76fee656d12ff3aaa5105",O="https://pixabay.com/api/";async function P(e,t){return await p.get(O,{params:{key:M,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}}).then(s=>s.data).catch(s=>[])}const q="Sorry, there are no images matching your search query. Please, try again!",v="Sorry, there is error in your request. Please, try again later!",x="Sorry, there is error in your request. Please, try to write at least 2 letters!",G="Sorry, there is error in your request. Please, try to write not only digits!",T="Sorry, there is nothing to show more!",R=document.querySelector(".form"),N=document.querySelector(".input_delay"),a=document.querySelector(".btn_more"),y=document.querySelector(".loader_cont"),$="error.svg",D=15;let c=1,d=1;function n(e){S.show({id:"error",title:"Error",message:e,messageColor:"white",color:"#ef4040",position:"topCenter",iconUrl:$})}function A(e){return e.length<1?(n(x),!1):/^\d+$/.test(e)?(n(G),!1):!0}R.addEventListener("submit",async e=>{e.preventDefault(),c=1,E();const t=e.currentTarget.elements["search-text"].value.trim();await h(t)});a.addEventListener("click",async e=>{c++,a.disabled=!0;const t=N.value.trim();await h(t),I()});async function h(e){if(u(a),f(y),!!A(e))try{const t=await P(e,c);if(t.hits.length===0){n(q);return}C(t)}catch{n(v)}finally{u(y),a.disabled=!1}}function C(e){L(e.hits),d=Math.max(Math.ceil(e.totalHits/D),1),c>=d?(u(a),n(T)):f(a)}function I(){let t=document.querySelector(".data_list_items").getBoundingClientRect().height;window.scrollBy({left:0,top:t*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
