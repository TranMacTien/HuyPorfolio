import $ from 'jquery';
import jQueryBridget from 'jquery-bridget';
import imagesLoaded from 'imagesloaded';
import Masonry from 'masonry-layout';
export default class MasonryLayout {
	constructor() {
		jQueryBridget( 'masonry', Masonry, $ );
		this.layout();
		$(window).on('resize', () => {
			this.layout();
		})
	}
	layout() {
		this.$grid = $('.gallery').masonry({
			itemSelector: '.gallery__item',
			horizontalOrder: true
		});
		imagesLoaded.makeJQueryPlugin($);
		this.$grid.imagesLoaded().progress(() => {
			this.$grid.masonry();
		})
	}
}