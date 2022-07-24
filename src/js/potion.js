// potion
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
        let bottle = document.getElementById('potion'),
            drop = document.querySelector('.potion-drop'),
            drop2 = document.querySelector('.potion-drop2');

        if (!bottle) return false;

        this.tl = new TimelineMax({paused: true});
        this.tl
            .addLabel('start')
            .to(bottle, 3, {
                transformOrigin: '50% 90%',
                rotation: 15,
                repeat: -1,
                yoyo: true,
                ease: Power2.easeInOut
            })
            .fromTo(drop, .5, {
                    yPercent: 100,
                    rotation: 0,
                    scale: 1
                },
                {
                    transformOrigin: '20% 120%',
                    rotation: 360,
                    yPercent: -100,
                    scale: 0,
                    repeat: -1,
                }, 'start')
            .fromTo(drop2, .7, {
                    yPercent: 100,
                    rotation: 0,
                    scale: 1
                },
                {
                    transformOrigin: '0% 120%',
                    rotation: -360,
                    yPercent: -100,
                    scale: 0,
                    repeat: -1,
                }, 'start');

    }
};