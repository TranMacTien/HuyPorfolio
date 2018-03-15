import Scrollbar from '../libs/Scrollbar';

export default class Scroller {
  constructor(el) {
    window.temp = new Scrollbar(el);
  }
}