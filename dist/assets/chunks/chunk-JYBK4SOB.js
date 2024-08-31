// src/scripts/modules/map-popup.ts
var isLoaded = false;
function loadMap() {
  const script = document.createElement("script");
  script.src = "https://api-maps.yandex.ru/v3/?apikey=5f83ec22-85a8-4723-a3ac-503a77f91a74&lang=ru_RU";
  document.body.appendChild(script);
  script.onload = function() {
    initMap();
    isLoaded = true;
  };
}
var coords = [39.331297, 43.911584];
var map = document.getElementById("map-popup");
async function initMap() {
  await ymaps3?.ready;
  const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker } = ymaps3;
  const map2 = new YMap(document.getElementById("map-popup"), {
    location: {
      center: coords,
      zoom: 15
    }
  });
  map2.addChild(new YMapDefaultSchemeLayer());
  map2.addChild(new YMapDefaultFeaturesLayer());
  const marker = new YMapMarker({
    coordinates: coords,
    draggable: true
  });
  map2.addChild(marker);
  if (window.innerWidth < 1024) {
    map2.setBehaviors(["multiTouch", "dblClickZoom", "rightMouseButtonMagnifier", "pinchZoom", "dblClick", "magnifier"]);
    const mapLayout = document.getElementById("map-popup");
    if (mapLayout) {
      let pane = document.createElement("div");
      pane.innerHTML = "Чтобы переместить карту проведите по ней двумя пальцами";
      pane.style.cssText = "height: 100%; width: 100%; position: absolute; top: 0px; left: 0px; z-index: 9; color: #fff; font-size: 22px; font-family: Arial, sans-serif; display: flex; align-items: center; justify-content: center; text-align: center; background-color: rgba(0,0,0,0.45); opacity: 0; transition: opacity 0.45s; padding: 25px; box-sizing: border-box;";
      mapLayout.append(pane);
      mapLayout.addEventListener("touchmove", function(e) {
        let touches = e.touches.length;
        if (touches > 1) {
          pane.style.opacity = "0";
          pane.style.pointerEvents = "none";
          mapLayout.querySelector(".ymaps3x0--map").classList.remove("not-touch");
          map2.setBehaviors([
            "drag",
            "multiTouch",
            "dblClickZoom",
            "rightMouseButtonMagnifier",
            "pinchZoom",
            "dblClick",
            "magnifier"
          ]);
        } else {
          pane.style.opacity = "1";
          pane.style.pointerEvents = "";
          mapLayout.querySelector(".ymaps3x0--map").classList.add("not-touch");
          map2.setBehaviors(["multiTouch", "dblClickZoom", "rightMouseButtonMagnifier", "pinchZoom", "dblClick", "magnifier"]);
        }
      });
      mapLayout.addEventListener("touchend", () => {
        pane.style.opacity = "0";
      });
    }
  } else {
    map2.addChild(new YMapControls({ position: "right" }).addChild(new YMapZoomControl({})));
  }
}

export {
  isLoaded,
  loadMap
};
//# sourceMappingURL=chunk-JYBK4SOB.js.map
