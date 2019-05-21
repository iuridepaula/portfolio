// Pepe
export default {
    tl: null,
    oceantl: null,
    ptl: [],
    r(min, max) {
        return Math.random() * (max - min) + min;
    },
    stop() {
        // particles
        if (this.ptl.length > 0) {
            for (let i = 0; i < this.ptl.length; i++) {
                if (this.ptl[i] !== null) this.ptl[i].pause(0, false);
            }
        }
        // ocean
        if (this.oceantl !== null) this.oceantl.pause(0, false);
        // head
        if (this.tl !== null) this.tl.pause(0, false);
    },
    play() {
        // particles
        if (this.ptl.length > 0) {
            for (let i = 0; i < this.ptl.length; i++) {
                if (this.ptl[i] !== null) this.ptl[i].play(0, false);
            }
        }
        // ocean
        if (this.oceantl !== null) this.oceantl.play(0, false);
        // head
        if (this.tl !== null) this.tl.play(0, false);
    },
    build() {

        // setup particles
        let particles = document.querySelector('.pepe .particles');

        if (!particles) return false;

        for (let i = 0, particle; i < 15; i++) {
            particle = document.createElement('div');
            particle.className = `particle p${i}`;
            particles.appendChild(particle);

            this.ptl[i] = new TimelineMax({paused: true});
            this.ptl[i]
                .delay(this.r(0, 7))
                .to(`.particle.p${i}`, this.r(5, 7), {
                    y: this.r(100, 1000),
                    x: this.r(100, 500),
                    rotationY: (360 * this.r(5, 20)),
                    rotationZ: (360 * this.r(5, 20)),
                    autoAlpha: 0,
                    repeat: -1,
                });
        }

        // setup ocean
        let wave1 = document.querySelector('.ocean-waves.w1'),
            wave2 = document.querySelector('.ocean-waves.w2');

        this.oceantl = new TimelineMax({paused: true});
        this.oceantl
            .fromTo(wave1, 16, {
                xPercent: 10,
                yPercent: 0,
                zIndex: 9
            }, {
                xPercent: 0,
                yPercent: -100,
                zIndex: 1,
                ease: Power1.easeOut,
                repeat: -1,
            })
            .fromTo(wave2, 16, {
                xPercent: 10,
                yPercent: 0,
                zIndex: 9
            }, {
                xPercent: 0,
                yPercent: -100,
                zIndex: 1,
                ease: Power1.easeOut,
                repeat: -1,
            }, '-=8');

        // setup head
        let ampa_foliage3 = document.querySelector('.bg-ampa_foliage_3'),
            ampa_tree2 = document.querySelector('.bg-ampa_tree_2'),
            ampa_foliage2 = document.querySelector('.bg-ampa_foliage_2'),
            ampa_parrot = document.querySelector('.bg-ampa_parrot_wing'),
            ampa_foliage1 = document.querySelector('.bg-ampa_foliage_1'),
            ampa_tree1 = document.querySelector('.bg-ampa_tree_1'),
            ampa_oxes = document.querySelector('.bg-ampa_oxes'),
            rio_vase = document.querySelector('.rio .vase'),
            rio_foliage1 = document.querySelector('.bg-rio_vase_foliage_1'),
            rio_foliage2 = document.querySelector('.bg-rio_vase_foliage_2'),
            rio_palm1 = document.querySelector('.bg-rio_palmtree_1'),
            rio_palm2 = document.querySelector('.bg-rio_palmtree_2'),
            metal_sax = document.querySelector('.bg-metals_sax'),
            metal_trumpet = document.querySelector('.bg-metals_trumpet'),
            metal_trombone = document.querySelector('.bg-metals_trombone'),
            metal_trombone_thing = document.querySelector('.bg-metals_trombone_thing'),
            pepe = document.querySelector('.pepe'),
            blink = document.querySelector('.pepe .blink'),
            ear = document.querySelector('.bg-head-ear'),
            rhythm = this.r(.2, .4);

        this.tl = new TimelineMax({paused: true});
        this.tl
            .addLabel('start', 0)
            // am/pa
            // .to([ampa_foliage3, ampa_foliage2, ampa_foliage1], .7, {
            //     transformOrigin: '50% 100%',
            //     rotation: this.r(-4,4),
            //     repeat: -1,
            //     yoyo: true,
            // }, 'start')
            // .to(ampa_tree2, 1, {
            //     transformOrigin: '70% 100%',
            //     rotation: this.r(-.5,1.5),
            //     repeat: -1,
            //     yoyo: true,
            // }, 'start' )
            .to(ampa_parrot, 1, {
                transformOrigin: '0% 0%',
                rotation: this.r(-5, 5),
                xPercent: this.r(-5, 0),
                yPercent: this.r(0, 5),
                repeat: -1,
                yoyo: true,
                ease: Elastic.easeOut.config(1, 0.4)
            }, 'start')
            // .to(ampa_tree1, 1.4, {
            //     transformOrigin: '50% 100%',
            //     rotation: this.r(-8,8),
            //     repeat: -1,
            //     yoyo: true,
            // }, 'start' )
            // .to(ampa_oxes, .9, {
            //     transformOrigin: '50% 50%',
            //     rotation: this.r(-4,4),
            //     repeat: -1,
            //     yoyo: true,
            // }, 'start' )
            // rio
            // .to(rio_vase, 1.2, {
            //     transformOrigin: '10% 0%',
            //     rotation: this.r(-4,4),
            //     repeat: -1,
            //     yoyo: true,
            // }, 'start' )
            // .to([rio_foliage1, rio_foliage2], .7, {
            //     transformOrigin: '50% 0%',
            //     rotation: this.r(-4,4),
            //     repeat: -1,
            //     yoyo: true,
            // }, 'start' )
            // .to(rio_palm1, 1, {
            //     transformOrigin: '0% 0%',
            //     rotation: this.r(-6,6),
            //     repeat: -1,
            //     yoyo: true,
            // }, 'start' )
            // .to(rio_palm2, .8, {
            //     transformOrigin: '0% 0%',
            //     rotation: this.r(-6,6),
            //     repeat: -1,
            //     yoyo: true,
            // }, 'start' )
            // metals
            .to(metal_sax, rhythm, {
                transformOrigin: '25% 10%',
                yPercent: this.r(-10, 0),
                rotation: this.r(-5, 6),
                repeat: -1,
                yoyo: true,
            }, 'start')
            .to(metal_trumpet, rhythm * 2, {
                transformOrigin: '30% 100%',
                rotation: this.r(-20, 25),
                yPercent: 10,
                repeat: -1,
                yoyo: true,
                ease: Power1.easeInOut
            }, 'start')
            .to(metal_trombone, rhythm * 4, {
                transformOrigin: '0% 100%',
                rotation: this.r(-40, 45),
                yPercent: 10,
                repeat: -1,
                yoyo: true,
                ease: Power1.easeInOut
            }, 'start')
            .to(metal_trombone_thing, rhythm / 2, {
                transformOrigin: '0% 0%',
                xPercent: this.r(-25, 15),
                repeat: -1,
                yoyo: true,
            }, 'start')
            // pepe
            .to(ear, rhythm, {
                transformOrigin: '40% 50%',
                rotationY: this.r(5, 15),
                repeat: -1,
                yoyo: true,
            }, 'start')
            .fromTo(blink, .2, {
                autoAlpha: 1,
            }, {
                autoAlpha: 0,
                repeat: -1,
                repeatDelay: this.r(1, 2.5),
            }, 'start')
            .to(pepe, 3, {
                yPercent: this.r(-3, 3),
                repeat: -1,
                yoyo: true,
                ease: Power1.easeInOut
            }, 'start');

    },
    build1024() {

        // setup particles
        let particles = document.querySelector('.pepe .particles');

        if (!particles) return false;

        for (let i = 0, particle; i < 10; i++) {
            particle = document.createElement('div');
            particle.className = `particle p${i}`;
            particles.appendChild(particle);

            this.ptl[i] = new TimelineMax({paused: true});
            this.ptl[i]
                .delay(this.r(0, 7))
                .to(`.particle.p${i}`, this.r(5, 7), {
                    y: this.r(100, 1000),
                    x: this.r(100, 500),
                    rotationY: (360 * this.r(5, 20)),
                    rotationZ: (360 * this.r(5, 20)),
                    autoAlpha: 0,
                    repeat: -1,
                });
        }

        // setup ocean
        let wave1 = document.querySelector('.ocean-waves.w1'),
            wave2 = document.querySelector('.ocean-waves.w2');

        this.oceantl = new TimelineMax({paused: true});
        this.oceantl
            .fromTo(wave1, 16, {
                xPercent: 10,
                yPercent: 0,
                zIndex: 9
            }, {
                xPercent: 0,
                yPercent: -100,
                zIndex: 1,
                ease: Power1.easeOut,
                repeat: -1,
            })
            .fromTo(wave2, 16, {
                xPercent: 10,
                yPercent: 0,
                zIndex: 9
            }, {
                xPercent: 0,
                yPercent: -100,
                zIndex: 1,
                ease: Power1.easeOut,
                repeat: -1,
            }, '-=8');

        // setup head
        let metal_sax = document.querySelector('.bg-metals_sax'),
            metal_trumpet = document.querySelector('.bg-metals_trumpet'),
            metal_trombone = document.querySelector('.bg-metals_trombone'),
            metal_trombone_thing = document.querySelector('.bg-metals_trombone_thing'),
            blink = document.querySelector('.pepe .blink'),
            rhythm = this.r(.2, .4);

        this.tl = new TimelineMax({paused: true});
        this.tl
            .addLabel('start', 0)
            // metals
            .to(metal_sax, rhythm, {
                transformOrigin: '25% 10%',
                yPercent: this.r(-10, 0),
                rotation: this.r(-5, 6),
                repeat: -1,
                yoyo: true,
            }, 'start')
            .to(metal_trumpet, rhythm * 2, {
                transformOrigin: '30% 100%',
                rotation: this.r(-20, 25),
                yPercent: 10,
                repeat: -1,
                yoyo: true,
                ease: Power1.easeInOut
            }, 'start')
            .to(metal_trombone, rhythm * 4, {
                transformOrigin: '0% 100%',
                rotation: this.r(-40, 45),
                yPercent: 10,
                repeat: -1,
                yoyo: true,
                ease: Power1.easeInOut
            }, 'start')
            .to(metal_trombone_thing, rhythm / 2, {
                transformOrigin: '0% 0%',
                xPercent: this.r(-25, 15),
                repeat: -1,
                yoyo: true,
            }, 'start')
            // pepe
            .fromTo(blink, .2, {
                autoAlpha: 1,
            }, {
                autoAlpha: 0,
                repeat: -1,
                repeatDelay: this.r(1, 2.5),
            }, 'start');

    },
    build568() {

        // no particles

        // setup ocean
        let wave1 = document.querySelector('.ocean-waves.w1'),
            wave2 = document.querySelector('.ocean-waves.w2');

        this.oceantl = new TimelineMax({paused: true});
        this.oceantl
            .fromTo(wave1, 16, {
                xPercent: 10,
                yPercent: 0,
                zIndex: 9
            }, {
                xPercent: 0,
                yPercent: -100,
                zIndex: 1,
                ease: Power1.easeOut,
                repeat: -1,
            })
            .fromTo(wave2, 16, {
                xPercent: 10,
                yPercent: 0,
                zIndex: 9
            }, {
                xPercent: 0,
                yPercent: -100,
                zIndex: 1,
                ease: Power1.easeOut,
                repeat: -1,
            }, '-=8');

        // setup head
        let metal_sax = document.querySelector('.bg-metals_sax'),
            metal_trumpet = document.querySelector('.bg-metals_trumpet'),
            metal_trombone = document.querySelector('.bg-metals_trombone'),
            metal_trombone_thing = document.querySelector('.bg-metals_trombone_thing'),
            blink = document.querySelector('.pepe .blink'),
            rhythm = .4;

        this.tl = new TimelineMax({paused: true});
        this.tl
            .addLabel('start', 0)
            // metals
            // .to(metal_sax, rhythm, {
            //     transformOrigin: '25% 10%',
            //     yPercent: this.r(-10, 0),
            //     rotation: this.r(-5, 6),
            //     repeat: -1,
            //     yoyo: true,
            // }, 'start')
            // .to(metal_trumpet, rhythm * 2, {
            //     transformOrigin: '30% 100%',
            //     rotation: this.r(-20, 25),
            //     yPercent: 10,
            //     repeat: -1,
            //     yoyo: true,
            //     ease: Power1.easeInOut
            // }, 'start')
            // .to(metal_trombone, rhythm * 4, {
            //     transformOrigin: '0% 100%',
            //     rotation: this.r(-40, 45),
            //     yPercent: 10,
            //     repeat: -1,
            //     yoyo: true,
            //     ease: Power1.easeInOut
            // }, 'start')
            // .to(metal_trombone_thing, rhythm / 2, {
            //     transformOrigin: '0% 0%',
            //     xPercent: this.r(-25, 15),
            //     repeat: -1,
            //     yoyo: true,
            // }, 'start')
            // pepe
            .fromTo(blink, .2, {
                autoAlpha: 1,
            }, {
                autoAlpha: 0,
                repeat: -1,
                repeatDelay: this.r(1, 2.5),
            }, 'start');

    },
}