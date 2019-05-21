<template>
    <div id="err404" class="wrapper">

        <div class="static-container">
            <h1 class="title">
                err(<span class="params">404</span>)
            </h1>

            <div class="std">
                <p class="-big">Lost?</p>

                <p>The page you requested could not be found.</p>
                <router-link to="/" title="Back home" class="bt">
                    <svg class="nav-ico -prev" viewBox="0 0 16 16"><path d="M5,1h10v10 M5.5,10.5l0.8-0.8"/></svg>
                    Back home
                </router-link>
            </div>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" id="astro" viewBox="0 0 100 100">
            <g class="astro-astro">
                <g class="astro-tube">
                    <path fill="none" stroke="#e2f1f7" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="5.061" d="M62.3 58.8s10.4 3.6 14.5-8.1-8.6-18.4-8.6-18.4"/>
                </g>
                <g class="astro-l-arm">
                    <path fill="#8b55bb" d="M34.4,58.8L16.7,45.3c-1.2-0.9-1.4-2.6-0.5-3.8l4.3-5.7c0.9-1.2,2.6-1.4,3.8-0.5L42,48.8 C42,48.8,34.4,58.8,34.4,58.8z"/>
                </g>
                <g class="astro-l-leg">
                    <path fill="#8b55bb" d="M38.9 76.7L18.3 91.4c-1.2.9-2.9.6-3.8-.6L8 81.7c-.9-1.2-.6-2.9.6-3.8l20.6-14.8c3.7-2.7 9-1.8 11.6 1.9 2.7 3.8 1.8 9-1.9 11.7z"/>
                </g>
                <g class="astro-head">
                    <path fill="#a95ed4" d="M78.3 28.9c0 7.1-3.1 13.4-8 17.8-4.2 3.8-9.8 6-15.9 6-7.9 0-14.8-3.8-19.2-9.6-3-4-4.7-8.9-4.7-14.2C30.5 15.7 41.2 5 54.4 5s23.9 10.7 23.9 23.9z"/>
                    <path fill="#563388" d="M70.3 46.7c-4.2 3.8-9.8 6-15.9 6-7.9 0-14.8-3.8-19.2-9.6 4.4-3.1 9.7-4.9 15.5-4.9 7.7 0 14.7 3.3 19.6 8.5z"/>
                    <path fill="#170609" d="M32.4 28.8c-.4-7.3 3.8-15.3 11.5-18.3s21-1.2 23.4 9.5c2.4 10.7-7.8 10.9-17 11.8-9.2.9-17.2 9.6-17.9-3z"/>
                    <path fill="#fff" d="M46.8 14.2c4.7-1 9.1-.8 12.3.3 0-.5-.7-1.2-2.6-1.8-12-3.8-20.8 6.9-20.8 6.9h.1c2.4-2.4 6.4-4.4 11-5.4z"/>
                </g>
                <g class="astro-body">
                    <path fill="#a95ed4" d="M68.9 61.3c.2-1.5 1.3-2.8 2.8-3.1l19.2-4c1.1-.2 1.8-1.3 1.6-2.5l-1.9-8.6c-.2-1.1-1.3-1.8-2.5-1.6L67.6 46c-18.6-13.4-40.9.7-40.1 19 .8 21 38.6 25.8 41.4-3.7z"/>
                </g>
                <g class="astro-r-leg">
                    <path fill="#a95ed4" d="M44.4 75.9l-8.5 17.6c-.7 1.4-2.3 1.9-3.6 1.3l-10.1-4.9c-1.4-.7-1.9-2.3-1.3-3.6l8.5-17.6c2-4.1 7-5.9 11.1-3.9 4.2 2 5.9 7 3.9 11.1z"/>
                </g>
            </g>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" id="coffee" viewBox="0 0 20 20">
            <g class="coffee-coffee">
                <path class="coffee-cup" fill="#7b4dad" d="M17.8 5.5c-.5-.3-1.1-.3-1.6-.1v-.2c-.1-.6-.2-2.6-8-1.4S.9 7 1 7.7c.4 2.7 2.4 5.7 5.2 6.9 0 .2 0 .3.1.5.2 1.1 1.9 1.6 3.9 1.3 2-.3 3.4-1.3 3.2-2.4 0-.2-.1-.4-.1-.5.7-.6 1.3-1.4 1.7-2.2.2.1.4.3.6.4.3.2.7.2 1 .2.8-.1 1.6-.9 2.1-2.1.6-2 .3-3.7-.9-4.3zm-.1 3.7c-.4 1.1-1.2 1.7-1.8 1.4-.2-.1-.3-.2-.4-.3.5-1.2.8-2.4.8-3.6.2-.1.4-.2.5-.2.2 0 .4 0 .5.1.7.3.8 1.4.4 2.6z"/>
                <path class="coffee-liquid" fill="#3e1e00" d="M8.4 4.9C5 5.4 2.4 6.4 2.5 7c.1.7 2.9.8 6.2.3 3.3-.5 6-1.5 5.9-2.2s-2.9-.7-6.2-.2z"/>
            </g>
        </svg>

    </div>
</template>

<script>
    // styles
    import '@/styles/err404.scss';
    // loop animations
    import Astro from "@/js/astro";
    import Coffee from "@/js/coffee";

    export default {
        name: '404',
        data() {
            return {
                intro: new TimelineMax()
            }
        },
        methods: {},
        mounted() {

            /**
             * @desc
             * Intro scene
             */
            this.intro
                .addLabel('enter', 1)
                .from('.title', 2, {
                    autoAlpha: 0,
                    rotationX: 90,
                    transformOrigin: '50% 50% -100px',
                    ease: Power3.easeOut,
                }, 'enter')
                .from('.std', 2, {
                    autoAlpha: 0,
                    x: -32,
                    ease: Power3.easeOut,
                }, 'enter+=1.5');

            // animate character
            // setup
            Astro.build();
            Coffee.build();
            // play
            Astro.play();
            Coffee.play();

        },
        beforeDestroy() {

            // garbage
            this.intro.destroy();

        }
    };
</script>
