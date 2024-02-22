import{S as N,a as T,i as j}from"./assets/vendor-5401a4b0.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function m(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=m(t);fetch(t.href,o)}})();document.addEventListener("DOMContentLoaded",()=>{const y=document.querySelector(".search-form"),a=document.querySelector("#gallery-o"),m=document.querySelector(".loader"),i=document.querySelector(".load-more-btn"),t=document.querySelector(".load-more-loader"),o=document.querySelector(".end-of-collection");b();const c=new N(".gallery-o a",{captionDelay:250});y.addEventListener("submit",q);let d=1,g="";async function q(e){e.preventDefault(),B(),d=1,g=y.querySelector(".input-search").value;try{const n=await M(g,d);P(n.hits),d++}catch(n){E(n)}finally{b()}}async function M(e,n){const u="https://pixabay.com/api/",l=`?key=42296578-21d0e9ca438ad812aa67579cd&q=${e}&page=${n}`,f="&image_type=photo&orientation=horizontal&safesearch=true&per_page=15",p=u+l+f;try{const s=(await T.get(p)).data;if(!s||s.total===0||!s.hits||s.hits.length===0)throw new Error("No images found");const H=Math.ceil(s.totalHits/15);return n>=H?($(),w()):(L(),O()),s}catch(r){throw new Error(r.response?r.response.data.message:r.message)}}function $(){i.hidden=!0}function P(e){const n=e.map(({largeImageURL:u,webformatURL:h,tags:l,likes:f,views:p,comments:r,downloads:s})=>`
        <div class="gallery">
            <a href="${u}">
            <img src="${h}" alt="${l}" title="${l}" width="400" height="240" />
            <ul class="info-cards-container">
                <li class="info-cards-elements">likes<span>${f}</span></li>
                <li class="info-cards-elements">views<span>${p}</span></li>
                <li class="info-cards-elements">comments<span>${r}</span></li>
                <li class="info-cards-elements">downloads<span>${s}</span></li>
            </ul>
            </a>
        </div>
        `).join("");a.innerHTML=n,c.refresh(),L()}function E(e){a.innerHTML="",j.show({message:`❌ "${e.message}". Please try again!`,color:"red",position:"topRight",maxWidth:"400px"})}function B(){m.style.display="block"}function b(){m.style.display="none"}function L(){C(!0)}i.addEventListener("click",async()=>{k();try{const e=await M(g,d+1);e.totalHits===0?($(),w()):(x(e.hits),d++)}catch(e){E(e)}finally{S()}});function x(e){const n=e.map(({largeImageURL:u,webformatURL:h,tags:l,likes:f,views:p,comments:r,downloads:s})=>`
                    <div class="gallery">
                        <a href="${u}">
                            <img src="${h}" alt="${l}" title="${l}" width="380" height="220" />
                            <ul class="info-cards-container">
                                <li class="info-cards-elements">likes<span>${f}</span></li>
                                <li class="info-cards-elements">views<span>${p}</span></li>
                                <li class="info-cards-elements">comments<span>${r}</span></li>
                                <li class="info-cards-elements">downloads<span>${s}</span></li>
                            </ul>
                        </a>
                    </div>
                `).join("");a.insertAdjacentHTML("beforeend",n),c.refresh(),S()}function C(e){i.hidden=!e}function k(){v(!0)}function S(){v(!1)}function v(e){t.style.display=e?"block":"none"}function w(){o.style.display="block"}function O(){o.style.display="none"}});
//# sourceMappingURL=commonHelpers.js.map
