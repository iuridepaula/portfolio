<template>
  <div>
    <div class="spine" />

    <div class="spine-target">
      <div class="circle" />
      <div class="pulse" />
    </div>
  </div>
</template>

<script>
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
          {
            autoAlpha: 0,
            yPercent: 20,
          },
          {
            duration: 1,
            autoAlpha: 1,
            yPercent: 0,
            ease: 'power3.out',
          },
          'enter'
        )
        .fromTo(
          '.spine-target .circle',
          {
            scale: 0,
            autoAlpha: 0,
          },
          {
            duration: 1,
            scale: 1,
            autoAlpha: 1,
            ease: 'elastic.out(1, 0.5)',
          },
          'enter+=.7'
        )
        .fromTo(
          '.spine-target .circle',
          {
            backgroundColor: 'transparent',
          },
          {
            duration: 2,
            backgroundColor: '#5918df',
          },
          'enter+=1.2'
        )
        .fromTo(
          '.spine-target .pulse',
          {
            autoAlpha: 1,
            scale: 0,
          },
          {
            duration: 4,
            autoAlpha: 0,
            scale: 8,
            ease: 'power3.out',
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
          {
            duration: 0.5,
            scale: 0,
            autoAlpha: 0,
            ease: 'power3.in',
          },
          'leave'
        )
        .to(
          '.spine',
          {
            duration: 0.5,
            autoAlpha: 0,
            yPercent: 50,
            ease: 'power3.in',
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
  pointer-events: none;
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
  pointer-events: none;
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
