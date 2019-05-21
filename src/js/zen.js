// Zen
export default {
    tl: null,
    stop() {
        if (this.tl !== null) this.tl.pause(0, false);
    },
    play() {
        if (this.tl !== null) this.tl.play(0, false);
    },
    build() {
        let body = document.querySelector('.zen-zen'),
            head = document.querySelector('.zen-head'),
            leftArm = document.querySelector('.zen-l-arm'),
            rightArm = document.querySelector('.zen-r-arm'),
            leftMustache = document.querySelector('.zen-l-mustache'),
            rightMustache = document.querySelector('.zen-r-mustache');

        if (!body) return false;

        this.tl = new TimelineMax({paused: true});
        this.tl
            .set(head, {
                transformOrigin: '50% 90%',
                rotation: 5,
            })
            .addLabel('start')
            .to(head, 3, {
                rotation: -5,
                ease: Power2.easeInOut,
                repeat: -1,
                yoyo: true
            }, 'start')
            .to([leftArm, leftMustache], 2, {
                transformOrigin: '90% 50%',
                rotation: -20,
                ease: Power2.easeInOut,
                repeat: -1,
                yoyo: true
            }, 'start')
            .to([rightArm, rightMustache], 2, {
                transformOrigin: '10% 50%',
                rotation: 20,
                ease: Power2.easeInOut,
                repeat: -1,
                yoyo: true
            }, 'start')
            .to(body, 2, {
                yPercent: -10,
                ease: Power2.easeInOut,
                repeat: -1,
                yoyo: true
            }, 'start');
    }
};