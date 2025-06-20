import{a as P,S as b,i as $}from"./assets/vendor-Bg_GrDtl.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(r){if(r.ep)return;r.ep=!0;const l=s(r);fetch(r.href,l)}})();const E="50823959-4aaa76fee656d12ff3aaa5105",m="https://pixabay.com/api/",n={key:E,q:"",image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:"15",page:"1"};async function M(e){const t=new URLSearchParams(e).toString();return console.log(`${m}?${t}`),await P(`${m}?${t}`).then(s=>s.data).catch(s=>[])}const S=document.querySelector(".gallery");let O=new b(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",animationSpeed:250,showCounter:!1});function R(e){S.insertAdjacentHTML("beforeend",v(e)),O.refresh()}function g(){S.innerHTML=""}function p(e){e.classList.remove("hidden")}function c(e){e.classList.add("hidden")}function v(e){return e.map(({webformatURL:t,largeImageURL:s,tags:a,likes:r,views:l,comments:i,downloads:q})=>t&&s&&a?`<li class="data_list_items">
				<a class="gallery_link" href="${s}">
					<img
						class="gallery_list_img"
						src="${t}" 
						alt="${a}"/>		
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
							<p class="gallery_list_attr_text">${i}</p>
						</li>
						<li class="gallery_list_attr_itm">
							<h3 class="gallery_list_attr_title">Downloads</h3>
							<p class="gallery_list_attr_text">${q}</p>
						</li>
					</ul>
				</a>
			</li>`:null).filter(t=>t!==null).join("")}function w(){let t=document.querySelector(".data_list_items").getBoundingClientRect().height*2;window.scrollBy({left:0,top:t*3,behavior:"smooth"}),console.log("scroll",t)}const G="Sorry, there are no images matching your search query. Please, try again!",_="Sorry, there is error in your request. Please, try again later!",x="Sorry, there is error in your request. Please, try to write more than 3 letters!",T="Sorry, there is error in your request. Please, try to write not only digits!",D=document.querySelector(".form"),I=document.querySelector(".input_delay"),d=document.querySelector(".btn_more"),u=document.querySelector(".loader_cont"),C="error.svg",f=15;let y=1,h=0;function o(e){$.show({id:"error",title:"Error",message:e,messageColor:"white",color:"#ef4040",position:"topCenter",iconUrl:C})}function H(e){return e.length<3?(o(x),!1):/^\d+$/.test(e)?(o(T),!1):!0}D.addEventListener("submit",async e=>{console.log("search"),e.preventDefault(),g();try{await L()}catch{o(_)}});async function L(){const e=I.value.trim();if(H(e)){p(u),n.q=e,n.page=y,n.per_page=f,console.log(n);try{M(n).then(t=>{if(t.hits.length===0){c(u),g(),o(G);return}R(t.hits),c(u),h=Math.floor(t.totalHits/f),console.log(y,f,h),d.disabled=!1,y>=h?c(d):y<=h&&p(d),w()}).catch(t=>{c(u),g(),o(_)}).finally(()=>{c(u)})}catch{o(_)}}}d.addEventListener("click",async e=>{d.disabled=!0,y++;try{await L(),w()}catch{o(_)}});
//# sourceMappingURL=index.js.map
