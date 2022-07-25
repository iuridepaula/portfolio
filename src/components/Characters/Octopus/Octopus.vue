<template>
  <div>
    <OctopusSVG />
  </div>
</template>

<script>
import { LOOP_EASE_IN_OUT } from '@/constants'
import { random } from '@/utils'
import { character } from '../character.mixin'
import OctopusSVG from './OctopusSVG.vue'

export default {
  name: 'OctopusCharacter',
  components: { OctopusSVG },
  mixins: [character],
  methods: {
    init() {
      const body = document.querySelector('.octo-octo')
      const eye = document.querySelector('.octo-eye')

      this.loop
        .addLabel('start', 0)
        .fromTo(
          eye,
          0.05,
          {
            scaleY: 0.1,
            transformOrigin: '50% 50%',
          },
          {
            scaleY: 1,
            repeat: -1,
            repeatDelay: 1.618,
          },
          'start'
        )
        .to(
          body,
          5,
          {
            y: random(-200, 400),
            x: random(-100, 100),
            rotation: random(-30, 30),
            ...LOOP_EASE_IN_OUT,
            onComplete: () => {
              this.action()
            },
          },
          'start'
        )
    },
  },
}
</script>
