import{a as q,S as b,i as P}from"./assets/vendor-Bg_GrDtl.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function d(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(r){if(r.ep)return;r.ep=!0;const l=d(r);fetch(r.href,l)}})();const E="50823959-4aaa76fee656d12ff3aaa5105",M="https://pixabay.com/api/",i={key:E,q:"",image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:"15",page:"1"};async function O(e){return await q.get(M,{params:e}).then(t=>t.data).catch(t=>[])}const p=document.querySelector(".gallery");let v=new b(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",animationSpeed:250,showCounter:!1});function G(e){p.insertAdjacentHTML("beforeend",R(e)),v.refresh()}function g(){p.innerHTML=""}function m(e){e.classList.remove("hidden")}function n(e){e.classList.add("hidden")}function R(e){return e.map(({webformatURL:t,largeImageURL:d,tags:a,likes:r,views:l,comments:o,downloads:L})=>t&&d&&a?`<li class="data_list_items">
				<a class="gallery_link" href="${d}">
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
							<p class="gallery_list_attr_text">${o}</p>
						</li>
						<li class="gallery_list_attr_itm">
							<h3 class="gallery_list_attr_title">Downloads</h3>
							<p class="gallery_list_attr_text">${L}</p>
						</li>
					</ul>
				</a>
			</li>`:null).filter(t=>t!==null).join("")}function S(){let t=document.querySelector(".data_list_items").getBoundingClientRect().height*2;window.scrollBy({left:0,top:t,behavior:"smooth"})}const x="Sorry, there are no images matching your search query. Please, try again!",f="Sorry, there is error in your request. Please, try again later!",$="Sorry, there is error in your request. Please, try to write more than 3 letters!",T="Sorry, there is error in your request. Please, try to write not only digits!",D=document.querySelector(".form"),I=document.querySelector(".input_delay"),y=document.querySelector(".btn_more"),c=document.querySelector(".loader_cont"),C="error.svg",h=15;let u=1,_=0;function s(e){P.show({id:"error",title:"Error",message:e,messageColor:"white",color:"#ef4040",position:"topCenter",iconUrl:C})}function H(e){return e.length<3?(s($),!1):/^\d+$/.test(e)?(s(T),!1):!0}D.addEventListener("submit",async e=>{console.log("search"),e.preventDefault(),g();try{await w()}catch{s(f)}});async function w(){const e=I.value.trim();if(H(e)){m(c),i.q=e,i.page=u,i.per_page=h,console.log(i);try{O(i).then(t=>{if(t.hits.length===0){n(c),g(),s(x);return}G(t.hits),n(c),_=Math.floor(t.totalHits/h),console.log(u,h,_),y.disabled=!1,u>=_?n(y):u<=_&&m(y),S()}).catch(t=>{n(c),g(),s(f)}).finally(()=>{n(c)})}catch{s(f)}}}y.addEventListener("click",async e=>{y.disabled=!0,u++;try{await w(),S()}catch{s(f)}});
//# sourceMappingURL=index.js.map
