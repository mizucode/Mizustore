var swiper = new Swiper(".test", {
	slidesPerView: 1,
	spaceBetween: 1,
	loop: false,
	cssMode: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	pagination: {
		el: ".swiper-pagination",
	},
	mousewheel: true,
	keyboard: true,
});
