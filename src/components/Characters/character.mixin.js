import { TimelineMax } from 'gsap'

export const character = {
  props: {
    isPlaying: Boolean,
  },
  data() {
    return {
      loop: null,
      svg: null,
    }
  },
  mounted() {
    this.loop = new TimelineMax()
    this.svg = this.$el.querySelector('svg')
    this.init()
    this.toggleAnimation()
  },
  beforeUnmount() {
    this.destroy()
  },
  watch: {
    isPlaying() {
      this.toggleAnimation()
    },
    svg() {
      this.toggleAnimation()
    },
  },
  methods: {
    init() {
      console.warn(`${this.$options.name} has no init method`)
    },
    destroy() {
      this.loop.stop()
      this.loop.kill()
      this.loop = null
      this.toggleSVGAnimations(false)
    },
    toggleSVGAnimations(isPlaying) {
      if (!this.svg || !('unpauseAnimations' in this.svg)) return

      if (isPlaying) {
        this.svg.unpauseAnimations()
      } else {
        this.svg.pauseAnimations()
      }
    },
    toggleGsapAnimations(isPlaying) {
      if (isPlaying) {
        this.loop.play()
      } else {
        this.loop.stop()
      }
    },
    toggleAnimation() {
      this.toggleSVGAnimations(this.isPlaying)
      this.toggleGsapAnimations(this.isPlaying)
    },
  },
}
