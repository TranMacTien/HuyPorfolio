import './Scrollbar.css';

export default class Scrollbar {
  constructor(el, options) {
    this.el = el || null;
    this.isScroll = false;
    this.isRegister = false;
    this.velocity = { max: 10, min: 0.5, step: 50 };
    this.init();
  }

  init() {
    if (this.el) {
      this.el.classList.add('scroller');
      this.registerEvent();
    }
    else {
      throw new Error('Element is not defined!');
    }
  }

  registerEvent() {
    if (this.isRegister) {
      return;
    }

    this.isRegister = true;
    this.el.addEventListener('mousewheel', (e) => {
      let delta = this.velocity.step * (e.deltaY > 0 ? 1 : -1);
      console.log(delta);
      this.scrollChange(delta, this.el.scrollTop + delta);
    }, false);
    this.el.addEventListener('DOMMouseScroll', (e) => {
      let delta = this.velocity.step * (e.wheelDelta < 0 ? 1 : -1);
      console.log(delta);
      this.scrollChange(delta, this.el.scrollTop + delta);
    }, false);
  }

  scrollChange(delta, to) {
    if (this.el) {
      console.log(this.el.scrollTop);
      return this.el.scrollTop += delta;
    }
    else {
      throw new Error('Element is not defined!');
    }
  }

  renderBar() {

  }
}