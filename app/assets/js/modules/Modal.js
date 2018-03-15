import $ from 'jquery';
import tingle from 'tingle.js';
import 'tingle.js/dist/tingle.css';

export default class Modal {
	constructor(el) {
		var modal = new tingle.modal({
			footer: true,
			stickyFooter: false,
			closeMethods: ['overlay', 'button', 'escape'],
			closeLabel: "Close",
			cssClass: ['custom-class-1', 'custom-class-2'],
			onOpen: function() {
				console.log('modal open');
			},
			onClose: function() {
				console.log('modal closed');
			},
			beforeClose: function() {
				// here's goes some logic
				// e.g. save content before closing the modal
				return true; // close the modal
				return false; // nothing happens
				}
			});

		var btn = document.querySelector('.js-tingle-modal-1');
		btn.addEventListener('click', function(){
			modal.open();
		});
		modal.setContent(document.querySelector('.tingle-demo').innerHTML);
	}
}