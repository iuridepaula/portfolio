import gsap from 'gsap'

export const character = {
  props: {
    isPlaying: Boolean,
  },
  data() {
    return {
      svg: null,
    }
  },
  created() {
    // Keep GSAP timeline off Vue's reactive proxy
    this.loop = gsap.timeline()
  },
  mounted() {
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
      this.loop.pause()
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
        this.loop.pause()
      }
    },
    toggleAnimation() {
      this.toggleSVGAnimations(this.isPlaying)
      this.toggleGsapAnimations(this.isPlaying)
    },
  },
}
