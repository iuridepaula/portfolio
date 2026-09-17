<template>
  <div id="route-progress">
    <div ref="bar" class="bar">
      <div class="peg"></div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
import { routeProgress } from '@/routeProgress'

export default {
  name: 'RouteProgress',
  data() {
    return {
      progress: routeProgress,
    }
  },
  watch: {
    'progress.active'(isActive) {
      if (isActive) {
        this.start()
      } else {
        this.done()
      }
    },
  },
  mounted() {
    if (this.progress.active) this.start()
  },
  methods: {
    start() {
      const { bar } = this.$refs
      if (!bar) return

      gsap.killTweensOf(bar)
      // creep towards the end without ever reaching it, until done() lands it
      gsap.fromTo(
        bar,
        { xPercent: -100, autoAlpha: 1 },
        { duration: 8, xPercent: -10, ease: 'power3.out' }
      )
    },
    done() {
      const { bar } = this.$refs
      if (!bar) return

      gsap.killTweensOf(bar)
      gsap
        .timeline()
        .to(bar, { duration: 0.3, xPercent: 0, ease: 'power2.out' })
        .to(bar, { duration: 0.3, autoAlpha: 0 })
    },
  },
}
</script>

<style lang="scss">
#route-progress {
  pointer-events: none;

  .bar {
    background: var(--purple);
    position: fixed;
    z-index: 1031;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    opacity: 0;
    transform: translateX(-100%);
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
</style>
