// octo
export default {
    tl: null,
    r(min, max) {
        return Math.random() * (max - min) + min;
    },
    stop() {
        if (this.tl !== null) this.tl.pause(0, false);
    },
    play() {
        if (this.tl !== null) this.tl.play(0, false);
    },
    build() {

        let body = document.querySelector('.octo-octo'),
            eye = document.querySelector('.octo-eye');

        this.tl = new TimelineMax({paused: true});
        this.tl
            .addLabel('start', 0)
            .fromTo(eye, .05, {
                scaleY: .1,
                transformOrigin: '50% 50%',
            }, {
                scaleY: 1,
                repeat: -1,
                repeatDelay: 1.618,
            }, 'start')
            .to(body, 5, {
                y: this.r(-200, 400),
                x: this.r(-100, 100),
                rotation: this.r(-30, 30),
                ease: Power2.easeInOut,
                repeat: -1,
                yoyo: true,
                onComplete: () => {
                    this.action();
                }
            }, 'start');

    }
}