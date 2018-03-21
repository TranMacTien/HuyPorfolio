import $ from 'jquery';

export default class Animation {
    constructor() {
        // this.exec();
    }
    exec() {
        $(document).ready(() => {
            $('.hero__text').addClass('ani-hero-text');
        })
    }
}