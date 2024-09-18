let isLoaded = false;

function loadMap() {
	const script = document.createElement('script');
	script.src = 'https://api-maps.yandex.ru/v3/?apikey=5f83ec22-85a8-4723-a3ac-503a77f91a74&lang=ru_RU';
	document.body.appendChild(script);
	script.onload = function () {
		initMap();
		isLoaded = true;
		// if (typeof ymaps3 === 'undefined') return;
		// ymaps3.ready(initMap);
	};
}

const coords = [39.331297, 43.911584];
const map = document.getElementById('map');

async function initMap() {
	await ymaps3?.ready;
	const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker, YMapControls } = ymaps3;

	const { YMapZoomControl } = await ymaps3.import('@yandex/ymaps3-controls@0.0.1');

	const map = new YMap(document.getElementById('map'), {
		location: {
			center: coords,
			zoom: 14,
		},
	});
	// Добавьте слой с дорогами и зданиями
	map.addChild(new YMapDefaultSchemeLayer());
	// Добавьте слой для маркеров
	map.addChild(new YMapDefaultFeaturesLayer());
	const content = document.createElement('div');
	const img = document.createElement('img');
	content.classList.add('map-contacts__point');
	img.src = 'assets/images/icons/pin.svg';
	content.appendChild(img);
	// Инициализируйте маркер
	const marker = new YMapMarker(
		{
			coordinates: coords,
			draggable: true,
		},
		content
	);
	map.addChild(marker);
	if (window.innerWidth < 1024) {
		map.setBehaviors(['multiTouch', 'dblClickZoom', 'rightMouseButtonMagnifier', 'pinchZoom', 'dblClick', 'magnifier']);

		const mapLayout = document.getElementById('map');
		if (mapLayout) {
			let pane = document.createElement('div');
			pane.innerHTML = 'Чтобы переместить карту проведите по ней двумя пальцами';
			pane.style.cssText =
				'height: 100%; width: 100%; position: absolute; top: 0px; left: 0px; z-index: 3; color: #fff; font-size: 22px; font-family: Arial, sans-serif; display: flex; align-items: center; justify-content: center; text-align: center; background-color: rgba(0,0,0,0.45); opacity: 0; transition: opacity 0.45s; padding: 25px; box-sizing: border-box;';
			mapLayout.append(pane);
			mapLayout.addEventListener('touchmove', function (e) {
				let touches = e.touches.length;
				if (touches > 1) {
					// Если точек касания больше одной
					pane.style.opacity = '0';
					pane.style.pointerEvents = 'none';
					mapLayout.querySelector('.ymaps3x0--map').classList.remove('not-touch');
					map.setBehaviors([
						'drag',
						'multiTouch',
						'dblClickZoom',
						'rightMouseButtonMagnifier',
						'pinchZoom',
						'dblClick',
						'magnifier',
					]);
				} else {
					pane.style.opacity = '1';
					pane.style.pointerEvents = '';
					mapLayout.querySelector('.ymaps3x0--map').classList.add('not-touch');
					map.setBehaviors(['multiTouch', 'dblClickZoom', 'rightMouseButtonMagnifier', 'pinchZoom', 'dblClick', 'magnifier']);
				}
			});

			mapLayout.addEventListener('touchend', () => {
				pane.style.opacity = '0';
			});
		}
	} else {
		map.addChild(new YMapControls({ position: 'right' }).addChild(new YMapZoomControl({})));
	}
}

let observerOptions = {
	// root: по умолчанию window, но можно задать любой элемент-контейнер
	rootMargin: '0px 0px 0px 0px',
};
let observer = new IntersectionObserver(([entry]) => {
	const targetInfo = entry.boundingClientRect;
	const rootBoundsInfo = entry.rootBounds;
	if ((!isLoaded && targetInfo.top < rootBoundsInfo.bottom) || targetInfo.isIntersecting) {
		loadMap();
		observer.unobserve(entry.target);
	}
}, observerOptions);
observer.observe(map);
