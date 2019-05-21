// et
export default {
    tl: null,
    stop() {
        if (this.tl !== null) this.tl.pause(0, false);
    },
    play() {
        if (this.tl !== null) this.tl.play(0, false);
    },
    r(min, max) {
        return Math.random() * (max - min) + min;
    },
    build() {

        let body = document.querySelector('.et-et'),
            ship = document.querySelector('.et-ship'),
            eye = document.querySelector('.et-eye');

        this.tl = new TimelineMax({paused: true});
        this.tl
            .clear()
            .addLabel('start', 0)
            .to(ship, .25, {
                rotationZ: 5,
                transformOrigin: '50% 75%',
                ease: Power2.easeInOut,
                repeat: -1,
                yoyo: true
            }, 'start')
            .fromTo(eye, .05, {
                scaleY: .1,
                transformOrigin: '50% 50%',
            }, {
                scaleY: 1,
                repeat: -1,
                repeatDelay: 1.618
            }, 'start')
            .to(body, 12, {
                bezier: {
                    curviness: 1.25,
                    values: [
                        {
                            xPercent: this.r(-100, 50),
                            yPercent: this.r(-40, 40),
                            rotationZ: this.r(15, 30),
                        },
                        {
                            xPercent: this.r(-100, 50),
                            yPercent: this.r(-40, 40),
                            rotationZ: this.r(-30, -15),
                        },
                        {
                            xPercent: this.r(-100, 50),
                            yPercent: this.r(-40, 40),
                            rotationZ: this.r(15, 30),
                        },
                        {
                            xPercent: this.r(-100, 50),
                            yPercent: this.r(-40, 40),
                            rotationZ: this.r(-30, -15),
                        },
                        {
                            xPercent: this.r(-100, 50),
                            yPercent: this.r(-40, 40),
                            rotationZ: this.r(15, 30),
                        },
                        {
                            xPercent: this.r(-100, 50),
                            yPercent: this.r(-40, 40),
                            rotationZ: this.r(-30, -15),
                        }
                    ],
                    autoRotate: true
                },
                transformOrigin: '50% 5%',
                ease: Power0.easeNone,
                repeat: -1,
                yoyo: true,
            }, 'start');

    }
};