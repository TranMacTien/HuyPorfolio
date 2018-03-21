import $ from 'jquery';

export default class HeaderEvent {
	constructor() {
		this.menuBtn = $('.menu-btn');
		this.navMobile = $('.nav-mobile');
		this.closeBtn = $('.nav__close');
		this.overlay = $('.overlay');
		this.logo = $('.logo');
		this.heightNav = !$('.logo').hasClass('.fixed') ? $('.logo').height(): 0;
		this.handleEvent();
	}
	getScreenWidth() {
		return $(window).width();
	}
	handleEvent() {
		this.menuBtnEvent();
		this.menuCloseEvent();
		this.handleLogo();
		this.navbarEvent();
	}

	menuBtnEvent() {
		this.menuBtn.on('click', () => {
			this.navMobile.addClass('active');
			$('.nav-mobile .nav__item').addClass('menuFadeIn');
			this.overlay.addClass('active');
		})
	}
	menuCloseEvent() {
		this.closeBtn.on('click', () => {
			this.closeSideBar();
		})
		this.overlay.on('click', () => {
			this.closeSideBar();
		})
	}
	closeSideBar() {
		this.navMobile.removeClass('active');
		this.overlay.removeClass('active');
		$('.nav-mobile .nav__item').removeClass('menuFadeIn');
	}
	handleLogo() {
		$(window).on('scroll', () => {
			if($(window).scrollTop() > 300 && !this.logo.hasClass('fixed')) {
				this.logo.addClass('fixed');
			} else if($(window).scrollTop() <= 300) {
				this.logo.removeClass('fixed');
			}
		})
	}
	navbarEvent() {
		this.navbarItem = $('.nav__item');
		this.navbarItem.on('click', (e) => {
			e.preventDefault();
			const _this = $(e.target);
			const scrollAnchor = _this.attr('data-scroll');
			if(scrollAnchor === 'home') {
				$('html, body').animate({
					scrollTop: 0
				}, 600);
			} else {
				$('html, body').animate({
					scrollTop: $(`#${scrollAnchor}`).offset().top - this.heightNav
				}, 600, () => {
					this.closeSideBar();
				});
			}
		})
	}
}