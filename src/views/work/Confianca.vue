<template>
    <div id="confianca" class="wrapper">

        <div class="static-container">
            <h1 class="title">
                work<br v-if="viewport.is568">(<span class="params">'Confiança'</span>)
            </h1>

            <div class="std">
                <p class="-purple -full" v-if="viewport.is568">
                    // Head of Project<br>
                    // UX/UI<br>
                    // Frontend<br>
                    // Magento v1<br>
                </p>
                <p class="-purple -full" v-else>
                    // Head of Project, UX/UI and Frontend<br>
                    // Magento v1
                </p>
                <a href="https://www.confianca.com.br" title="Access website" target="_blank" class="bt">
                    confianca.com.br <svg class="nav-ico -blank" viewBox="0 0 16 16"><path d="M5,1h10v10 M5.5,10.5l0.8-0.8"/></svg>
                </a>

                <h2 class="subtitle">
                    Less choices,<br>
                    more confidence
                </h2>
                <p class="-gray">
                    Confiança is a supermarket chain operating in several cities within state of São
                    Paulo, Brazil. A few years ago they started their first e-commerce, but with the growing need for
                    flexibility, the platform needed to be redesigned.
                </p>
            </div>

            <div class="project-start"></div>

            <div class="mobile-screens" role="img" aria-labelledby="mobileScreensAlt">
                <p id="mobileScreensAlt" class="ariaLabel">Five screens of smartphones showing different pages and features of this web delivery application</p>
                <div class="screen s1"></div>
                <div class="screen s2"></div>
                <div class="screen s3"></div>
                <div class="screen s4"></div>
                <div class="screen s5"></div>
            </div>

            <div class="std">
                <h3 class="-red">// Problems</h3>
                <ul>
                    <li>Slow and poor navigation</li>
                    <li>extensive purchase flow</li>
                    <li>difficulty to customize orders</li>
                    <li>messy mobile</li>
                </ul>
                <h3 class="-green">// My role</h3>
                <p>
                    I was responsible for the project concept and its implementation.<br>
                    Designing views, the frontend between Magento and Vue.js, and setting up the integration API scope for our development team - since Magento v1 did not have an API that would meet the needs of the project.
                </p>

                <h2 class="subtitle">Endless flow</h2>
                <p>
                    All the loading was hidden from the user, making navigation completely free from the system's needs, allowing for a much faster and enjoyable experience. The user only sees some loading when there is a problem, otherwise, we never bother the user with processes like checking stock, updating shipping rates or anything "taken for granted" on an ideal scenario.<br>
                    The rate of errors or moments when we need to show some important information occurs with less than 10% of the users, and all the others 90% enjoy a hassle free experience.
                </p>

                <h2 class="subtitle">
                    One button<br>
                    to rule them all
                </h2>

                <div class="oneButton-placeholder">
                    <div class="oneButton-container">
                        <button class="oneButton" type="button" title="Click to buy" @click="addQty">
                            <span class="label">buy</span>
                        </button>
                        <div class="oneButton-aside" :class="{ 'hide': qty < 1 }">
                            <button class="minus" type="button" title="Click to remove 1" @click="removeQty">
                                <span class="label">
                                    <template v-if="qty === 1">✕</template>
                                    <template v-else>-</template>
                                </span>
                            </button>
                            <div class="label">+1</div>
                            <button class="plus" type="button" title="Click to add 1" @click="addQty">
                                <span class="label">+</span>
                            </button>
                        </div>
                        <transition>
                            <div class="counter" v-show="qty > 0">{{qty}}</div>
                        </transition>
                    </div>
                </div>

                <p>
                    To further increase speed, we needed to narrow the choices. Yes, choices are important, but we don't want to have choose all the time.<br>
                    The easier and simpler the choice, the better our brain will react to it, as we feel less pressured.<br>
                    Thus several "unnecessary" choices were incorporated directly into the buy button:
                </p>
                <ul>
                    <li>
                        <strong class="-purple">Stock validation</strong><br>
                        You don't need to worry about the stock, it is impossible to buy above stock or any quantity that is not available for that item at that time.<br>
                        The stock system is updated in real time and then it updates all the rules for every item.
                    </li>
                    <li>
                        <strong class="-purple">Increase or decrease quantity</strong><br>
                        With 1 click you control the quantity, and if the product is sold in increments, this is already calculated automatically.<br>
                        If you type the quantity the system rounds it to a valid number automatically.
                    </li>
                    <li>
                        <strong class="-purple">You get what you asked for</strong><br>
                        If the price or any other value for that product is affected by the quantity, it is instantaneously updated throughout the whole interface.
                        So even if you already have that item in the cart, all the prices and shipping rates you see are exactly the ones you will pay.
                    </li>
                    <li>
                        <strong class="-purple">It does what it’s supposed to do</strong><br>
                        By clicking the button you add an item to the cart, if you repeat the action you keep adding items. Simple.
                    </li>
                </ul>
                <p>
                    This decreases several steps of a normal process such as validating stock after adding an item, warning you after a page reload that this product is only available in increments of 3 and leaving you with the math.<br>
                    And even have a cart page to edit your order is no longer necessary.
                </p>
            </div>
            
            <div class="scroll-pages">
                <div class="desktop">
                    <img src="@/assets/work/confianca/scroll-desktop.jpg" alt="The home page for the desktop version of Confiança Delivery scrolling inside a screen">
                </div>
                <div class="mobile">
                    <div class="case">
                        <img src="@/assets/work/confianca/scroll-mobile.jpg" alt="The home page for the mobile version of Confiança Delivery scrolling inside a smartphone screen">
                    </div>
                </div>
            </div>

            <div class="std">

                <h2 class="subtitle">
                    Less walking,<br>
                    more buying
                </h2>
                <p>
                    Instead of having fragmented navigation that leads you to navigate the categories, we've chosen to keep the user in the same place, allowing them to do as much as possible.
                </p>
                <p>
                    The search was made to be extremely fast, with a great auto-complete, and at the same time work like any other catalog page.
                </p>
                <p>
                    When you buy an item, you see a few options to continue buying other items you normally purchase together, avoiding the need to search in most cases.
                </p>
                <p>
                    The login, the cart, the shipping, and the discount steps were merged into a single tab and can be viewed and edited at any time without the need to stop buying.
                </p>

                <h2 class="subtitle">
                    Customize on the fly
                </h2>
                <p>
                    The users are able to add notes to each item in their order and ask for specific details if they want to. These notes can be edited at any time, at any step before the checkout.
                </p>

                <h2 class="subtitle fillLikeHome">
                    Fell like home
                </h2>
                <p>
                    I've tried to create an interface that does not contrast with any other interface that a regular smartphone user has not already seen, and thus create a sense of comfort, like knowing what to do and what will happen when clicking something.<br>
                    This feeling is fundamental when you want to take your design out of the way and let the actions take the spotlight.
                </p>

            </div>

            <nav class="work-nav">
                <h3>// More...</h3>
                <ul>
                    <li class="prev">
                        <router-link to="/work/desbravando" title="Desbravando">
                            <svg class="nav-ico -prev" viewBox="0 0 16 16"><path d="M5,1h10v10 M5.5,10.5l0.8-0.8"/></svg>
                            Desbravando...
                        </router-link>
                    </li>
                    <li class="next">
                        <router-link to="/work/admin-panel" title="Admin Panel">
                            ...Admin Panel
                            <svg class="nav-ico -next" viewBox="0 0 16 16"><path d="M5,1h10v10 M5.5,10.5l0.8-0.8"/></svg>
                        </router-link>
                    </li>
                </ul>
            </nav>

            <div class="end-screens" aria-labelledby="endScreensAlt">
                <p id="endScreensAlt" class="ariaLabel">Four screens of smartphones showing different actions of this web delivery application</p>
                <div class="screen s1"></div>
                <div class="screen s2"></div>
                <div class="screen s3"></div>
                <div class="screen s4"></div>
            </div>

        </div>

    </div>
