(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();async function c(e=1,s=12){const i=`https://sound-wave.b.goit.study/api/artists?page=${e}&limit=${s}`,o=await fetch(i);if(!o.ok)throw new Error(`HTTP error! status: ${o.status}`);return await o.json()}function u(e){return`
    <li class="artist-card">
      <img src="${e.image}" alt="${e.name}" class="artist-image" />
      <h3 class="artist-name">${e.name}</h3>
      <p class="artist-genre">${e.genre}</p>
    </li>
  `}const a=document.querySelector(".artists-list");async function l(e=1,s=12){try{const i=await c(e,s),{artists:o}=i;if(!Array.isArray(o))throw new Error("Невірна структура даних: artists не є масивом");d(o)}catch(i){console.error("Помилка при завантаженні артистів:",i.message)}}function d(e){a.innerHTML="";const s=e.map(u).join("");a.insertAdjacentHTML("beforeend",s)}l();
//# sourceMappingURL=index.js.map
