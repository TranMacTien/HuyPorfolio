import $ from 'jquery';

export default class HeaderEvent {
	constructor() {
		this.menuBtn = $('.menu-btn');
		this.navMobile = $('.nav-mobile');
		this.closeBtn = $('.nav__close');
		this.overlay = $('.overlay');
		this.logo = $('.logo');
		this.handleEvent();
	}
	getScreenWidth() {
		this.scrWidth = $(window).width();
		return this.scrWidth;
	}
	handleEvent() {
		this.menuBtnEvent();
		this.menuCloseEvent();
		this.handleLogo();
	}

	menuBtnEvent() {
		this.menuBtn.on('click', () => {
			this.navMobile.addClass('active');
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
}