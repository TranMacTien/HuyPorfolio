import $ from 'jquery';
import jQueryBridget from 'jquery-bridget';
import imagesLoaded from 'imagesloaded';
import Masonry from 'masonry-layout';
export default class MasonryLayout {
	constructor() {
		this.layout();
	}
	layout() {
		jQueryBridget( 'masonry', Masonry, $ );
		let $grid = $('.gallery').masonry({
			itemSelector: '.gallery__item',
			horizontalOrder: true
		});
		imagesLoaded.makeJQueryPlugin($);
		$grid.imagesLoaded().progress(function() {
			$grid.masonry();
		})
	}
}