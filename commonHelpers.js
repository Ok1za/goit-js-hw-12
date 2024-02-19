import{S as O,a as P,i as x}from"./assets/vendor-5401a4b0.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function p(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=p(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",()=>{const h=document.querySelector(".search-form"),s=document.querySelector("#gallery-o"),p=document.querySelector(".loader"),a=document.querySelector(".load-more-btn"),e=document.querySelector(".load-more-loader");document.querySelector(".end-of-collection"),$();const t=new O(".gallery-o a",{captionDelay:250});h.addEventListener("submit",S);let n=1,y="";async function S(o){o.preventDefault(),E(),n=1,y=h.querySelector(".input-search").value;try{const r=await g(y,n);v(r.hits)}catch(r){L(r)}finally{$()}}function g(o,r){const d="https://pixabay.com/api/",i=`?key=42296578-21d0e9ca438ad812aa67579cd&q=${o}&page=${r}`,u="&image_type=photo&orientation=horizontal&safesearch=true&per_page=15",f=d+i+u;return P.get(f).then(l=>{const c=l.data;if(c.total===0)throw new Error("No images found");return c}).catch(l=>{throw new Error(l.response.data.message)})}function v(o){const r=o.map(({largeImageURL:d,webformatURL:m,tags:i,likes:u,views:f,comments:l,downloads:c})=>`
        <div class="gallery">
            <a href="${d}">
            <img src="${m}" alt="${i}" title="${i}" width="400" height="240" />
            <ul class="info-cards-container">
                <li class="info-cards-elements">likes<span>${u}</span></li>
                <li class="info-cards-elements">views<span>${f}</span></li>
                <li class="info-cards-elements">comments<span>${l}</span></li>
                <li class="info-cards-elements">downloads<span>${c}</span></li>
            </ul>
            </a>
        </div>
        `).join("");s.innerHTML=r,t.refresh(),b()}function L(o){s.innerHTML="",x.show({message:`❌ "${o.message}". Please try again!`,color:"red",position:"topRight",maxWidth:"400px"})}function E(){p.style.display="block"}function $(){p.style.display="none"}function b(){a.hidden=!1}a.addEventListener("click",async()=>{q();try{const o=await g(y,n+1);M(o.hits),n++}catch(o){L(o)}finally{w()}});function M(o){const r=o.map(({largeImageURL:d,webformatURL:m,tags:i,likes:u,views:f,comments:l,downloads:c})=>`
                    <div class="gallery">
                        <a href="${d}">
                            <img src="${m}" alt="${i}" title="${i}" width="380" height="220" />
                            <ul class="info-cards-container">
                                <li class="info-cards-elements">likes<span>${u}</span></li>
                                <li class="info-cards-elements">views<span>${f}</span></li>
                                <li class="info-cards-elements">comments<span>${l}</span></li>
                                <li class="info-cards-elements">downloads<span>${c}</span></li>
                            </ul>
                        </a>
                    </div>
                `).join("");s.insertAdjacentHTML("beforeend",r),t.refresh(),w()}function q(){e.style.display="block",a.hidden=!0}function w(){e.style.display="none",a.hidden=!1}});
//# sourceMappingURL=commonHelpers.js.map
