import{a as b,S as P,i as $}from"./assets/vendor-Bg_GrDtl.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(r){if(r.ep)return;r.ep=!0;const l=s(r);fetch(r.href,l)}})();const m="https://pixabay.com/api/",d={q:"",per_page:"15",page:"1"};async function E(e){const t=new URLSearchParams(e).toString();return console.log(`${m}?${t}`),await b(`${m}?${t}`).then(s=>s.data).catch(s=>[])}const S=document.querySelector(".gallery");let M=new P(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",animationSpeed:250,showCounter:!1});function O(e){S.insertAdjacentHTML("beforeend",R(e)),M.refresh()}function g(){S.innerHTML=""}function p(e){e.classList.remove("hidden")}function n(e){e.classList.add("hidden")}function R(e){return e.map(({webformatURL:t,largeImageURL:s,tags:i,likes:r,views:l,comments:a,downloads:q})=>t&&s&&i?`<li class="data_list_items">
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
							<p class="gallery_list_attr_text">${a}</p>
						</li>
						<li class="gallery_list_attr_itm">
							<h3 class="gallery_list_attr_title">Downloads</h3>
							<p class="gallery_list_attr_text">${q}</p>
						</li>
					</ul>
				</a>
			</li>`:null).filter(t=>t!==null).join("")}function w(){let t=document.querySelector(".data_list_items").getBoundingClientRect().height*2;window.scrollBy({left:0,top:t*3,behavior:"smooth"}),console.log("scroll",t)}const v="Sorry, there are no images matching your search query. Please, try again!",h="Sorry, there is error in your request. Please, try again later!",G="Sorry, there is error in your request. Please, try to write more than 3 letters!",x="Sorry, there is error in your request. Please, try to write not only digits!",T=document.querySelector(".form"),D=document.querySelector(".input_delay"),y=document.querySelector(".btn_more"),c=document.querySelector(".loader_cont"),C="error.svg",f=15;let u=1,_=0;function o(e){$.show({id:"error",title:"Error",message:e,messageColor:"white",color:"#ef4040",position:"topCenter",iconUrl:C})}function H(e){return e.length<3?(o(G),!1):/^\d+$/.test(e)?(o(x),!1):!0}T.addEventListener("submit",async e=>{console.log("search"),e.preventDefault(),g();try{await L()}catch{o(h)}});async function L(){const e=D.value.trim();if(H(e)){p(c),d.q=e,d.page=u,d.per_page=f;try{E(d).then(t=>{if(t.hits.length===0){n(c),g(),o(v);return}O(t.hits),n(c),_=Math.floor(t.totalHits/f),console.log(u,f,_),y.disabled=!1,u>=_?n(y):u<=_&&p(y),w()}).catch(t=>{n(c),g(),o(h)}).finally(()=>{n(c)})}catch{o(h)}}}y.addEventListener("click",async e=>{y.disabled=!0,u++;try{await L(),w()}catch{o(h)}});
//# sourceMappingURL=index.js.map
