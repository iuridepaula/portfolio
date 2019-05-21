// mario
export default {

    tl: new TimelineMax(),
    mariotl: new TimelineMax(),
    bgmStart: null,
    bgmStomp: null,
    bgmEmpty: null,
    bgmAppears: null,
    bgmPowerUp: null,
    bgmExit: null,
    lastBox: 1,
    coins: 1,

    r(min, max) {
        return Math.random() * (max - min) + min;
    },

    accessibilityClick(event){
        if (event.defaultPrevented) return;

        let key = event.key || event.code;

        if (key === '1' || key === 'Digit1') document.querySelector('.mario-box.b1 .in').click();
        if (key === '2' || key === 'Digit2') document.querySelector('.mario-box.b2 .in').click();
        if (key === '3' || key === 'Digit3') document.querySelector('.mario-box.b3 .in').click();
    },

    action() {

        // skips
        let m = document.getElementById('Mario');
        if(!m) return false; // don't exist
        if(!m.classList.contains('active')) return false; // not this scene
        if(
            document.body.classList.contains('-bit16') ||
            document.body.classList.contains('-mario-played')
        ) {
            // already played
            // change BG
            document.body.classList.add('-mario-bg');
            return false;
        }

        // build
        this.lastBox = 1;
        this.coins = 1;
        this.bgmStart = document.getElementById('mario-start');
        this.bgmStomp = document.getElementById('mario-stomp');
        this.bgmEmpty = document.getElementById('mario-empty');
        this.bgmAppears = document.getElementById('mario-appears');
        this.bgmPowerUp = document.getElementById('mario-power-up');
        this.bgmExit = document.getElementById('mario-exit');
        let boxes = document.querySelectorAll('.mario-box');

        // lock body scroll
        document.body.classList.add('-mario-lock');
        // play sound
        // this.bgmStart.play();

        // click boxes events
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].addEventListener('click', (e) => {

                let box = e.target.parentNode;

                // skip
                if(box.classList.contains('-off')){
                    if(box.classList.contains('-full')){
                        // animate box and play empty sound
                        this.tl
                            .clear(true)
                            .fromTo(box, .2, {
                                yPercent: -50,
                            },{
                                onStart: () => this.bgmEmpty.play(),
                                yPercent: 0,
                                ease: SteppedEase.config(2)
                            });
                    }
                    return false;
                }

                // setup
                let coin = null,
                    newCoin = new TimelineMax();

                // animate mario jump + box
                this.marioJump(i);

                // is last box, found coins
                if(boxes.length === this.lastBox) {

                    // release body
                    document.body.classList.remove('-mario-lock');
                    document.body.classList.add('-mario-played');

                    // change BG
                    document.body.classList.add('-mario-bg');

                    // flag
                    box.classList.add('-jumped','-full');

                    // Easter-Egging
                    if(this.coins === 3) {
                        // just a tease to keep clicking
                        document.querySelector('#Mario .container').insertAdjacentHTML('beforeend', `<div class="mario-coin-counter">x3</div>`);
                    }
                    if(this.coins > 3) {
                        // just a tease to keep clicking
                        document.querySelector('.mario-coin-counter').innerHTML = `x${this.coins}`;
                    }

                    // found Easter-Egg
                    if(this.coins === 16) {
                        // lock body
                        document.body.classList.add('-mario-easter-egg','-bit16');

                        // flag
                        box.classList.add('-off');

                        // play stomp + wow + exit sounds
                        this.bgmStomp.play();
                        this.bgmStomp.onended = () => this.bgmPowerUp.play();

                        // show message
                        document.getElementById('home').insertAdjacentHTML('beforeend', `
                            <div class="mario-msg-overlay"></div>
                            <div class="mario-msg">
                                Hooray! Thank you for jumping so many times! Now you got...<br>
                                <span class="-purple">16 coins!</span><br>
                                &nbsp;<br>
                                Keep scrolling, you are near the end!
            
                                <div class="later">
                                    ;)
                                    <button class="mario-msg-close" type="button" title="Close message">✕</button>
                                </div>
                            </div>
                        `);
                        // animate message
                        let msg = new TimelineMax();
                        msg
                            .to('.mario-msg', 1, {
                                onStart: () => this.bgmExit.play(),
                                scale: 1,
                                ease: SteppedEase.config(12)
                            })
                            .to('.mario-msg .later', .1, {
                                autoAlpha: 1,
                                onComplete: () => {

                                    // hide message event
                                    function hideMsg (event) {
                                        if(
                                            event.target.classList.contains('mario-msg-overlay') ||
                                            event.target.classList.contains('mario-msg-close') ||
                                            event.key === 'Escape' ||
                                            event.code === 'Escape'
                                        ){
                                            // hide & remove msg
                                            let tl = new TimelineMax();
                                            tl
                                                .to('.mario-msg, .mario-msg-overlay', 1, {
                                                    scale: 0,
                                                    ease: SteppedEase.config(12),
                                                    onComplete: () => {
                                                        document.getElementById('home').removeChild( document.querySelector('.mario-msg') );
                                                        document.getElementById('home').removeChild( document.querySelector('.mario-msg-overlay') );
                                                        document.querySelector('#Mario .container').removeChild( document.querySelector('.mario-coin-counter') );
                                                    }
                                                });
                                            // release body
                                            document.body.classList.remove('-mario-easter-egg');
                                        }
                                    }
                                    document.addEventListener('click', hideMsg);
                                    window.addEventListener('keydow', hideMsg);

                                }
                            }, '+=4');

                        return false
                    }

                    // add coin
                    box.insertAdjacentHTML('beforeend', `<div class="mario-coin c${this.coins}"></div>`);
                    coin = document.querySelector(`.mario-coin.c${this.coins}`);

                    // animate this coin
                    let xCoords = this.r(-150,150);

                    newCoin
                        .set(coin, {
                            autoAlpha: 1,
                            xPercent: 0,
                            yPercent: 0
                        })
                        .to(coin, .4, { yPercent: -100 })
                        .to(coin, 1, {
                            bezier: {
                                curviness: 1.25,
                                values: [{xPercent: xCoords, yPercent: this.r(-150,-100)}, {xPercent: xCoords*2, yPercent: 800}],
                                autoRotate: false
                            },
                            ease: SteppedEase.config(24),
                            onComplete: () => box.removeChild(coin),
                        });

                    // next coin
                    this.coins++;

                    // play stomp + appears sound
                    this.bgmStomp.currentTime = 0;
                    this.bgmStomp.play();
                    this.bgmStomp.onended = () => {
                        this.bgmAppears.currentTime = 0;
                        this.bgmAppears.play();
                    };
                    return false
                }

                this.lastBox++;

                // not last box, empty
                // flag as empty
                box.classList.add('-jumped','-off');
                // play stomp sound
                this.bgmStomp.play();
                return false;

            });
        }

        // accessibility events
        window.addEventListener('keydown', this.accessibilityClick);

    },

    stop(){

        // garbage
        window.removeEventListener('keydown', this.accessibilityClick);

    },

    // mario jump
    marioJump(index){

        let box = document.querySelector(`.mario-box.b${index+1}`),
            mario = document.querySelector('.mario'),
            position = 25*(index+1);

        this.mariotl
            .clear(true)
            .set(mario, {
                left: `calc(${position}% - 64px)`,
                autoAlpha: 0
            })
            .set( box, { yPercent: 0 } )
            // mario
            .fromTo(mario, .3, {
                yPercent: 200,
                xPercent: -150,
                autoAlpha: 1
            },{
                bezier: {
                    curviness: 1.25,
                    values: [
                        {xPercent: 0, yPercent: 0},
                        {xPercent: 150, yPercent: 200}
                    ],
                    autoRotate: false
                },
                ease: SteppedEase.config(12),
            })
            .set(mario, { autoAlpha: 0 })
            // box
            .to(box, .07, { yPercent: -50, ease: SteppedEase.config(2) }, '-=.15')
            .to(box, .07, { yPercent: 0, ease: SteppedEase.config(2) }, '-=.07' );

    },

}