</template>

<script>
    // styles
    import '@/styles/work.scss'
    import '@/styles/work/confianca.scss'
    // ScrollMagic
    import * as ScrollMagic from "scrollmagic";

    export default {
        name: 'confianca',
        props: {
            viewport: Object,
        },
        data() {
            return {
                intro: new TimelineMax(),
                scroller: new ScrollMagic.Controller(),
                qty: 0,
            }
        },
        methods: {
            addQty(){
                if (this.qty === 10) return false; // limit
                return this.qty++
            },
            removeQty(){
                if(this.qty <= 1) return this.qty = 0;
                return this.qty--;
            },
        },
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
                offset: this.viewport.h/4,
                duration: document.body.offsetHeight
            })
                .addTo(this.scroller)
                .reverse(true);
            sceneBg
                .on('enter', (e) => {
                    document.body.classList.add('-confianca-bg');
                })
                .on('leave', (e) => {
                    if(e.scrollDirection === 'REVERSE') {
                        document.body.classList.remove('-confianca-bg');
                    }
                });

            /**
             * @desc
             * mobile screens scene
             */
            let tlMobile = new TimelineMax();

            tlMobile
                .staggerFrom('.screen', 4, {
                    autoAlpha: 0,
                    yPercent: 25,
                    stagger: .5,
                    ease: Power3.easeOut,
                });

            let sceneMobile = new ScrollMagic.Scene({
                triggerElement: '.project-start',
                offset: -this.viewport.h / 4,
                duration: this.viewport.h
            })
                .setTween(tlMobile)
                .addTo(this.scroller)
                .reverse(true)
                .setClassToggle('.mobile-screens', "active");

            /**
             * @desc
             * scroll screens scene
             */
            let tlScrolls = new TimelineMax();

            tlScrolls
                .to('.scroll-pages img', 4, {
                    top: '-100%',
                })
                .to('.scroll-pages .mobile', 4, {
                    yPercent: 20,
                }, 0);

            let sceneScrolls = new ScrollMagic.Scene({
                triggerElement: '.scroll-pages',
                duration: this.viewport.h
            })
                .setTween(tlScrolls)
                .addTo(this.scroller)
                .reverse(true)
                .setClassToggle('.scroll-pages', "active");

            /**
             * @desc
             * end screens scene
             */
            let tlEnd = new TimelineMax(),
                end = document.querySelector('.end-screens').offsetHeight;

            tlEnd
                .staggerFrom('.end-screens .screen', 4, {
                    xPercent: -50,
                    ease: Power3.easeOut,
                    stagger: .2
                });

            let sceneEnd = new ScrollMagic.Scene({
                triggerElement: '.end-screens',
                offset: -end,
                duration: end
            })
                .setTween(tlEnd)
                .addTo(this.scroller)
                .reverse(true)
                .setClassToggle('.end-screens', "active");

        },
        beforeDestroy() {

            this.scroller.destroy();

        }
    };
</script>
