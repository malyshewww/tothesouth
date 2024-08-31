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
const map = document.getElementById('map-location');

async function initMap() {
	await ymaps3?.ready;

	const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker } = ymaps3;
	const map = new YMap(document.getElementById('map-location'), {
		location: {
			center: coords,
			zoom: 15,
		},
	});
	// Добавьте слой с дорогами и зданиями
	map.addChild(new YMapDefaultSchemeLayer());
	// Добавьте слой для маркеров
	map.addChild(new YMapDefaultFeaturesLayer());

	const content = document.createElement('img');
	content.classList.add('contacts__map-point');
	// content.src = '/images/icons/pin.svg';

	// Инициализируйте маркер
	const marker = new YMapMarker(
		{
			coordinates: coords,
			draggable: true,
		},
		content
	);
	map.addChild(marker);
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
