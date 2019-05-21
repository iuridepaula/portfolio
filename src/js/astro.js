// astro
export default {
    tl: null,
    r(min, max) {
        return Math.random() * (max - min) + min;
    },
    build() {

        this.tl = new TimelineMax({paused: true});
        this.tl
            .set('.astro-head', {
                rotation: -15,
                transformOrigin: '50% 90%',
                yPercent: 0,
                xPercent: -10,
            })
            .set('.astro-tube', {
                rotation: -15,
                transformOrigin: '0% 100%',
            })
            .addLabel('start', 0)
            .to('.astro-head', 4, {
                rotation: 10,
                yPercent: 5,
                xPercent: 10,
                ease: Power2.easeInOut,
                repeat: -1,
                yoyo: true,
            }, 'start')
            .to('.astro-tube', 4, {
                rotation: 20,
                yPercent: 10,
                ease: Power2.easeInOut,
                repeat: -1,
                yoyo: true,
            }, 'start')
            .to('.astro-l-arm', 2, {
                rotation: -20,
                transformOrigin: '90% 90%',
                ease: Elastic.easeOut.config(1, 0.1),
                repeat: -1,
                yoyo: true,
            }, 'start')
            .fromTo('.astro-l-leg', 2, {
                rotation: 10,
                transformOrigin: '90% 10%',
            }, {
                rotation: -10,
                ease: Power2.easeInOut,
                repeat: -1,
                yoyo: true,
            }, 'start')
            .fromTo('.astro-r-leg', 2, {
                rotation: -10,
                transformOrigin: '90% 10%',
            }, {
                rotation: 10,
                ease: Power2.easeInOut,
                repeat: -1,
                yoyo: true,
            }, 'start')
            .to('.astro-body', 1, {
                scaleX: 1.06,
                transformOrigin: '50% 50%',
                ease: Power2.easeInOut,
                repeat: -1,
                yoyo: true,
            }, 'start')
            .to('.astro-astro', 5, {
                yPercent: this.r(-40, -20),
                xPercent: this.r(-10, 10),
                rotation: this.r(-120, 120),
                transformOrigin: '50% 50%',
                ease: Power2.easeInOut,
                repeat: -1,
                yoyo: true,
            }, 'start');

    },
    stop() {
        if (this.tl !== null) this.tl.pause(0, false);
    },
    play() {
        if (this.tl !== null) this.tl.play(0, false);
    },
};