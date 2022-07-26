<template>
  <div id="app" :class="this.$route.meta.bodyClass">
    <BgBody />

    <HeaderSection :routeName="this.$route.name" :viewport="viewport" />

    <transition appear mode="out-in" :css="false" @leave="leave" @enter="enter">
      <router-view :viewport="viewport" />
    </transition>

    <Spine />
  </div>
</template>

<script>
// GSAP + ScrollMagic
import * as ScrollMagic from 'scrollmagic'
import { TweenMax, TimelineMax, Power3, Elastic } from 'gsap'
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap'
ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax)
// Components
import HeaderSection from '@/components/Header.vue'
import Spine from '@/components/Spine.vue'
import BgBody from '@/components/BgBody.vue'

export default {
  name: 'App',
  components: {
    HeaderSection,
    Spine,
    BgBody,
  },
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
    }
  },
  created() {
    this.updateViewport()
    window.addEventListener('resize', this.updateViewport)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateViewport)
  },
  methods: {
    enter(el, done) {
      // intro animations
      this.introTimeline
        .clear()
        .addLabel('enter', 0)
        .fromTo(
          '.header-breadcrumb',
          1,
          {
            autoAlpha: 0,
            x: -32,
          },
          {
            autoAlpha: 1,
            x: 0,
            ease: Power3.easeOut,
          },
          'enter'
        )
        .fromTo(
          el,
          1,
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
          },
          'enter'
        )
        .fromTo(
          '.spine',
          1,
          {
            autoAlpha: 0,
            yPercent: 20,
          },
          {
            autoAlpha: 1,
            yPercent: 0,
            ease: Power3.easeOut,
            onComplete: done,
          },
          'enter'
        )
        .fromTo(
          '.spine-target .circle',
          1,
          {
            scale: 0,
            autoAlpha: 0,
          },
          {
            scale: 1,
            autoAlpha: 1,
            ease: Elastic.easeOut.config(1, 0.5),
          },
          'enter+=.7'
        )
        .fromTo(
          '.spine-target .circle',
          2,
          {
            backgroundColor: 'transparent',
          },
          {
            backgroundColor: '#5918df',
          },
          'enter+=1.2'
        )
        .fromTo(
          '.spine-target .pulse',
          4,
          {
            autoAlpha: 1,
            scale: 0,
          },
          {
            autoAlpha: 0,
            scale: 8,
            ease: Power3.easeOut,
          },
          'enter+=1.2'
        )
    },
    leave(el, done) {
      // leave animations
      this.leaveTimeline
        .clear()
        .addLabel('leave', 0)
        .to(
          '.spine-target .circle, .spine-target .pulse',
          0.5,
          {
            scale: 0,
            autoAlpha: 0,
            ease: Power3.easeIn,
          },
          'leave'
        )
        .to(
          '.spine',
          0.5,
          {
            autoAlpha: 0,
            yPercent: 50,
            ease: Power3.easeIn,
          },
          'leave+=.25'
        )
        .set('.header-breadcrumb', { autoAlpha: 0 }, 'leave')
        .to(
          el,
          1,
          {
            autoAlpha: 0,
            onComplete: done,
          },
          'leave'
        )
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
}
</script>

<style lang="scss">
/* @resets */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  min-height: 0;
  min-width: 0;
  font-family: inherit;
}

/* @vars */
:root {
  --purple: #682ae9;
  --light: #dbdbdb;
  --header-link: #dbdbdb;
  --header-link-hover: #682ae9;
  --header-link-hover-icon: #dbdbdb;
  --header-link-active: rgba(85, 85, 85, 1);
  --std-color: #dbdbdb;
  --bg: #0e1212;
  --bg-rgb: 14, 18, 18;
  --bgLight: radial-gradient(var(--bg), transparent, var(--purple) 130%);
  --gray: #808080;
  --comment: #555;
}

/* @layout */
html {
  background: var(--bg);
  font-family: 'Roboto Mono', monospace;
  font-size: 100%;
  color: #888;
}
body {
  min-height: 100vh;
  &.locked {
    overflow: hidden;
  }
}
#app {
  overflow: hidden;
  margin: 0 auto;
}
.wrapper {
  position: relative;
  z-index: 1;
  padding-bottom: 20vh;
  min-height: 100vh;
  transition: opacity 0.5s linear;

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 50vh;
    bottom: 50vh;
    left: calc(25vw - 2rem);
    z-index: 99;
    width: 1px;
    opacity: 0.3;
    background: var(--purple)
      linear-gradient(to bottom, var(--bg), rgba(var(--bg-rgb), 0) 20vh);
  }
}

/* @group Basics */
section {
  min-height: 100vh;
  //position: relative;
}
a {
  text-decoration: none;
}
button {
  border: 0;
}
svg {
  title,
  desc {
    display: none;
  }
}

