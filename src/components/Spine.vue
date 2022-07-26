<template>
  <div>
    <div class="spine"></div>
    <div class="spine-target">
      <div class="circle"></div>
      <div class="pulse"></div>
    </div>
  </div>
</template>

<script>
import { Power3, Elastic } from 'gsap'
import { character } from './Characters/character.mixin'

export default {
  name: 'SpineLine',
  mixins: [character],
  methods: {
    init() {
      this.loop
        .clear()
        .addLabel('enter', 0)
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
    end() {
      this.loop
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
    },
    toggleGsapAnimations(isPlaying) {
      if (isPlaying) {
        this.init()
      } else {
        this.end()
      }
    },
  },
}
</script>

<style lang="scss">
.spine {
  position: fixed;
  top: 50vh;
  bottom: 0;
  left: calc(25vw - 2rem);
  z-index: 2;
  width: 1px;
  background: var(--purple)
    linear-gradient(to top, var(--bg) 1rem, rgba(var(--bg-rgb), 0) 20vh);

  @media screen and (max-width: 1024px) {
    left: 1rem;
  }
}
.spine-target {
  position: fixed;
  top: calc(50vh - 8px);
  left: calc(25vw - 2rem - 4px);
  width: 9px;
  height: 9px;
  z-index: 2;

  @media screen and (max-width: 1024px) {
    left: calc(1rem - 4px);
  }

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
</style>
