<template>
    <div id="app" :class="this.$route.meta.bodyClass">
        <BgBody />

        <Header :routeName="this.$route.name"
                :viewport="viewport" />

        <transition appear
                    mode="out-in"
                    :css="false"
                    @leave="leave"
                    @enter="enter">

            <router-view :viewport="viewport" />

        </transition>

        <Spine />
    </div>
</template>

<script>
    // styles
    import '@/styles/app.scss';
    import '@/styles/nprogress.scss';
    // GSAP + ScrollMagic
    import * as ScrollMagic from "scrollmagic";
    import { TweenMax, TimelineMax } from "gsap";
    import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
    ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);
    // Components
    import Header from '@/components/Header.vue';
    import Spine from '@/components/Spine.vue';
    import BgBody from '@/components/BgBody.vue';

    export default {
        name: 'App',
        data() {
            return {
                viewport: {
                    w: window.innerWidth,
                    h: window.innerHeight,
                    is568: window.innerWidth <= 568,
                    is768: window.innerWidth <= 768,
                    is1024: window.innerWidth <= 1024,
                },
                introTimeline: new TimelineMax(),
                leaveTimeline: new TimelineMax(),
            };
        },
        created() {
            // update viewport
            this.updateViewport();
            // add resize listener
            window.addEventListener('resize', this.updateViewport);
            // add beforeunload listener, in case of refresh
            window.addEventListener("beforeunload", () => window.scroll(0,0));
        },
        methods: {
            enter(el, done) {
                // intro animations
                this.introTimeline
                    .clear()
                    .addLabel('enter', 0)
                    .fromTo('.header-breadcrumb', 1, {
                        autoAlpha: 0,
                        x: -32,
                    }, {
                        autoAlpha: 1,
                        x: 0,
                        ease: Power3.easeOut,
                    }, 'enter')
                    .fromTo(el, 1, {
                        autoAlpha: 0
                    }, {
                        autoAlpha: 1,
                    }, 'enter')
                    .fromTo('.spine', 1, {
                        autoAlpha: 0,
                        yPercent: 20,
                    }, {
                        autoAlpha: 1,
                        yPercent: 0,
                        ease: Power3.easeOut,
                        onComplete: done
                    }, 'enter')
                    .fromTo('.spine-target .circle', 1, {
                        scale: 0,
                        autoAlpha: 0
                    }, {
                        scale: 1,
                        autoAlpha: 1,
                        ease: Elastic.easeOut.config(1, 0.5)
                    }, 'enter+=.7')
                    .fromTo('.spine-target .circle', 2, {
                        backgroundColor: 'transparent',
                    }, {
                        backgroundColor: '#5918df',
                    }, 'enter+=1.2')
                    .fromTo('.spine-target .pulse', 4, {
                        autoAlpha: 1,
                        scale: 0,
                    }, {
                        autoAlpha: 0,
                        scale: 8,
                        ease: Power3.easeOut,
                    }, 'enter+=1.2');
            },
            leave(el, done) {
                // leave animations
                this.leaveTimeline
                    .clear()
                    .addLabel('leave', 0)
                    .to('.spine-target .circle, .spine-target .pulse', .5, {
                        scale: 0,
                        autoAlpha: 0,
                        ease: Power3.easeIn
                    }, 'leave')
                    .to('.spine', .5, {
                        autoAlpha: 0,
                        yPercent: 50,
                        ease: Power3.easeIn
                    }, 'leave+=.25')
                    .set('.header-breadcrumb', {autoAlpha: 0}, 'leave')
                    .to(el, 1, {
                        autoAlpha: 0,
                        onComplete: done
                    }, 'leave');
            },
            updateViewport() {
                // update
                this.viewport = {
                    w: window.innerWidth,
                    h: window.innerHeight,
                    is568: window.innerWidth <= 568,
                    is768: window.innerWidth <= 768,
                    is1024: window.innerWidth <= 1024,
                }
            },
        },
        components: {
            Header,
            Spine,
            BgBody,
        },
    };
</script>
