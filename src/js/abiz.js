/**
 * @loop
 * A biz
 */
export default {
    tl: null,
    build() {

        this.tl = new TimelineMax({paused: true});
        this.tl
            .addLabel('start', 0)
            .to('.abiz-head', 2, {
                transformOrigin: '50% 75%',
                scale: 1.05,
                yPercent: -5,
                ease: Power2.easeInOut,
                repeat: -1,
                yoyo: true,
            }, 'start')
            .to('.abiz-r-arm, .abiz-l-arm', 1.5, {
                rotationZ: 5,
                transformOrigin: '90% 0%',
                repeat: -1,
                yoyo: true,
                ease: Power2.easeInOut,
            }, 'start')
            .to('#magento', 2, {
                yPercent: -20,
                repeat: -1,
                yoyo: true,
                ease: Power2.easeOut,
            })
            .to('.abiz-magento-s', 2, {
                scale: .7,
                autoAlpha: .5,
                repeat: -1,
                yoyo: true,
                ease: Power2.easeOut
            }, '-=2')

    },
    play() {
        if (this.tl !== null) this.tl.play(0, false);
    },
    stop() {
        if (this.tl !== null) this.tl.pause(0, false);
    },
}