/* @element body-bg & header-bg */
.body-bg {
  position: fixed;
  top: -25vh;
  left: -25vw;
  width: 150vw;
  height: 150vh;
  z-index: -1;

  div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.4s ease-out;
  }

  .-default {
    background: var(--bg);
    opacity: 1;
  }
  .-mario {
    background: #0497d1;
  }
  .-admin {
    background: #f2f2f2;
  }
  .-confianca {
    background: #f1efef;
  }
  .-desbravando {
    background: #e3e5d0;
  }
}
.header-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;

  div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.4s ease-out;
  }

  .-default {
    background: linear-gradient(
      to bottom,
      var(--bg) 3rem,
      rgba(var(--bg-rgb), 0) 100%
    );
    opacity: 1;
  }
  .-mario {
    background: linear-gradient(
      to bottom,
      #0497d1 3rem,
      rgba(4, 151, 209, 0) 100%
    );
  }
  .-admin {
    background: linear-gradient(
      to bottom,
      #f2f2f2 3rem,
      rgba(242, 242, 242, 0) 100%
    );
  }
  .-confianca {
    background: linear-gradient(
      to bottom,
      #f1efef 3rem,
      rgba(241, 239, 239, 0) 100%
    );
  }
  .-desbravando {
    background: linear-gradient(
      to bottom,
      #e3e5d0 3rem,
      rgba(227, 229, 208, 0) 100%
    );
  }
}
body.-mario-bg {
  .body-bg div,
  .header-bg div {
    opacity: 0;
  }
  .header-bg .-mario,
  .body-bg .-mario {
    opacity: 1;
  }
  .header-nav-button .dots {
    background: #000;
  }
  .header-nav a {
    color: #000;
  }
  .header-nav a svg,
  .header-breadcrumb,
  .header-nav-close-button {
    color: #411a91;
    fill: #411a91;
  }
}
body.-admin-bg {
  .body-bg div,
  .header-bg div {
    opacity: 0;
  }
  .header-bg .-admin,
  .body-bg .-admin {
    opacity: 1;
  }
  .header-nav-button .dots {
    background: #555;
  }
  .std,
  .header-nav a {
    color: #555;
  }
}
body.-confianca-bg {
  .body-bg div,
  .header-bg div {
    opacity: 0;
  }
  .header-bg .-confianca,
  .body-bg .-confianca {
    opacity: 1;
  }
  .header-nav-button .dots {
    background: #555;
  }
  .std,
  .header-nav a {
    color: #555;
  }
}
body.-desbravando-bg {
  .body-bg div,
  .header-bg div {
    opacity: 0;
  }
  .header-bg .-desbravando,
  .body-bg .-desbravando {
    opacity: 1;
  }
  .header-nav-button .dots {
    background: #555;
  }
  .std,
  .header-nav a {
    color: #555;
  }
}

/* @group Scene && Containers */
.scene {
  min-height: 100vh;
}
.initial-fold {
  min-height: 50vh;
}
.container {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  visibility: hidden;
  perspective: 900px;
  perspective-origin: 50% 50vh;
}
.title-container {
  @extend .container;

  padding: 0 1rem 0 25vw;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: center;

  .title {
    margin-right: 0;
    padding-right: 0;
  }
}
.static-container {
  padding: calc(50vh - 3.5rem) 0 0;
  margin: 0 25vw;
  min-height: 100vh;
  perspective: 900px;
  perspective-origin: 50% 50vh;
}
.gap {
  height: 25vh;
}

/* @element .nav-ico */
.nav-ico {
  width: 0.75rem;
  height: 0.75rem;
  display: inline-block;
  vertical-align: baseline;
  stroke-width: 2px;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  stroke: var(--light);

  &.-blank {
    vertical-align: middle;
  } // default
  &.-prev {
    transform: rotate(-180deg);
  }
  &.-next {
    transform: rotate(90deg);
  }
}

/* @element .spine */
.spine {
  position: fixed;
  top: 50vh;
  bottom: 0;
  left: calc(25vw - 2rem);
  z-index: 2;
  width: 1px;
  background: var(--purple)
    linear-gradient(to top, var(--bg) 1rem, rgba(var(--bg-rgb), 0) 20vh);
}
.spine-target {
  position: fixed;
  top: calc(50vh - 8px);
  left: calc(25vw - 2rem - 4px);
  width: 9px;
  height: 9px;
  z-index: 2;

  .circle,
  .pulse {
    position: absolute;
    width: 9px;
    height: 9px;
    transform-origin: center;
    border-radius: 3rem;
    background: transparent;
    border: 1px solid var(--purple);
  }
}

/*
 * @element .std
 * Text format
 */
