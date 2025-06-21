import{S as w,a as L,i as E}from"./assets/vendor-DcJMNLUH.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(r){if(r.ep)return;r.ep=!0;const l=s(r);fetch(r.href,l)}})();const m=document.querySelector(".gallery");let b=new w(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",animationSpeed:250,showCounter:!1});function M(e){m.insertAdjacentHTML("beforeend",O(e)),b.refresh()}function f(){m.innerHTML=""}function h(e){e.classList.remove("hidden")}function i(e){e.classList.add("hidden")}function O(e){return e.map(({webformatURL:t,largeImageURL:s,tags:n,likes:r,views:l,comments:c,downloads:S})=>t&&s&&n?`<li class="data_list_items">
				<a class="gallery_link" href="${s}">
					<img
						class="gallery_list_img"
						src="${t}" 
						alt="${n}"/>		
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
							<p class="gallery_list_attr_text">${c}</p>
						</li>
						<li class="gallery_list_attr_itm">
							<h3 class="gallery_list_attr_title">Downloads</h3>
							<p class="gallery_list_attr_text">${S}</p>
						</li>
					</ul>
				</a>
			</li>`:null).filter(t=>t!==null).join("")}function g(){let t=document.querySelector(".data_list_items").getBoundingClientRect().height*2;window.scrollBy({left:0,top:t,behavior:"smooth"})}const P="50823959-4aaa76fee656d12ff3aaa5105",q="https://pixabay.com/api/";async function G(e,t){return await L.get(q,{params:{key:P,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}}).then(s=>s.data).catch(s=>[])}const v="Sorry, there are no images matching your search query. Please, try again!",y="Sorry, there is error in your request. Please, try again later!",x="Sorry, there is error in your request. Please, try to write not only digits!",R="Sorry, there is nothing to show more!",T=document.querySelector(".form"),N=document.querySelector(".input_delay"),o=document.querySelector(".btn_more"),u=document.querySelector(".loader_cont"),$="error.svg",D=15;let d=1,_=0;function a(e){E.show({id:"error",title:"Error",message:e,messageColor:"white",color:"#ef4040",position:"topCenter",iconUrl:$})}function C(e){return e.length<1?(a(MSG_ERROR_LENGTH),!1):/^\d+$/.test(e)?(a(x),!1):!0}T.addEventListener("submit",e=>{console.log("search"),e.preventDefault(),d=1,f(),p()});function p(){const e=N.value.trim();if(C(e)){h(u);try{G(e,d).then(t=>{if(t.hits.length===0){i(u),f(),a(v);return}M(t.hits),i(u),_=Math.max(Math.floor(t.totalHits/D),1),d>=_?(i(o),a(R)):d<=_&&h(o),g()}).catch(t=>{i(u),i(o),f(),a(y)}).finally(()=>{i(u),o.disabled=!1})}catch{a(y)}}}o.addEventListener("click",e=>{d++,o.disabled=!0,p(),g()});
//# sourceMappingURL=index.js.map
