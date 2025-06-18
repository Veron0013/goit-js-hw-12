import{a as h,S as m,i as g}from"./assets/vendor-Bg_GrDtl.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const l of e)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const l={};return e.integrity&&(l.integrity=e.integrity),e.referrerPolicy&&(l.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?l.credentials="include":e.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(e){if(e.ep)return;e.ep=!0;const l=s(e);fetch(e.href,l)}})();const p="https://pixabay.com/api/",c={q:""};async function S(t){const r=new URLSearchParams(t).toString();return await h(`${p}?${r}`).then(s=>s.data.hits).catch(s=>[])}const _=document.querySelector(".gallery"),d=document.querySelector(".loader_cont");let L=new m(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",animationSpeed:250,showCounter:!1});function q(t){_.innerHTML=P(t),L.refresh()}function u(){_.innerHTML=""}function w(){d.classList.remove("hidden")}function n(){d.classList.add("hidden")}function P(t){return t.map(({webformatURL:r,largeImageURL:s,tags:i,likes:e,views:l,comments:a,downloads:f})=>r&&s&&i?`<li class="data_list_items">
				<a class="gallery_link" href="${s}">
					<img
						class="gallery_list_img"
						src="${r}" 
						alt="${i}"/>		
					<ul class="gallery_list_attr">
						<li class="gallery_list_attr_itm">
							<h3 class="gallery_list_attr_title">Likes</h3>
							<p class="gallery_list_attr_text">${e}</p>
						</li>
						<li class="gallery_list_attr_itm">
							<h3 class="gallery_list_attr_title">Views</h3>
							<p class="gallery_list_attr_text">${l}</p>
						</li>
						<li class="gallery_list_attr_itm">
							<h3 class="gallery_list_attr_title">Comments</h3>
							<p class="gallery_list_attr_text">${a}</p>
						</li>
						<li class="gallery_list_attr_itm">
							<h3 class="gallery_list_attr_title">Downloads</h3>
							<p class="gallery_list_attr_text">${f}</p>
						</li>
					</ul>
				</a>
			</li>`:null).filter(r=>r!==null).join("")}const O="Sorry, there are no images matching your search query. Please, try again!",y="Sorry, there is error in your request. Please, try again later!",$="Sorry, there is error in your request. Please, try to write more than 3 letters!",G="Sorry, there is error in your request. Please, try to write not only digits!",R=document.querySelector(".form"),x=document.querySelector(".input_delay"),M="./img/error.svg";function o(t){g.show({id:"error",title:"Error",message:t,messageColor:"white",color:"#ef4040",position:"topCenter",iconUrl:M})}function v(t){return t.length<3?(o($),!1):/^\d+$/.test(t)?(o(G),!1):!0}R.addEventListener("submit",t=>{t.preventDefault();const r=x.value.trim();if(v(r)){w(),c.q=r;try{S(c).then(s=>{if(s.length===0){n(),u(),o(O);return}q(s),n()}).catch(s=>{n(),u(),o(y)}).finally(()=>{n()})}catch{o(y)}}});
//# sourceMappingURL=index.js.map