.std {
  max-width: 42rem;
  font-size: 1rem;
  line-height: 1.5;
  color: var(--std-color);
  word-break: break-word;
  hyphens: none;

  h3 {
    margin-bottom: 1rem;
  }

  .bt {
    background: var(--purple);
    color: var(--bg);
    padding: 0 1rem;
    height: 2rem;
    border-radius: 3rem;
    line-height: 2rem;
    text-decoration: none;
    display: inline-block;

    &:hover {
      background: var(--light);

      .nav-ico {
        stroke: var(--gray);
      }
    }
  }

  p {
    margin-bottom: 1rem;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .-big {
    font-size: 1.8rem;
    line-height: 1.2;
    vertical-align: baseline;
  }
  .-purple {
    color: var(--purple);
  }
  .-gray {
    color: var(--gray);
  }
  .-comment {
    color: var(--comment);
  }
  .-red {
    color: #f0514e;
  }
  .-green {
    color: #3cb878;
  }
  .-full {
    display: block;
    margin-right: -25vw;
    padding-right: 1rem;
  }
  i {
    font-style: italic;
  }
  b,
  strong {
    font-weight: 700;
  }
  a {
    color: var(--light);
    text-decoration: underline;
    transition: all 400ms ease-out;
    &:hover {
      color: var(--purple);
    }
  }

  .subtitle {
    color: var(--purple);
    font-size: 4rem;
    line-height: 1;
    margin: 4rem -25vw 2rem 0;
    padding-right: 1rem;
    word-spacing: -1rem;
    word-break: break-word;
    hyphens: auto;

    s {
      opacity: 0.4;
      font-weight: 400;
    }
  }

  ul {
    margin-bottom: 1rem;
    &:last-child {
      margin-bottom: 0;
    }
  }
  li {
    list-style-position: outside;
    margin: 0 0 0.5rem 1rem;
    &:last-child {
      margin-bottom: 0;
    }
  }
}

/*
 * @element .ariaLabel
 * Used just for accessibility info
 */
.ariaLabel {
  display: none;
}

/* @element .title */
.title {
  display: block;
  color: var(--light);
  font-size: 4rem;
  font-weight: 700;
  word-spacing: -0.1em;
  letter-spacing: -0.05em;
  word-break: break-word;
  hyphens: auto;
  margin-right: -25vw;
  padding-right: 1rem;

  .func {
    color: var(--purple);
  }
  .params {
    color: var(--purple);
    font-weight: 400;
    letter-spacing: -2px;
  }
}

/* awwwwards */
#awwwards {
  position: fixed;
  z-index: 999;
  transform: translateY(-50%);
  top: 50%;
  left: 0;

  svg {
    display: block;
  }
}

/* Responsive */
@media screen and (max-width: 1024px) {
  /* @layout */
  .wrapper {
    padding-bottom: 10vh;

    &:after {
      left: 1rem;
    }
  }

  /* @group Scene && Containers */
  .static-container {
    margin: 0 4rem 0 calc(4rem + 1px);
  }
  .title-container {
    padding-left: 4rem;
  }

  /* @element .spine */
  .spine {
    left: 1rem;
  }
  .spine-target {
    left: calc(1rem - 4px);
  }

  /* @element .title */
  .title {
    margin-right: -4rem;
    font-size: 3.5rem;
  }

  /* @element .std */
  .std {
    .subtitle {
      margin-right: -4rem;
      font-size: 3.5rem;
      word-spacing: unset;
    }
  }
}

@media screen and (max-width: 768px) {
  /* awwwards */
  #awwwards {
    transform-origin: right bottom;
    top: auto;
    left: auto;
    right: 0;
    bottom: 0;
    transform: translate3d(0, 0, 0);
  }
}

@media screen and (max-width: 568px) {
  /* @group Scene && Containers */
  .static-container {
    margin: 0 2rem 0 calc(2rem + 1px);
  }
  .title-container {
    padding: 0 1rem 0 2rem;

    .title {
      margin-bottom: 1rem;
    }
  }

  /* @element .title */
  .title {
    margin-right: -2rem;
    margin-bottom: 1rem;
    font-size: 2rem;
    line-height: 1.1;
  }

  /* @element .std */
  .std {
    .subtitle {
      margin-right: -2rem;
      font-size: 2rem;
    }
  }

  /* awwwards */
  #awwwards {
    transform: translate3d(0, 0, 0) scale(0.7);
  }
}

// NProgress custom CSS
#nprogress {
    pointer-events: none;
    .bar {
        background: var(--purple);
        position: fixed;
        z-index: 1031;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
    }
    .peg {
        display: block;
        position: absolute;
        right: 0px;
        width: 100px;
        height: 100%;
        opacity: 1.0;
        transform: rotate(3deg) translate(0px, -4px);
    }
}

.nprogress-custom-parent {
    overflow: hidden;
    position: relative;
    #nprogress {
        .spinner, .bar {
            position: absolute;
        }
    }
}
</style>
