// filomena
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

        let body = document.querySelector('.filomena-filomena'),
            skirt = document.querySelector('.filomena-skirt'),
            backSkirt = document.querySelector('.filomena-back-skirt'),
            leftFoot = document.querySelector('.filomena-l-foot'),
            rightFoot = document.querySelector('.filomena-r-foot'),
            leftArm = document.querySelector('.filomena-l-arm'),
            rightArm = document.querySelector('.filomena-r-arm');

        this.tl = new TimelineMax({paused: true});
        this.tl
            .addLabel('start')
            .to([skirt, backSkirt], 3, {
                skewY: -.5,
                skewX: .5,
                transformOrigin: '50% 0%',
                repeat: -1,
                yoyo: true,
                ease: Power2.easeInOut
            })
            .to(leftFoot, 2, {
                transformOrigin: '1% 99%',
                rotation: 80,
                repeat: -1,
                yoyo: true,
                ease: Power2.easeInOut
            }, 'start')
            .to(rightFoot, 2, {
                transformOrigin: '1% 99%',
                yPercent: -7,
                rotation: 50,
                repeat: -1,
                yoyo: true,
                ease: Power2.easeInOut
            }, '-=1.9')
            .to(leftArm, .6, {
                transformOrigin: '20% 50%',
                skewY: 20,
                yPercent: -10,
                repeat: -1,
                yoyo: true,
                ease: Power2.easeInOut
            }, 'start')
            .to(rightArm, .5, {
                transformOrigin: '20% 50%',
                skewY: 20,
                yPercent: -20,
                repeat: -1,
                yoyo: true,
                ease: Power2.easeInOut
            }, 'start')
            .to(body, 10, {
                bezier: {
                    curviness: 1.25,
                    values: [
                        {
                            yPercent: this.r(-50, -15),
                            xPercent: this.r(-30, 30),
                            rotation: this.r(-40, -20),
                        },
                        {
                            yPercent: this.r(-50, -15),
                            xPercent: this.r(-30, 30),
                            rotation: this.r(40, 20),
                        },
                    ],
                    autoRotate: true
                },
                repeat: -1,
                yoyo: true,
                ease: Power2.easeInOut
            }, 'start');

    }
};