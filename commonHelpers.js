import{S as N,a as T,i as j}from"./assets/vendor-5401a4b0.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function h(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=h(t);fetch(t.href,o)}})();document.addEventListener("DOMContentLoaded",()=>{const g=document.querySelector(".search-form"),r=document.querySelector("#gallery-o"),h=document.querySelector(".loader"),i=document.querySelector(".load-more-btn"),t=document.querySelector(".load-more-loader"),o=document.querySelector(".end-of-collection");b();const c=new N(".gallery-o a",{captionDelay:250});g.addEventListener("submit",P);let u=1,L="";async function P(e){e.preventDefault(),B(),u=1,L=g.querySelector(".input-search").value;try{const n=await $(L,u);q(n.hits),u++,Math.ceil(n.totalHits/15)>1&&m()}catch(n){E(n)}finally{b()}}async function $(e,n){const d="https://pixabay.com/api/",l=`?key=42296578-21d0e9ca438ad812aa67579cd&q=${e}&page=${n}`,f="&image_type=photo&orientation=horizontal&safesearch=true&per_page=15",p=d+l+f;try{const s=(await T.get(p)).data;if(!s||s.total===0||!s.hits||s.hits.length===0)throw new Error("No images found");const k=Math.ceil(s.totalHits/15);return n>=k?(w(),M()):(m(),O()),s}catch(a){throw new Error(a.response?a.response.data.message:a.message)}}function w(){i.hidden=!0}function q(e){const n=e.map(({largeImageURL:d,webformatURL:y,tags:l,likes:f,views:p,comments:a,downloads:s})=>`
        <div class="gallery">
            <a href="${d}">
            <img src="${y}" alt="${l}" title="${l}" width="400" height="240" />
            <ul class="info-cards-container">
                <li class="info-cards-elements">likes<span>${f}</span></li>
                <li class="info-cards-elements">views<span>${p}</span></li>
                <li class="info-cards-elements">comments<span>${a}</span></li>
                <li class="info-cards-elements">downloads<span>${s}</span></li>
            </ul>
            </a>
        </div>
        `).join("");r.innerHTML=n,c.refresh(),e.length<15?w():m()}function E(e){r.innerHTML="",j.show({message:`❌ "${e.message}". Please try again!`,color:"red",position:"topRight",maxWidth:"400px"})}function B(){h.style.display="block"}function b(){h.style.display="none"}function m(){C(!0)}i.addEventListener("click",async()=>{H();try{const e=await $(L,u);e.totalHits===0?(w(),M()):x(e.hits)}catch(e){E(e)}finally{u++,S()}});function x(e){const n=e.map(({largeImageURL:d,webformatURL:y,tags:l,likes:f,views:p,comments:a,downloads:s})=>`
                    <div class="gallery">
                        <a href="${d}">
                            <img src="${y}" alt="${l}" title="${l}" width="380" height="220" />
                            <ul class="info-cards-container">
                                <li class="info-cards-elements">likes<span>${f}</span></li>
                                <li class="info-cards-elements">views<span>${p}</span></li>
                                <li class="info-cards-elements">comments<span>${a}</span></li>
                                <li class="info-cards-elements">downloads<span>${s}</span></li>
                            </ul>
                        </a>
                    </div>
                `).join("");r.insertAdjacentHTML("beforeend",n),c.refresh(),S()}function C(e){i.hidden=!e}function H(){v(!0)}function S(){v(!1)}function v(e){t.style.display=e?"block":"none"}function M(){o.style.display="block"}function O(){o.style.display="none"}});
//# sourceMappingURL=commonHelpers.js.map
