// src/scripts/map.ts
var isLoaded = false;
function loadMap() {
  const script = document.createElement("script");
  script.src = "https://api-maps.yandex.ru/v3/?apikey=5f83ec22-85a8-4723-a3ac-503a77f91a74&lang=ru_RU";
  document.body.appendChild(script);
  script.onload = function() {
    initMap();
  };
}
var coords = [39.331297, 43.911584];
var map = document.getElementById("map");
async function initMap() {
  await ymaps3?.ready;
  const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker } = ymaps3;
  const map2 = new YMap(document.getElementById("map"), {
    location: {
      center: coords,
      zoom: 15
    }
  });
  map2.addChild(new YMapDefaultSchemeLayer());
  map2.addChild(new YMapDefaultFeaturesLayer());
  const content = document.createElement("img");
  content.classList.add("contacts__map-point");
  const marker = new YMapMarker(
    {
      coordinates: coords,
      draggable: true
    },
    content
  );
  map2.addChild(marker);
}
var observerOptions = {
  // root: по умолчанию window, но можно задать любой элемент-контейнер
  rootMargin: "0px 0px 0px 0px"
};
var observer = new IntersectionObserver(([entry]) => {
  const targetInfo = entry.boundingClientRect;
  const rootBoundsInfo = entry.rootBounds;
  if (!isLoaded && targetInfo.top < rootBoundsInfo.bottom || targetInfo.isIntersecting) {
    loadMap();
    observer.unobserve(entry.target);
  }
}, observerOptions);
observer.observe(map);
//# sourceMappingURL=map.js.map
