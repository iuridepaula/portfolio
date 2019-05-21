<template>
    <div id="desbravando" class="wrapper">

        <div class="static-container">
            <h1 class="title">
                work<br v-if="viewport.is568">(<span class="params">'Desbravando'</span>)
            </h1>

            <div class="std initial-fold">
                <p class="-purple -full" v-if="viewport.is568">
                    // Art Direction<br>
                    // Illustration<br>
                </p>
                <p class="-purple -full" v-else>
                    // Art Direction and Illustration<br>
                </p>

                <h2 class="subtitle">
                    Shaping sound
                </h2>
                <p class="-gray">
                    <i>Desbravando</i> (Trawling) was a musical project from the musician <i>Pepê Reis</i>, who traveled
                    through rhythms all over Brazil.
                </p>
            </div>

            <div class="project-start"></div>

            <div class="cd-case" role="img" aria-labelledby="discAlt">
                <p id="discAlt" class="ariaLabel">A paper CD case with the <i>Desbravando</i> cover and a disk rolling
                    out of the case.</p>
                <div class="case"></div>
                <div class="disc"></div>
                <div class="disc-shadow"></div>
            </div>

            <div class="std">

                <h3 class="-red">// Concept</h3>
                <p>
                    A visual representation of all rhythms, cities, culture and natural beauty that inspired the album.
                </p>

                <h2 class="subtitle">Elements & moods</h2>

                <p>
                    The final art goes straight to the point, overlapping Brazil’s east coast, its cities, and monuments
                    with the artist's face.
                </p>
                <p>
                    <i>Pepê</i> is primarily a singer and composer. In this album, he sang about love, cultural
                    differences, and specific aspects of Brazilian everyday life.
                </p>

            </div>

            <div class="gallery-inspiration">
                <ul>
                    <li class="f1">
                        <figure>
                            <img src="@/assets/pepe/parintins-boi-garantido.jpg" alt="">
                            <figcaption>The fantasy of a white ox, called <i>"Boi Garantido"</i> (Confident Ox) with
                                golden horns and a red heart on the forehead, used at the Parintins festival in Brazil.
                            </figcaption>
                        </figure>
                    </li>
                    <li class="f2">
                        <figure>
                            <img src="@/assets/pepe/parintins-boi-caprichoso.jpg" alt="">
                            <figcaption>The fantasy of a black ox, called <i>"Boi Caprichoso"</i> (Whimsical Ox) with
                                white horns and a blue start on the forehead, used at the Parintins festival in Brazil.
                            </figcaption>
                        </figure>
                    </li>
                    <li class="f3">
                        <figure>
                            <img src="@/assets/pepe/fitas-senhor-do-bonfim.jpg" alt="">
                            <figcaption>The hand of a woman taking one of several colored ribbons of the <i>"Senhor do
                                Bonfim"</i>, with the writing: <i>"Lembrança do Senhor do Bonfim da Bahia"</i> (A
                                memento from the Lord of Bonfim of Bahia).
                            </figcaption>
                        </figure>
                    </li>
                    <li class="f4">
                        <figure>
                            <img src="@/assets/pepe/pepe-reis.jpg" alt="">
                            <figcaption>A portrait of Pepê Reis, in profile pose, turned to the left.</figcaption>
                        </figure>
                    </li>
                    <li class="f5">
                        <figure>
                            <img src="@/assets/pepe/igreja-senhor-do-bonfim.jpg" alt="">
                            <figcaption>The historical church of <i>"Senhor do Bonfim"</i>, in the state of Bahia,
                                Brazil. With two towers, white walls and a staircase surrounding its entrance.
                            </figcaption>
                        </figure>
                    </li>
                    <li class="f6">
                        <figure>
                            <img src="@/assets/pepe/museu-masp.jpg" alt="">
                            <figcaption>The MASP museum in the city of São Paulo, Brazil, with its four red pillars and
                                its glass façade.
                            </figcaption>
                        </figure>
                    </li>
                    <li class="f7">
                        <figure>
                            <img src="@/assets/pepe/mercado-ver-o-peso.jpg" alt="">
                            <figcaption>The historical public market <i>"Ver o Peso"</i>, (Cheeck the Weight) located by
                                the river, in the bay of <i>Guajará</i>, with its four towers, blue walls and some
                                fishing boats in front.
                            </figcaption>
                        </figure>
                    </li>
                </ul>
            </div>

            <div class="pepe-logo" role="img">
                <div class="hand-write-mask">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210 16" class="hand-write">
                        <path d="M1.3 5.2s14.5-.3 37.8 1.1S72 9.4 74.8 7.5 77.3 3 79 3c2.5 0 3.3 12.5 3.3 12.5S81.4 3.4 84 3.4c1.5 0 1.8 3 3.3 3 2.2 0 4.3-3.3 3-3.3-1.5 0-.8 3.3 1.1 3.3 1.5 0 2.3-2.1 3.3-2.1 1.9 0 4.3 11 2.8 11-.9 0-2.3-11.3 1-11.3 1.7 0 1.6 3 4.5 2.2" clip-rule="evenodd" class="LZeLLPey_0"></path>
                        <path d="M104.4 5s2.9-1.8.9-2.4-1 3.9.9 3.9 3.1-2.3 2.7-3.2c.4 1.6 1.9.1 2.1 1s-.1 2.7 2 1.9" clip-rule="evenodd" class="LZeLLPey_1"></path>
                        <path d="M114.4 5.3s2.1-2.2.8-2.5c-1.3-.3-1.6 3.5.3 3.5 1.1 0 1.4-1.9 2.7-1.9.7 0 .9 1.9 2.2 1.9 1.3 0 2.7-2.8 4.3-2.8s2.3 2.8.8 3C127.7 4.7 132.1 3 140 3s38.1 2.3 69.3 2.3" clip-rule="evenodd" class="LZeLLPey_2"></path>
                        <path d="M103.9 1.5s1-1.9 2.4-.3" clip-rule="evenodd" class="LZeLLPey_3"></path>
                        <path d="M118.6.5l.6.6" clip-rule="evenodd" class="LZeLLPey_4"></path>
                    </svg>
                </div>
                <div class="text">Desbravando</div>
            </div>

            <div class="pepe-full-art">
                <img src="@/assets/pepe/pepe-full-art.jpg" alt="The final art: with Pepe's head decorated with foliage, flowers, musical instruments and historical monuments, and a musical note in his throat, he flies over an ocean where a guitar is floating on the waves.">
            </div>

            <nav class="work-nav -pepe">
                <h3>// More...</h3>
                <ul>
                    <li class="prev">
                        <router-link to="/work/admin-panel" title="Admin Panel">
                            <svg class="nav-ico -prev" viewBox="0 0 16 16">
                                <path d="M5,1h10v10 M5.5,10.5l0.8-0.8"/>
                            </svg>
                            ...Admin Panel
                        </router-link>
                    </li>
                    <li class="next">
                        <router-link to="/work/confianca" title="Confiança">
                            Confiança...
                            <svg class="nav-ico -next" viewBox="0 0 16 16">
                                <path d="M5,1h10v10 M5.5,10.5l0.8-0.8"/>
                            </svg>
                        </router-link>
                    </li>
                </ul>
            </nav>

        </div>

    </div>
