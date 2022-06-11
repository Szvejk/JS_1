import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js';

const firstSlider = {
    ally: true,
	autoplay: {
		delay: 3000,
	},
    // freeMode: true,
    lazy:true,
    loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	scrollbar: {
		el: '.swiper-scrollbar',
	},
};
new Swiper('.swiper-container-first', firstSlider);
