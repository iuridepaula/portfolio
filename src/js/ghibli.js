// ghibli castle
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

        let top = document.querySelector('.castle .top'),
            tower = document.querySelector('.castle .top-tower'),
            bucket = document.querySelector('.castle .bucket'),
            mouth = [document.querySelector('.castle .front-lip'), document.querySelector('.castle .back-lip')],
            l_leg = document.querySelector('.castle .l-leg'),
            r_leg = document.querySelector('.castle .r-leg'),
            l_arm = document.querySelector('.castle .l-arm'),
            r_arm = document.querySelector('.castle .r-arm'),
            ear = document.querySelector('.castle .ear'),
            foliage1 = document.querySelectorAll('.castle .foliage1'),
            foliage2 = document.querySelectorAll('.castle .foliage2'),
            foliage3 = document.querySelectorAll('.castle .foliage3'),
            castle = document.querySelectorAll('.castle');

        this.tl = new TimelineMax({paused: true});
        this.tl
            .addLabel('start', 0)
            .to(top, 2, {
                rotation: 5,
                yPercent: 2,
                transformOrigin: '50% 100%',
                ease: RoughEase.ease.config({
                    template: Power2.easeInOut,
                    strength: 0.5,
                    points: 16,
                    taper: "both",
                    randomize: true,
                    clamp: false
                }),
                repeat: -1,
                yoyo: true
            }, 'start')
            .to(tower, 2, {
                rotation: -15,
                transformOrigin: '50% 100%',
                ease: RoughEase.ease.config({
                    template: Power0.easeNone,
                    strength: 0.5,
                    points: 10,
                    taper: "none",
                    randomize: true,
                    clamp: false
                }),
                repeat: -1,
                yoyo: true
            }, 'start')
            .to(bucket, .6, {
                rotationZ: -25,
                rotationX: -45,
                transformOrigin: '50% 0%',
                repeat: -1,
                yoyo: true,
            }, 'start')
            .to(l_leg, 2, {
                rotation: -15,
                transformOrigin: '0% 0%',
                ease: Power2.easeInOut,
                repeat: -1,
                yoyo: true
            }, 'start')
            .to(r_leg, 2.2, {
                rotation: -15,
                transformOrigin: '0% 0%',
                ease: Power2.easeInOut,
                repeat: -1,
                yoyo: true
            }, 'start')
            .to(r_arm, 1.8, {
                rotation: 15,
                transformOrigin: '0% 0%',
                ease: Power2.easeInOut,
                repeat: -1,
                yoyo: true
            }, 'start')
            .to(l_arm, 2, {
                rotation: 15,
                transformOrigin: '0% 0%',
                ease: Power2.easeInOut,
                repeat: -1,
                yoyo: true
            }, 'start')
            .to(mouth, 1.6, {
                rotation: -20,
                xPercent: -5,
                transformOrigin: '100% 0%',
                ease: RoughEase.ease.config({
                    template: Power0.easeNone,
                    strength: 1,
                    points: 16,
                    taper: "none",
                    randomize: true,
                    clamp: false
                }),
                repeat: -1,
                yoyo: true
            }, 'start')
            .to(ear, 2, {
                rotation: -25,
                transformOrigin: '25% 50%',
                ease: RoughEase.ease.config({
                    template: Power0.easeNone,
                    strength: 1,
                    points: 16,
                    taper: "none",
                    randomize: true,
                    clamp: false
                }),
                repeat: -1,
                yoyo: true
            }, 'start')
            .to(foliage1, .7, {
                transformOrigin: '50% 100%',
                skewX: 10,
                repeat: -1,
                yoyo: true
            }, 'start')
            .to(foliage2, .6, {
                transformOrigin: '50% 100%',
                skewX: -8,
                repeat: -1,
                yoyo: true
            }, 'start')
            .to(foliage3, .5, {
                transformOrigin: '50% 100%',
                skewX: 6,
                repeat: -1,
                yoyo: true
            }, 'start')
            .to(castle, 1.6, {
                yPercent: -5,
                repeat: -1,
                yoyo: true,
                ease: Power2.easeInOut
            }, 'start');

    },
    build568() {

        let top = document.querySelector('.castle .top'),
            tower = document.querySelector('.castle .top-tower'),
            bucket = document.querySelector('.castle .bucket'),
            mouth = [document.querySelector('.castle .front-lip'), document.querySelector('.castle .back-lip')],
            l_leg = document.querySelector('.castle .l-leg'),
            r_leg = document.querySelector('.castle .r-leg'),
            l_arm = document.querySelector('.castle .l-arm'),
            r_arm = document.querySelector('.castle .r-arm'),
            ear = document.querySelector('.castle .ear'),
            castle = document.querySelectorAll('.castle');

        this.tl = new TimelineMax({paused: true});
        this.tl
            .addLabel('start', 0)
            // .to(top, 2, {
            //     rotation: 5,
            //     yPercent: 2,
            //     transformOrigin: '50% 100%',
            //     ease: RoughEase.ease.config({
            //         template: Power2.easeInOut,
            //         strength: 0.5,
            //         points: 16,
            //         taper: "both",
            //         randomize: true,
            //         clamp: false
            //     }),
            //     repeat: -1,
            //     yoyo: true
            // }, 'start')
            .to(tower, 2, {
                rotation: -15,
                transformOrigin: '50% 100%',
                ease: RoughEase.ease.config({
                    template: Power0.easeNone,
                    strength: 0.5,
                    points: 10,
                    taper: "none",
                    randomize: true,
                    clamp: false
                }),
                repeat: -1,
                yoyo: true
            }, 'start')
            .to(bucket, .6, {
                rotationZ: -25,
                rotationX: -45,
                transformOrigin: '50% 0%',
                repeat: -1,
                yoyo: true,
            }, 'start')
            // .to(l_leg, 2, {
            //     rotation: -15,
            //     transformOrigin: '0% 0%',
            //     ease: Power2.easeInOut,
            //     repeat: -1,
            //     yoyo: true
            // }, 'start')
            // .to(r_leg, 2.2, {
            //     rotation: -15,
            //     transformOrigin: '0% 0%',
            //     ease: Power2.easeInOut,
            //     repeat: -1,
            //     yoyo: true
            // }, 'start')
            // .to(r_arm, 1.8, {
            //     rotation: 15,
            //     transformOrigin: '0% 0%',
            //     ease: Power2.easeInOut,
            //     repeat: -1,
            //     yoyo: true
            // }, 'start')
            // .to(l_arm, 2, {
            //     rotation: 15,
            //     transformOrigin: '0% 0%',
            //     ease: Power2.easeInOut,
            //     repeat: -1,
            //     yoyo: true
            // }, 'start')
            .to(mouth, 1.6, {
                rotation: -20,
                xPercent: -5,
                transformOrigin: '100% 0%',
                ease: RoughEase.ease.config({
                    template: Power0.easeNone,
                    strength: 1,
                    points: 16,
                    taper: "none",
                    randomize: true,
                    clamp: false
                }),
                repeat: -1,
                yoyo: true
            }, 'start')
            .to(ear, 2, {
                rotation: -25,
                transformOrigin: '25% 50%',
                ease: RoughEase.ease.config({
                    template: Power0.easeNone,
                    strength: 1,
                    points: 16,
                    taper: "none",
                    randomize: true,
                    clamp: false
                }),
                repeat: -1,
                yoyo: true
            }, 'start')
            .to(castle, 1.6, {
                yPercent: -5,
                repeat: -1,
                yoyo: true,
                ease: Power2.easeInOut
            }, 'start');

    },
};