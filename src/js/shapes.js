// Shapes
export default {
    tl: null,
    stop() {
        if (this.tl !== null) this.tl.pause(0, false);
    },
    play() {
        if (this.tl !== null) this.tl.play(0, false);
    },
    build() {
        let smart = document.querySelector('.smart-smart'),
            open = document.querySelector('.open-open');

        if (!smart) return false;

        this.tl = new TimelineMax({
            paused: true,
            ease: Power3.easeInOut
        });
        this.tl
            .clear(true)
            .addLabel('start')
            .to(smart, 8, {
                rotation: -360,
                transformOrigin: '50% 50%',
                repeat: -1,
                yoyo: true,
            }, 'start')
            .to(open, 7, {
                rotation: 360,
                transformOrigin: '50% 50%',
                repeat: -1,
                yoyo: true,
            }, 'start');
    }
};