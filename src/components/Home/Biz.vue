<template>
    <div>
        <Titles :viewport="viewport" scene="bizTitle">
            <h1 class="title">
                biz(<span class="params">2011,2019</span>)
            </h1>
        </Titles>

        <section class="scene" id="biz1">
            <div class="static-container">
                <div class="std">
                    <p class="-big">
                        For the past 8 years, I was the <b class="-purple">Head of Product Design and Frontend</b> at
                        <a href="https://www.bizcommerce.com.br/" target="_blank" title="Visit Biz Commerce's website">biz</a>.
                    </p>
                    <p>
                        A SaaS e-commerce platform with a focus on simplifying and customizing the use of
                        <a href="https://magento.com/" target="_blank" title="Visit Magento's website" class="disguised-link">Magento</a>.
                    </p>
                </div>
            </div>
            <div class="container">
                <svg xmlns="http://www.w3.org/2000/svg" id="abiz" viewBox="0 0 100 100" aria-labelledby="aBizTitle aBizDesc">
                    <title id="aBizTitle">Biz, the BizCommerce mascot</title>
                    <desc id="aBizDesc">She is a cute light blue pentagon, holding the Magento logo inside an orange
                        circle
                    </desc>
                    <g class="abiz-abiz">
                        <g class="abiz-body">
                            <path class="abiz-r-arm" fill="none" stroke="#9FD4E5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="8.141" d="M69 60.2s15.6 2.2 13.2 18.4c-2.6 17.5-18.7 3.6-24.5 8.9"/>
                            <path class="abiz-l-arm" fill="none" stroke="#D1F4FC" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="8.141" d="M37.4 61.6C22.9 93 26.6 56.1 12 62.3"/>
                            <g class="abiz-head">
                                <path class="abiz-skin" fill="#D1F4FC" d="M36.1 19.4l21.4-9.5c4.7-2.1 10.3-.9 13.7 2.9l15.7 17.4c3.5 3.8 4.1 9.5 1.5 14L76.7 64.4c-2.5 4.5-7.7 6.8-12.8 5.7 0 0-19.8-4.1-25.3-5.7-4-1.1-6.6-5.3-7-9.6l-2.4-23.3c-.6-5.1 2.2-10 6.9-12.1z"/>
                                <path class="abiz-face" fill="none" stroke="#004E88" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".775" d="M42.6 42.1c-.3 1.6-1.9 2.7-3.5 2.3-1.6-.3-2.7-1.9-2.3-3.5m19.1 4c-.3 1.6-1.9 2.7-3.5 2.3-1.6-.3-2.7-1.9-2.3-3.5m-2.4 7.2c-.3 1.6-1.9 2.7-3.5 2.3-1.6-.3-2.7-1.9-2.3-3.5"/>
                                <path class="abiz-s" fill="#9FD4E5" d="M86.9 30.2L71.2 12.7c-.8-.9-1.7-1.7-2.8-2.3 4.7 6.3 7.6 14.3 7.6 23 0 15.8-9.2 29.2-22.2 34.4C59.2 69 63.9 70 63.9 70c5.1 1.1 10.2-1.2 12.8-5.7L88.4 44c2.6-4.4 2-10-1.5-13.8z"/>
                            </g>
                            <g class="abiz-magento-s">
                                <ellipse class="s" cx="14.8" cy="60.2" fill="#9FD4E5" rx="3.5" ry="1.3"/>
                            </g>
                        </g>
                        <g id="magento">
                            <ellipse class="magento-sphere" cx="14.8" cy="49.2" fill="#FF6D00" rx="4.8" ry="4.8"/>
                            <path class="magento-logo" fill="#FFF" d="M16.8 47.3l-2.6-1.2-2 2 .6 3.6.9.6-.6-3.9.9-.9.7 4.5.5.3.5-.5-.8-4.4 1.2.5.6 3.8.7-.8z"/>
                        </g>
                    </g>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" id="dino" viewBox="0 0 100 100" aria-labelledby="dinoDesc">
                    <desc id="dinoDesc">A purple dinosaur with a red headset, listening and dancing to the music</desc>
                    <g class="dino-dino">
                        <g class="dino-l-arm">
                            <path fill="none" stroke="#7f4fb2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="5.138" d="M55,63.8c0,0-8,2.9-12.6,0.9s-6.3-6.3-6.2-10.2"/>
                        </g>
                        <g class="dino-tail">
                            <path fill="#7f4fb2" d="M69 74.1c5.7.7 10.7-1.8 12.8-3 .5-.3 1.1.1 1 .7-1.8 11.9-23.1 13.6-23.9 14L69 74.1z"/>
                        </g>
                        <g class="dino-l-leg">
                            <path fill="#7f4fb2" d="M55.3 93.6c-.2-2.2-.4-6.9-.1-10.7.2-2-1.2-3.7-3.2-4-1.8-.3-3.5.9-4 2.6l-3.6 11.8c-.3.8.3 1.6 1.2 1.6H54c.8.1 1.3-.5 1.3-1.3z"/>
                        </g>
                        <g class="dino-head">
                            <g class="dino-back-hair">
                                <path fill="#002c58" d="M59.6 15.7S59.7 7 56.8 7s-7 7.4-7 7.4l9.8 1.3z"/>
                                <path fill="#002c58" d="M66.5 19.7s2.3-8.4-.5-9.1-8.6 5.4-8.6 5.4l9.1 3.7z"/>
                            </g>
                            <path class="teeth1" fill="#e7edf1" d="M47.1 48.6H44l1.2 2.7c.1.3.6.3.7 0l1.2-2.7z"/>
                            <path fill="#ab63d6" d="M66.5 53c-.9-2.1-1.2-5.3-1.2-8.9 0-7.4 1.5-16.6 2.1-22.1.3-2.5-1.3-4.9-3.8-5.5-2.7-.6-6.6-1.5-10.8-2-10.8-1.2-24.7-.5-31.3 10-1.8 2.8-8 17.9-1.1 21.7 5.6 3 24.3 3.4 30.1 2.7-.3 4-11.5 10.7-11.5 22.3 0 9.1 7.7 16.3 16.9 16.3 9.3 0 16.9-7.6 16.9-16.9 0-7.4-4.6-13.6-6.3-17.6z"/>
                            <path fill="#9660c7" d="M67.5 22c-.7 5.4-2.1 14.6-2.1 22.1 0 0-3.8.6-4.8-8.7s7.1-18.6-7.7-20.8h-.1c4.3.5 8.1 1.3 10.8 2 2.5.6 4.2 2.9 3.9 5.4z"/>
                            <path class="mouth-chillout" fill="none" stroke="#002c58" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".428" d="M47.7 49.1c9 .1 12.9-2 14-5.5"/>
                            <path class="mouth-fuck-yeah" style="display: none;" fill="none" stroke="#002c58" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".428" d="M54.6,47.1c-0.6,0-0.7,1-3,1"/>
                            <path class="teeth2" fill="#e7edf1" d="M47.7 49.1l1.6 3c.2.3.7.3.9 0l1.2-2.6.2-.5-3.9.1z"/>
                            <g class="dino-headphone">
                                <path fill="#ff0110" d="M71.5 28.1l.6-3.5-6.2-.6-.9 3.8 6.5.3z"/>
                                <path fill="#ff0110" d="M61.1 35.1c0 7.9 6.3 8 8.5 8 3.5 0 4.1-3.6 4.1-8s-.6-8-4.1-8c-4.1 0-8.5.9-8.5 8z"/>
                                <path fill="#ff5153" d="M63.8 35.1c0 4.5 2.3 8 5.8 8 3 0 6.3-3.6 6.3-8s-2.8-8-6.3-8-5.8 3.5-5.8 8z"/>
                                <path fill="#ff5153" d="M33.4 15.7c-.4-.4-.4-.7-.3-1.2 2.1-12.1 24.2-7.2 34-3.8 8.3 3 6.7 11 5.8 14-.2.7-.9 1.1-1.5 1l-4.4-.3h-.7c-.9-.1-1.6-1-1.3-1.9.5-1.4 1-3.4 1.2-5.4.2-2.6-.4-5.1-3-5.9-5.7-1.6-24-7.1-27.2 2.8 0 0-.8.2-1.4.3-.5.2-1.2.4-1.2.4z"/>
                                <path class="dino-sounds" vector-effect="non-scaling-stroke" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M76.5 32.5c2.1-1.8 4.4-3.5 6.7-4.9m-10 .5c.7-1.7.8-7.1-.6-8.6m4.6 18.7c2.5-.4 2 .1 2 2.3 2-.8 5.4.3 7.2 1.8m-11.6.8c-4 3.8 3.6 1.8 3 4.3-.3.9-2.5 1.4-2.4 2.5.7.8 1.7 1.2 2.8 1.3"/>
                            </g>
                            <g class="dino-eye">
                                <circle cx="53" cy="40.3" r="2.8" fill="#002c58"/>
                                <circle class="dino-bright" cx="53.7" cy="38.7" r=".7" fill="#e7edf1"/>
                            </g>
                            <g class="dino-front-hair">
                                <path fill="#002c58" d="M34.8 15.3c-.3-.6-2.8-4.8-4.4-3.7-1.5 1.1-.9 4.8-.8 5.6 1.7-.8 3.4-1.4 5.2-1.9z"/>
                                <path fill="#002c58" d="M42.2 14.2c-.5-1.1-3.2-6.6-4.8-6-1.4.5-2.1 5.1-2.4 7.1 2.3-.6 4.8-1 7.2-1.1z"/>
                                <path fill="#002c58" d="M50.8 14.4c-.2-1.4-2-9.4-4.2-9.4-2.3 0-4.1 8-4.3 9.2 2.9-.2 5.8-.1 8.5.2z"/>
                            </g>
                        </g>
                        <g class="dino-r-leg">
                            <path fill="#ab63d6" d="M67.4 93.6c-.2-2.2-.4-6.9-.1-10.7.2-2-1.2-3.7-3.2-4-1.8-.3-3.5.9-4 2.6l-3.6 11.8c-.3.8.3 1.6 1.2 1.6h8.4c.8.1 1.4-.5 1.3-1.3z"/>
                        </g>
                        <g class="dino-r-arm">
                            <path fill="none" stroke="#ae71db" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="5.138" d="M64.8 59.4s4.1 6.6-.6 8.3c-4.8 1.6-9-.3-11.5-3.3"/>
                        </g>
                    </g>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" id="astro" viewBox="0 0 100 100" aria-labelledby="astroDesc">
                    <desc id="astroDesc">An astronaut in a purple space suit, floating in space trying to reach for his
                        coffee cup
                    </desc>
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
                <svg v-if="!viewport.is1024" xmlns="http://www.w3.org/2000/svg" id="filomena" viewBox="0 0 100 100" aria-labelledby="filomenaDesc">
                    <desc id="filomenaDesc">A calm orange shrimp, with a smile on her face, swimming with her little
                        legs
                    </desc>
                    <g class="filomena-filomena">
                        <g class="filomena-back-skirt">
                            <path fill="#00979d">
                                <animate dur="3s"
                                         repeatCount="indefinite"
                                         attributeName="d"
                                         values="M53.5 75.5c2.6 8.1-31.3 13.1-37.1-.4-2-4.8 36.5-1.5 37.1.4z;
                                     M44.3 75.2c-5.7 13.5-39.6 8.5-37.1.4.7-2 39.1-5.3 37.1-.4z;
                                     M53.5 75.5c2.6 8.1-31.3 13.1-37.1-.4-2-4.8 36.5-1.5 37.1.4z;"
                                         calcMode="spline"
                                         keySplines="0.455 0.03 0.515 0.955;
                                     0.455 0.03 0.515 0.955"/>
                            </path>
                        </g>
                        <path class="filomena-l-foot" fill="#ff9360" d="M51.8 93.6l9.2-5.5c1.9-1.2 3.2-3.2 3.3-5.5l.3-8c0-.4-.6-.7-.9-.3L51.2 93c-.3.4.1.9.6.6z"/>
                        <path class="filomena-l-arm" fill="#ff5d39" d="M45.9 56.3c-.2.1-.1.4.2.3l27-8.9c.3-.1.2-.5-.1-.5l-11.8.1-15.3 9z"/>
                        <path class="filomena-l-mustache" fill="none" stroke="#ff5d39" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.09">
                            <animate dur="3s"
                                     repeatCount="indefinite"
                                     attributeName="d"
                                     values="M28.1 18.2c12.8 32.6 53-23 64.7 2.6 3.6 8 0 23.6-16.2 20.2;
                                 M28.1 31.4C51.5 8 81.1-1.6 92.8 24c3.6 8 0 20.3-16.2 16.9;
                                 M28.1 18.2c12.8 32.6 53-23 64.7 2.6 3.6 8 0 23.6-16.2 20.2;"
                                     calcMode="spline"
                                     keySplines="0.455 0.03 0.515 0.955;
                                     0.455 0.03 0.515 0.955"/>
                        </path>
                        <g class="filomena-body">
                            <path fill="#ff6d42" d="M51.8 91c-3.6 0-8.9-5.2-11.9-12.1-4.9-11.5 3.8-17.7 15.2-23.6 4.7-2.4 10.2-7.1 14.5-9.3 17.7-9 16.2-26.7 14.9-26-1.9 1-11.9 6.1-22.8 11.7l2.9-3.2c.1-.1 0-.1-.1-.1l-14.9 9.3c-5.9 3.1-11.3 5.8-14.6 7.5-9.7 5-12.6 15.2-13.1 18.5-.5 3.3-.5 6.3.1 9.3 1.9 10.4 9.9 17 12.1 18.2 8.3 4.6 14.2 3.9 17.7 3.9 4-.1 3.4-4.1 0-4.1z"/>
                            <path fill="#ff9360" d="M47 59.8c-2.5-3.9-4.5-12.4-5.5-17.9C43.2 41 45 40 47 39.1c3.8 5.9 10.8 9.2 18.6 9.3-3.4 2.3-7.1 5.2-10.5 6.9-2.9 1.3-5.7 2.9-8.1 4.5z"/>
                            <path fill="#ff9360" d="M40.9 65.5c-1.6 2.2-2.5 4.6-2.4 7.4-4.4-.6-12.6-8.5-15.9-11.8 1.1-3.9 3.8-10 9.7-14.1 1.3 5.6 3.8 14.3 8.6 18.5z"/>
                        </g>
                        <path class="filomena-face" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".545" d="M61.2 35.7c.4.9 1.5 1.3 2.5.9s1.3-1.5.9-2.5m2-1c.4.9 1.5 1.3 2.5.9.9-.4 1.3-1.5.9-2.5m4.6 3.5c.3.6 1 .8 1.6.5.6-.3.8-1 .5-1.6"/>
                        <path class="filomena-r-mustache" fill="none" stroke="#ff9461" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.09">
                            <animate dur="3.4s"
                                     repeatCount="indefinite"
                                     attributeName="d"
                                     values="M18.9 34C37 15.9 92.5-14.6 92.5 22.6c0 12.2-9.3 18.4-18.4 18.4;
                                 M18.9 24.6c25.9 28.5 73.7-39.2 73.7-2 0 12.2-9.3 18.4-18.4 18.4;
                                 M18.9 34C37 15.9 92.5-14.6 92.5 22.6c0 12.2-9.3 18.4-18.4 18.4;"
                                     calcMode="spline"
                                     keySplines="0.455 0.03 0.515 0.955;
                                     0.455 0.03 0.515 0.955"/>
                        </path>
                        <path class="filomena-r-arm" fill="#ff9360" d="M45.7 60.1c-.2.1-.1.4.2.3l27-8.9c.3-.1.2-.5-.1-.5H61l-15.3 9.1z"/>
                        <g class="filomena-skirt">
                            <path fill="#00C8CA">
                                <animate dur="3s"
                                         repeatCount="indefinite"
                                         attributeName="d"
                                         values="M29.3 49.3S8.4 61.4 16.7 75.7c2.5 4.3 7.9 5.7 12.9 5.7 6.4 0 20.4-7.6 23.9-5.7-.2-1.4-2.6-2.8-4.7-3.1-2-.3-5.9-.2-7.4-1.9-2.3-2.5.4-6.3.4-6.3L29.3 49.3z;
                                     M29.3 49.3S-.8 63.4 7.4 77.6c4.9-6.4 16.5 2.7 24.8 2.7 6.4 0 9.7-1.6 12-4.5.9-1.6-.1-3.6-1.1-5.1-1.1-1.7-2.6-3.3-2.1-4.6.3-.8.9-1.8.9-1.8l-12.6-15z;
                                     M29.3 49.3S8.4 61.4 16.7 75.7c2.5 4.3 7.9 5.7 12.9 5.7 6.4 0 20.4-7.6 23.9-5.7-.2-1.4-2.6-2.8-4.7-3.1-2-.3-5.9-.2-7.4-1.9-2.3-2.5.4-6.3.4-6.3L29.3 49.3z;"
                                         calcMode="spline"
                                         keySplines="0.455 0.03 0.515 0.955;
                                     0.455 0.03 0.515 0.955"/>
                            </path>
                        </g>
                        <path class="filomena-r-foot" fill="#ff6d42" d="M72.3 71.7c-5.6 4.9-15.6 14.7-20.6 19.9-1.1 1.2-.7 3.7 1.3 3.2 4-.9 9.3-3.7 14.3-8.6 4.5-4.4 4.9-10.2 5.9-13.9.2-.6-.5-1-.9-.6z"/>
                    </g>
                </svg>
                <svg v-if="!viewport.is1024" xmlns="http://www.w3.org/2000/svg" id="octo" viewBox="0 0 100 100" aria-labelledby="octoDesc">
                    <desc id="octoDesc">A green one-eyed octopus, smiling and swimming around with his little
                        tentacles
                    </desc>
                    <g class="octo-octo">
                        <path class="octo-arm-6" fill="none" stroke="#00c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="8.301">
                            <animate dur="1.01s"
                                     repeatCount="indefinite"
                                     attributeName="d"
                                     values="M27.4 44s6.3 13.4 14 1.8;
                 M27.4 77.2s6.3-19.8 14-31.4;
                 M27.4 44s6.3 13.4 14 1.8;"
                                     calcMode="spline"
                                     keySplines="0.455 0.03 0.515 0.955;
                 0.455 0.03 0.515 0.955"/>
                        </path>
                        <path class="octo-arm-5" fill="none" stroke="#00c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="8.301">
                            <animate dur="1s"
                                     repeatCount="indefinite"
                                     attributeName="d"
                                     values="M27.4 50.8s9.3 11.4 17.6-.9;
                 M32.1 86.8s4.5-24.6 12.8-36.9;
                 M27.4 50.8s9.3 11.4 17.6-.9;"
                                     calcMode="spline"
                                     keySplines="0.455 0.03 0.515 0.955;
                 0.455 0.03 0.515 0.955"/>
                        </path>
                        <path class="octo-arm-4" fill="none" stroke="#00c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="8.301">
                            <animate dur="1.02s"
                                     repeatCount="indefinite"
                                     attributeName="d"
                                     values="M34.2 56.9s10.5 9.2 14.6-4.7;
                 M40.3 92.7s4.4-26.6 8.6-40.5;
                 M34.2 56.9s10.5 9.2 14.6-4.7;"
                                     calcMode="spline"
                                     keySplines="0.455 0.03 0.515 0.955;
                 0.455 0.03 0.515 0.955"/>
                        </path>
                        <path class="octo-arm-3" fill="none" stroke="#00c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="8.301">
                            <animate dur=".99s"
                                     repeatCount="indefinite"
                                     attributeName="d"
                                     values="M72.8 51.9s-11.4 10.8-14.7-2.7;
                 M62.6 86.8s-1.2-24.1-4.5-37.6;
                 M72.8 51.9s-11.4 10.8-14.7-2.7"
                                     calcMode="spline"
                                     keySplines="0.455 0.03 0.515 0.955;
                 0.455 0.03 0.515 0.955"/>
                        </path>
                        <path class="octo-arm-2" fill="none" stroke="#00c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="8.301">
                            <animate dur="1s"
                                     repeatCount="indefinite"
                                     attributeName="d"
                                     values="M68.7 57.5s-11.6 8.8-15.4-5.6;
                 M57 92.7s.1-26.4-3.7-40.8;
                 M68.7 57.5s-11.6 8.8-15.4-5.6;"
                                     calcMode="spline"
                                     keySplines="0.455 0.03 0.515 0.955;
                 0.455 0.03 0.515 0.955"/>
                        </path>
                        <path class="octo-arm-1" fill="none" stroke="#00c7c7" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="8.301">
                            <animate dur="1.03s"
                                     repeatCount="indefinite"
                                     attributeName="d"
                                     values="M58.7 65.5s-9.9 9.3-9.9-12.7;
                 M47.8 93.9s1.1-19.1 1.1-41.1;
                 M58.7 65.5s-9.9 9.3-9.9-12.7;"
                                     calcMode="spline"
                                     keySplines="0.455 0.03 0.515 0.955;
                 0.455 0.03 0.515 0.955"/>
                        </path>
                        <g class="octo-head">
                            <ellipse cx="54.1" cy="31.9" fill="#00c7c7" rx="25.7" ry="23.6" transform="rotate(-78.217 54.138 31.903)"/>
                            <path fill="none" stroke="#004e88" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.038" d="M60.2 45.3c-.7 3.3-5 5.3-9.5 4.3-4.6-.9-7.7-4.5-7.1-7.8"/>
                            <g class="octo-eye">
                                <ellipse cx="54.5" cy="30.6" fill="#fff" rx="12.2" ry="11.7" transform="rotate(-78.217 54.504 30.64)"/>
                                <ellipse cx="54.5" cy="30.9" fill="#003456" rx="4.5" ry="4.3" transform="rotate(-78.217 54.49 30.873)"/>
                                <ellipse cx="57" cy="29.9" fill="#fff" rx="1.1" ry="1.1"/>
                            </g>
                        </g>
                    </g>
                </svg>
                <svg v-if="!viewport.is768" xmlns="http://www.w3.org/2000/svg" id="et" viewBox="0 0 100 200" aria-labelledby="etDesc">
                    <desc id="etDesc">A little green alien, flying around in its purple spaceship</desc>
                    <linearGradient id="etLight" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stop-color="#f00" stop-opacity=".75"/>
                        <stop offset="100%" stop-color="#f00" stop-opacity="0"/>
                    </linearGradient>
                    <linearGradient id="etLight2" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stop-color="#0ff" stop-opacity=".75"/>
                        <stop offset="100%" stop-color="#0ff" stop-opacity="0"/>
                    </linearGradient>
                    <g class="et-et">
                        <g class="et-light">
                            <path fill="url(#etLight2)" d="M50 12.5L0 191.6h100L50 12.5z"/>
                        </g>
                        <g class="et-ship">
                            <path fill="#5f1b9a" d="M60.7 20.2c.1-2.4-5-5.2-10.4-5.3s-10.7 2-10.8 4.5c0 1.4 1.5 3.2 3.9 4.5l-.1 2.5c0 .1.1.3.3.3H45c.1 0 .3-.1.3-.3l.1-1.7c1.4.5 2.9.9 4.5.9 1.7.1 3.4-.2 4.9-.7l-.1 1.7c0 .1.1.3.3.3h1.4c.1 0 .3-.1.3-.3l.1-2.5c2.3-1 3.9-2.5 3.9-3.9z"/>
                            <ellipse cx="50.3" cy="17.2" fill="#a95ed4" rx="11.8" ry="6.8"/>
                            <g class="et-body">
                                <path fill="#00b1e5" d="M50.2 19.7c1.6.1 3.1-.2 4.3-.8 0-.1 0-.2.1-.4l.2-5.9c.1-2.3-1.8-4.3-4.2-4.4-2.4-.1-4.4 1.8-4.5 4.1l-.2 5.9v.5c1.2.8 2.7 1 4.3 1z"/>
                                <g class="et-eye">
                                    <ellipse cx="50.4" cy="13.3" fill="#fff" rx="2.5" ry="2.5"/>
                                    <ellipse cx="50.4" cy="13.3" fill="#004e88" rx="1" ry="1"/>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
                <svg v-if="!viewport.is568" xmlns="http://www.w3.org/2000/svg" id="zen" viewBox="0 0 100 100" aria-labelledby="zenDesc">
                    <desc id="zenDesc">A white-bearded monk meditating quietly</desc>
                    <g class="zen-zen">
                        <g class="zen-legs">
                            <path class="zen-l-leg" fill="none" stroke="#ffae00" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="7.213" d="M34.4 90s8.1-.4 13.8-5.3"/>
                            <path class="zen-r-leg" fill="none" stroke="#ffae00" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="7.213" d="M65.5 90s-8.1-.4-13.8-5.3"/>
                        </g>
                        <g class="zen-arms">
                            <path class="zen-l-arm" fill="none" stroke="#ffae00" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="5.246" d="M32.8 66.1s-6.4 5.2-10.6-2"/>
                            <path class="zen-r-arm" fill="none" stroke="#ffae00" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="5.246" d="M66.8 66.1s6.4 5.2 10.6-2"/>
                        </g>
                        <path class="zen-body" fill="#0cc" d="M28.8 64.4c-.7 1.9-.5 3.9 4.4 5.4 0 0-1.3 7.7 2.4 11.9 0 0-2.6 2.2-3.7 4.7-1 2.2 15.1-.4 18.2-1 3.9.7 18.9 3.2 17.9 1-1.1-2.5-3.7-4.7-3.7-4.7 3.7-4.2 2.4-11.9 2.4-11.9 4.9-1.5 5.2-3.5 4.5-5.4-1.6-4.1-11.4-7-20.7-7-9.3.1-20.1 3-21.7 7z"/>
                        <g class="zen-head">
                            <path fill="#ffae00" d="M27.2 34.4c2.8 0 5 2.3 5 5.2s-2.3 5.2-5 5.2-5-2.3-5-5.2 2.2-5.2 5-5.2z"/>
                            <path fill="#ffae00" d="M72.8 34.4c2.8 0 5 2.3 5 5.2s-2.3 5.2-5 5.2-5-2.3-5-5.2 2.1-5.2 5-5.2z"/>
                            <path fill="#fff" d="M50 10c13.1 0 23.8 12.9 23.8 28.8S63.2 67.6 50 67.6 26.2 54.7 26.2 38.8 36.9 10 50 10z"/>
                            <path fill="#ffae00" d="M50 14.9c11.9 0 21.6 10.4 21.6 23.3S62 61.5 50 61.5 28.4 51.2 28.4 38.3 38.1 14.9 50 14.9z"/>
                            <path fill="#fff" d="M50 47.4c7.5 0 13.5 6 13.5 13.5V66c0 7.5-6 13.5-13.5 13.5s-13.5-6-13.5-13.5v-5.1c-.1-7.5 6-13.5 13.5-13.5z"/>
                            <path fill="#fff" d="M50.1 11.8c4.8 0 8.6-1.6 8.6 3.2v5.7c0 4.8-3.9 8.7-8.7 8.7-4.8 0-8.7-3.9-8.7-8.7V15c0-4.7 4-3.2 8.8-3.2z"/>
                            <g class="zen-mustache">
                                <path class="zen-r-mustache_1_" fill="#c2e3ed" d="M50.5 45.8s-1 7.8 6.5 7.8h8s1-7.5-6-7.5-8.5-.3-8.5-.3z"/>
                                <path class="zen-l-mustache" fill="#c2e3ed" d="M49.3 45.8s.9 7.8-6.4 7.8h-8s-1-7.5 6-7.5c6.9 0 8.4-.3 8.4-.3z"/>
                            </g>
                            <path class="zen-nose" fill="#ff3e4b" d="M53.3 44.3c0 1.8-1.4 3.3-3.3 3.3-1.8 0-3.3-1.5-3.3-3.3 0-1.8 3.3-7.3 3.3-7.3s3.3 5.5 3.3 7.3z"/>
                            <g class="zen-eyes">
                                <path fill="none" stroke="#003359" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.312" d="M39.3 35.2c1 .9 2.4 1.4 3.9 1.4 1.4 0 2.8-.5 3.8-1.4"/>
                                <path fill="none" stroke="#003359" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.312" d="M53 35.2c1 .9 2.4 1.4 3.9 1.4 1.4 0 2.8-.5 3.8-1.4"/>
                            </g>
                        </g>
                    </g>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" id="open" viewBox="0 0 100 100">
                    <g class="open-open">
                        <path fill="var(--purple)" d="M90 70.2l-2-44.1c-.5-9.3-8.4-16.5-17.8-16.1l-44.1 2c-9.3.5-16.5 8.4-16.1 17.8l2 44.1c.4 9.3 8.4 16.6 17.7 16.1l44.1-2c9.4-.5 16.6-8.4 16.2-17.8z"/>
                    </g>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" id="smart" viewBox="0 0 100 100">
                    <g class="smart-smart">
                        <path fill="var(--purple)" d="M80.1 39.2L34.2 11.9c-8.8-5.2-19.9 1-20.1 11.2l-.7 53.4c-.1 10.2 10.8 16.7 19.8 11.8l46.6-26.1c8.9-5 9.1-17.8.3-23z"/>
                    </g>
                </svg>
            </div>
        </section>
        <section class="scene" id="biz2">
            <div class="static-container">
                <div class="std">
                    <p>
                        Throughout these years we delivered over
                        <span class="-big -purple">200 tools, modules, APIs, themes, and customized projects</span>
                        for hundreds of online stores and services.
                    </p>
                </div>
            </div>
        </section>
        <section class="scene" id="biz3">
            <div class="static-container">
                <div class="std">
                    <p>
                        biz currently runs on
                        <span class="-big">
                            <span class="-purple">600+ stores</span>, payment/shipping services and <span class="-purple">thousands of transactions</span> daily.
                        </span>
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import Titles from './Titles.vue';

    export default {
        name: 'Biz',
        props: {
            viewport: Object
        },
        components: {
            Titles,
        }
    }
</script>