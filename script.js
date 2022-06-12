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
	breakpoints: {
		1025: {
			slidesPerView: 2,
			spaceBetween: 10
		},
		1300: {
			slidesPerView: 2,
			spaceBetween: 5
		}
	}
};
new Swiper('.swiper-container-first', firstSlider);
