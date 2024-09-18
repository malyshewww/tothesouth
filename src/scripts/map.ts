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
// const map = document.getElementById('map');

async function initMap() {
	await ymaps3?.ready;

	const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker, YMapControls } = ymaps3;

	const { YMapZoomControl } = await ymaps3.import('@yandex/ymaps3-controls@0.0.1');
	const map = new YMap(document.getElementById('map'), {
		location: {
			center: coords,
			zoom: 15,
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
	map.addChild(new YMapControls({ position: 'right' }).addChild(new YMapZoomControl({})));
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
