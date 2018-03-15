import $ from 'jquery';

export default class HeaderEvent {
	constructor() {
		this.menuBtn = $('.menu-btn');
		this.navMobile = $('.nav-mobile');
		this.closeBtn = $('.nav__close');
		this.handleEvent();
	}
	handleEvent() {
		this.menuBtnEvent();
		this.menuCloseEvent();
	}

	menuBtnEvent() {
		this.menuBtn.on('click', () => {
			this.navMobile.addClass('active');
		})
	}
	menuCloseEvent() {
		this.closeBtn.on('click', () => {
			this.navMobile.removeClass('active');
		})
	}
}