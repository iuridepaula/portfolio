// coffee
export default {
    tl: null,
    r(min, max) {
        return Math.random() * (max - min) + min;
    },
    build() {

        this.tl = new TimelineMax({paused: true});
        this.tl
            .to('.coffee-coffee', 5, {
                yPercent: this.r(20, 200),
                xPercent: this.r(-50, 50),
                rotation: this.r(0, 360),
                transformOrigin: '50% 50%',
                ease: Power1.easeInOut,
                repeat: -1,
                yoyo: true,
            });

    },
    stop() {
        if (this.tl !== null) this.tl.pause(0, false);
    },
    play() {
        if (this.tl !== null) this.tl.play(0, false);
    },
};