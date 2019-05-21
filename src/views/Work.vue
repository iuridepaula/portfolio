<template>
    <div id="work" class="wrapper">

        <div class="static-container">
            <h1 class="title">
                work<br v-if="viewport.is568">(<span class="params">'selected'</span>)
            </h1>

            <div class="std">
                <p class="-gray">// Some special projects explained in details.</p>

                <ul class="work-list">
                    <li>
                        <router-link to="/work/confianca" title="Confiança Delivery">
                            <img src="@/assets/work/work-confianca.png" alt="A smartphone showing the home page for the Confiança Delivery project">
                            <div class="details">
                                <strong>Confiança Delivery</strong><br>
                                <span class="-comment">// 2018 - BizCommerce</span><br>
                                Supermarket online delivery store
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/work/admin-panel" title="Admin Panel">
                            <img src="@/assets/work/work-admin-panel.png" alt="Two white gears inside a purple circle">
                            <div class="details">
                                <strong>Admin Panel</strong><br>
                                <span class="-comment">// 2018 - BizCommerce</span><br>
                                A deep redesign of Magento's v1 admin panel for BizCommerce
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/work/desbravando" title="Desbravando">
                            <img src="@/assets/work/work-desbravando.png" alt="An acoustic guitar floating on a wavy ocean">
                            <div class="details">
                                <strong>Desbravando</strong><br>
                                <span class="-comment">// 2015 - Pepê Reis</span><br>
                                CD cover design project
                            </div>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>

<script>
    // styles
    import '@/styles/work.scss';

    export default {
        name: 'work',
        props: {
            viewport: Object,
        },
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
                    rotationX: 70,
                    transformOrigin: '50% 50% -100px',
                    ease: Power3.easeOut,
                }, 'enter')
                .from('.std', 2, {
                    autoAlpha: 0,
                    x: -32,
                    ease: Power3.easeOut,
                }, 'enter+=1.5');

        },
    };
</script>