</template>

<script>
    // styles
    import '@/styles/work.scss'
    import '@/styles/work/desbravando.scss'
    // ScrollMagic
    import * as ScrollMagic from "scrollmagic";

    export default {
        name: 'desbravando',
        props: {
            viewport: Object,
        },
        data() {
            return {
                intro: new TimelineMax(),
                scroller: new ScrollMagic.Controller(),
            }
        },
        methods: {},
        mounted() {

            /**
             * @desc
             * Intro scene
             */
            this.intro
                .clear(true)
                .addLabel('enter', 1)
                .from('.title', 2, {
                    autoAlpha: 0,
                    rotationX: 20,
                    transformOrigin: '50% 50% -100px',
                    ease: Power3.easeOut,
                }, 'enter')
                .from('.std', 2, {
                    autoAlpha: 0,
                    x: -32,
                    ease: Power3.easeOut,
                }, 'enter+=1.5');

            /**
             * @desc
             * bg color scene
             */
            let sceneBg = new ScrollMagic.Scene({
                triggerElement: '.project-start',
                offset: this.viewport.h / 4,
                duration: document.body.offsetHeight
            })
                .addTo(this.scroller)
                .reverse(true);
            sceneBg
                .on('enter', (e) => {
                    document.body.classList.add('-desbravando-bg');
                })
                .on('leave', (e) => {
                    if (e.scrollDirection === 'REVERSE') {
                        document.body.classList.remove('-desbravando-bg');
                    }
                });

            /**
             * @desc
             * cd disc scene
             */
            let tlDisc = new TimelineMax();
            if (this.viewport.is768) {
                // 768 screen animation
                tlDisc
                    .to('.cd-case .case', 4, {
                        bezier: {
                            curviness: .5,
                            values: [
                                {xPercent: -40,},
                                {xPercent: -10,}
                            ],
                            autoRotate: false
                        },
                    })
                    .to('.cd-case .disc', 4, {
                        bezier: {
                            curviness: 1.25,
                            values: [
                                {xPercent: 60, rotation: 30, zIndex: 2},
                                {xPercent: 20, rotation: 10, zIndex: 10}
                            ],
                            autoRotate: false
                        },
                    }, 0)
                    .to('.cd-case .disc-shadow', 4, {
                        bezier: {
                            curviness: .5,
                            values: [
                                {xPercent: 60},
                                {xPercent: 20}
                            ],
                            autoRotate: false
                        },
                    }, 0);
            } else {
                // default screen animation
                tlDisc
                    .to('.cd-case .case', 4, {
                        xPercent: -20,
                        ease: Power3.easeOut
                    })
                    .fromTo('.cd-case .disc', 4, {
                        rotation: -180,
                    }, {
                        xPercent: 60,
                        rotation: 10,
                        ease: Power3.easeOut
                    }, 0)
                    .to('.cd-case .disc-shadow', 4, {
                        xPercent: 60,
                        ease: Power3.easeOut
                    }, 0);
            }

            let sceneDisc = new ScrollMagic.Scene({
                triggerElement: '.project-start',
                offset: -this.viewport.h / 4,
                duration: this.viewport.h
            })
                .setTween(tlDisc)
                .addTo(this.scroller)
                .reverse(true);

            /**
             * @desc
             * cd gallery scene
             */
            let tlGallery = new TimelineMax();

            tlGallery
                .staggerTo('.gallery-inspiration li', 4, {
                    yPercent: -40,
                    stagger: .5
                });

            let sceneGallery = new ScrollMagic.Scene({
                triggerElement: '.gallery-inspiration',
                offset: -this.viewport.h / 4,
                duration: this.viewport.h * 4
            })
                .setTween(tlGallery)
                .addTo(this.scroller)
                .reverse(true);

            /**
             * @desc
             * cd logo scene
             */
            let tlLogo = new TimelineMax();

            tlLogo
                .staggerTo('.LZeLLPey_0, .LZeLLPey_1, .LZeLLPey_2, .LZeLLPey_3, .LZeLLPey_4', 1, {
                    strokeDashoffset: 0,
                    stagger: 1,
                    ease: Power0.easeNone
                })
                .from('.pepe-logo .text', 5, {
                    autoAlpha: 0,
                    yPercent: -25,
                    ease: Power3.easeOut
                }, 0);

            let sceneLogo = new ScrollMagic.Scene({
                triggerElement: '.pepe-logo',
                offset: -this.viewport.h / 3,
                duration: this.viewport.h
            })
                .setTween(tlLogo)
                .addTo(this.scroller)
                .reverse(true);

        },
        beforeDestroy() {

            this.scroller.destroy();

        }
    };
</script>
