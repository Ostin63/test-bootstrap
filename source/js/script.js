/* eslint-disable no-undef */
// Инициализация слайдера

new Swiper('.swiper-container', {
  loop: true,
  navigation: {
    nextEl: '.reviews__control-button--next',
    prevEl: '.reviews__control-button--prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});

// Инициализация карты

const map = L.map('map-canvas')
  .setView({
    lat: 53.2183,
    lng: 44.9920,
  }, 15);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: 'img/pin-map.svg',
  iconSize: [56, 76],
  iconAnchor: [28, 76],
});

const mainPinMarker = L.marker(
  {
    lat: 53.2183,
    lng: 44.9890,
  },
  {
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);
