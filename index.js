import{S as w,a as L,i as b}from"./assets/vendor-DcJMNLUH.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const n of l.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(r){if(r.ep)return;r.ep=!0;const l=s(r);fetch(r.href,l)}})();const m=document.querySelector(".gallery");let E=new w(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",animationSpeed:250,showCounter:!1});function M(e){m.insertAdjacentHTML("beforeend",P(e)),E.refresh()}function _(){m.innerHTML=""}function y(e){e.classList.remove("hidden")}function i(e){e.classList.add("hidden")}function P(e){return e.map(({webformatURL:t,largeImageURL:s,tags:a,likes:r,views:l,comments:n,downloads:S})=>t&&s&&a?`<li class="data_list_items">
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
							<p class="gallery_list_attr_text">${n}</p>
						</li>
						<li class="gallery_list_attr_itm">
							<h3 class="gallery_list_attr_title">Downloads</h3>
							<p class="gallery_list_attr_text">${S}</p>
						</li>
					</ul>
				</a>
			</li>`:null).filter(t=>t!==null).join("")}function g(){let t=document.querySelector(".data_list_items").getBoundingClientRect().height*2;window.scrollBy({left:0,top:t,behavior:"smooth"})}const q="50823959-4aaa76fee656d12ff3aaa5105",O="https://pixabay.com/api/";async function v(e,t){return await L.get(O,{params:{key:q,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}}).then(s=>s.data).catch(s=>[])}const x="Sorry, there are no images matching your search query. Please, try again!",f="Sorry, there is error in your request. Please, try again later!",D="Sorry, there is error in your request. Please, try to write not only digits!",G="Sorry, there is nothing to show more!",T=document.querySelector(".form"),$=document.querySelector(".input_delay"),o=document.querySelector(".btn_more"),c=document.querySelector(".loader_cont"),N="error.svg",C=15;let d=1,h=0;function u(e){b.show({id:"error",title:"Error",message:e,messageColor:"white",color:"#ef4040",position:"topCenter",iconUrl:N})}function I(e){return/^\d+$/.test(e)?(u(D),!1):!0}T.addEventListener("submit",e=>{console.log("search"),e.preventDefault(),d=1,_(),p()});function p(){const e=$.value.trim();if(I(e)){y(c);try{v(e,d).then(t=>{if(t.hits.length===0){i(c),_(),u(x);return}M(t.hits),i(c),h=Math.max(Math.floor(t.totalHits/C),1),d>=h?(i(o),u(G)):d<=h&&y(o),g()}).catch(t=>{i(c),i(o),_(),u(f)}).finally(()=>{i(c),o.disabled=!1})}catch{u(f)}}}o.addEventListener("click",e=>{d++,o.disabled=!0,p(),g()});
//# sourceMappingURL=index.js.map
