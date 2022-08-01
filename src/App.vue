<template>
  <div id="app" :class="$route.meta.bodyClass">
    <HeaderSection />
    <transition appear mode="out-in" :css="false" @leave="leave" @enter="enter">
      <router-view />
    </transition>
    <SpineLine :isPlaying="isSpinePlaying" />
    <div class="tweenerElement"></div>

    <FooterSection />
  </div>
</template>

<script>
import * as ScrollMagic from 'scrollmagic'
import { TweenMax, TimelineMax, Power3 } from 'gsap'
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap'
import HeaderSection from './components/HeaderSection.vue'
import FooterSection from './components/FooterSection.vue'
import SpineLine from './components/SpineLine.vue'

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax)

export default {
  name: 'App',
  components: {
    HeaderSection,
    SpineLine,
    FooterSection,
  },
  data() {
    return {
      isSpinePlaying: false,
      introTimeline: new TimelineMax(),
      leaveTimeline: new TimelineMax(),
    }
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
            onComplete: done,
          },
          'enter'
        )

      this.isSpinePlaying = true
    },
    leave(el, done) {
      // leave animations
      this.leaveTimeline
        .clear()
        .addLabel('leave', 0)
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

      this.isSpinePlaying = false
    },
  },
}
</script>

<style lang="scss">
// vars
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

// reset
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  min-height: 0;
  min-width: 0;
  font-family: inherit;
}

::selection {
  background: var(--purple);
  color: white;
}

// layout
html {
  background: var(--bg);
  font-family: 'Roboto Mono', monospace;
  font-size: 100%;
  hyphens: auto;
  word-break: normal;
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

// general
li {
  list-style: none;
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

// background
body {
  background: var(--bg);
  transition: background-color 0.4s ease-out;

  &.blue-background {
    background: #0497d1;

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
  }

  // default
  &.-prev {
    transform: rotate(-180deg);
  }

  &.-next {
    transform: rotate(90deg);
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

/* Responsive */
@media screen and (max-width: 1024px) {
  /* @layout */
  .wrapper {
    padding-bottom: 10vh;

    &:after {
      left: 1rem;
    }
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

@media screen and (max-width: 568px) {
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
    opacity: 1;
    transform: rotate(3deg) translate(0px, -4px);
  }
}

.nprogress-custom-parent {
  overflow: hidden;
  position: relative;

  #nprogress {
    .spinner,
    .bar {
      position: absolute;
    }
  }
}
</style>
