var d=!1;function y(){let e=document.createElement("script");e.src="https://api-maps.yandex.ru/v3/?apikey=5f83ec22-85a8-4723-a3ac-503a77f91a74&lang=ru_RU",document.body.appendChild(e),e.onload=function(){b(),d=!0}}var r=[39.331297,43.911584],f=document.getElementById("map");async function b(){await ymaps3?.ready;let{YMap:e,YMapDefaultSchemeLayer:i,YMapDefaultFeaturesLayer:a,YMapMarker:p,YMapControls:m}=ymaps3,{YMapZoomControl:u}=await ymaps3.import("@yandex/ymaps3-controls@0.0.1"),o=new e(document.getElementById("map"),{location:{center:r,zoom:14}});o.addChild(new i),o.addChild(new a);let s=document.createElement("div"),c=document.createElement("img");s.classList.add("map-contacts__point"),c.src="assets/images/icons/pin.svg",s.appendChild(c);let g=new p({coordinates:r,draggable:!0},s);if(o.addChild(g),window.innerWidth<1024){o.setBehaviors(["multiTouch","dblClickZoom","rightMouseButtonMagnifier","pinchZoom","dblClick","magnifier"]);let n=document.getElementById("map");if(n){let t=document.createElement("div");t.innerHTML="Чтобы переместить карту проведите по ней двумя пальцами",t.style.cssText="height: 100%; width: 100%; position: absolute; top: 0px; left: 0px; z-index: 3; color: #fff; font-size: 22px; font-family: Arial, sans-serif; display: flex; align-items: center; justify-content: center; text-align: center; background-color: rgba(0,0,0,0.45); opacity: 0; transition: opacity 0.45s; padding: 25px; box-sizing: border-box;",n.append(t),n.addEventListener("touchmove",function(h){h.touches.length>1?(t.style.opacity="0",t.style.pointerEvents="none",n.querySelector(".ymaps3x0--map").classList.remove("not-touch"),o.setBehaviors(["drag","multiTouch","dblClickZoom","rightMouseButtonMagnifier","pinchZoom","dblClick","magnifier"])):(t.style.opacity="1",t.style.pointerEvents="",n.querySelector(".ymaps3x0--map").classList.add("not-touch"),o.setBehaviors(["multiTouch","dblClickZoom","rightMouseButtonMagnifier","pinchZoom","dblClick","magnifier"]))}),n.addEventListener("touchend",()=>{t.style.opacity="0"})}}else o.addChild(new m({position:"right"}).addChild(new u({})))}var v={rootMargin:"0px 0px 0px 0px"},l=new IntersectionObserver(([e])=>{let i=e.boundingClientRect,a=e.rootBounds;(!d&&i.top<a.bottom||i.isIntersecting)&&(y(),l.unobserve(e.target))},v);l.observe(f);
