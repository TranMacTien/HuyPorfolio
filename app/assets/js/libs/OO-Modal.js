let Modal = function(obj) {
	this.obj = obj || null;

	this.onOpen = function() {
		console.log('modal open');
	};

	this.onClose = function() {
		console.log('modal close');
	};
};

Modal.prototype.init = function() {

}

Modal.prototype.open = function() {
	if (this.obj != null) {

		// close all openned popups
		let allPopup = document.querySelectorAll('.popup');
		for (var i = 0; i < allPopup.length; i++) {
			allPopup[i].classList.remove('active');
		}

		// open current selected popup
		let thisElm = document.querySelector(this.obj.element);
		thisElm.classList.add('active');

		// add close event to close button for selected popup
		thisElm.querySelector('.popup__close').addEventListener('click', function() {
			thisElm.classList.remove('active');
		}, false);
	}
}

export default Modal;