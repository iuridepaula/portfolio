// dino
export default {
    tl: null,
    rhythm: .3,
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

        let head = document.querySelector('.dino-head'),
            leftArm = document.querySelector('.dino-l-arm'),
            rightArm = document.querySelector('.dino-r-arm'),
            leftLeg = document.querySelector('.dino-l-leg'),
            rightLeg = document.querySelector('.dino-r-leg'),
            tail = document.querySelector('.dino-tail'),
            eye = document.querySelector('.dino-eye'),
            headphone = document.querySelector('.dino-headphone'),
            bright = document.querySelector('.dino-bright'),
            teeth1 = document.querySelector('#dino .teeth1'),
            teeth2 = document.querySelector('#dino .teeth2'),
            mouthChillout = document.querySelector('#dino .mouth-chillout'),
            mouthFuckYeah = document.querySelector('#dino .mouth-fuck-yeah'),
            song = Math.floor(Math.random() * 4) + 1,
            songLink = null;

        switch (song) {
            case 1:
                // Pink Floyd - Dogs
                this.rhythm = .3;
                bright.style.display = 'none';
                teeth1.style.display = 'none';
                teeth2.style.display = 'none';
                mouthChillout.style.display = 'none';
                mouthFuckYeah.style.display = '';
                songLink = 'https://open.spotify.com/track/2jvuMDqBK04WvCYYz5qjvG?si=J8VxjC6BR2Kg4Y6eXHqQCQ';
                break;
            case 2:
                // The Doors - Spanish Caravan
                this.rhythm = 1;
                bright.style.display = 'none';
                teeth1.style.display = 'none';
                teeth2.style.display = 'none';
                mouthChillout.style.display = 'none';
                mouthFuckYeah.style.display = '';
                songLink = 'https://open.spotify.com/track/32bJv8V2Xgi5mtxdPcsi8B?si=enqG9uk2Q6SYhhAZtRimGQ';
                break;
            case 3:
                // BadBadNotGood - Speaking Gently
                this.rhythm = .2;
                songLink = 'https://open.spotify.com/track/1pYBTRBbp3PCcdqoke2QSN?si=IMrSO7bhTJCrLgdvwj46xQ';
                break;
            case 4:
                // Future Islands - Seasons
                this.rhythm = .3;
                songLink = 'https://open.spotify.com/track/2oPoWNzWrFonvqrkZtmX52?si=jgc8oNB_Qdqx1vnU0gKnLA';
                break;
        }

        // Dino Song
        document.querySelector('.dino-head').addEventListener('click', () => {
            window.open(songLink);
        });

        this.tl = new TimelineMax({paused: true});
        this.tl
            .addLabel('start', 0)
            .to(leftLeg, this.rhythm, {
                skewX: -20,
                transformOrigin: '50% 100%',
                repeat: -1,
                yoyo: true
            }, 'start')
            .to(rightLeg, this.rhythm, {
                skewX: 20,
                transformOrigin: '50% 100%',
                repeat: -1,
                yoyo: true
            }, 'start')
            .to(headphone, this.rhythm / 2, {
                scale: 1.1,
                transformOrigin: '20% 20%',
                repeat: -1,
                yoyo: true
            }, 'start')
            .to([leftArm, rightArm], this.rhythm, {
                yPercent: 20,
                ease: Power2.easeInOut,
                repeat: -1,
                yoyo: true,
            }, 'start')
            .to(tail, this.rhythm, {
                transformOrigin: '25% 50%',
                rotationZ: 20,
                ease: Power2.easeInOut,
                repeat: -1,
                yoyo: true
            }, 'start');

        if (song === 2) {
            this.tl
                .to(head, this.rhythm, {
                    transformOrigin: '85% 100%',
                    rotationZ: this.rhythm * 8,
                    ease: Power2.easeInOut,
                    repeat: -1,
                    yoyo: true
                }, 'start');
        } else {
            this.tl
                .to(head, this.rhythm, {
                    transformOrigin: '85% 100%',
                    rotationZ: this.rhythm * 32,
                    ease: Power2.easeInOut,
                    repeat: -1,
                    yoyo: true
                }, 'start');
        }

        if (song > 2) {
            this.tl
                .fromTo(eye, .01, {
                    scaleY: .1,
                    transformOrigin: '50% 50%',
                }, {
                    scaleY: 1,
                    transformOrigin: '50% 50%',
                    repeat: -1,
                    yoyo: true,
                    repeatDelay: 3,
                }, 'start')
                .fromTo(bright, .01, {
                    autoAlpha: 0,
                }, {
                    autoAlpha: 1,
                    repeat: -1,
                    yoyo: true,
                    repeatDelay: 3,
                }, 'start');
        } else {
            this.tl
                .set(eye, {
                    scaleY: .1,
                    transformOrigin: '50% 50%',
                }, 'start');
        }

    }
};