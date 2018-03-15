import $ from 'jquery';
import slick from 'slick-carousel';
import 'slick-carousel/slick/slick.css';

export default class SlickCarousel {
	constructor(el) {
		$(el).slick({
			dots: true,
			arrow: true
		});
	}
}