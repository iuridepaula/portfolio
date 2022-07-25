<template>
  <div>
    <ZenSVG />
  </div>
</template>

<script>
import { LOOP_EASE_IN_OUT } from '@/constants'
import { character } from '../character.mixin'
import ZenSVG from './ZenSVG.vue'

export default {
  name: 'ZenCharacter',
  components: { ZenSVG },
  mixins: [character],
  methods: {
    init() {
      const body = document.querySelector('.zen-zen')
      const head = document.querySelector('.zen-head')
      const leftArm = document.querySelector('.zen-l-arm')
      const rightArm = document.querySelector('.zen-r-arm')
      const leftMustache = document.querySelector('.zen-l-mustache')
      const rightMustache = document.querySelector('.zen-r-mustache')

      this.loop
        .set(head, {
          transformOrigin: '50% 90%',
          rotation: 5,
        })
        .addLabel('start')
        .to(
          head,
          3,
          {
            rotation: -5,
            ...LOOP_EASE_IN_OUT,
          },
          'start'
        )
        .to(
          [leftArm, leftMustache],
          2,
          {
            transformOrigin: '90% 50%',
            rotation: -20,
            ...LOOP_EASE_IN_OUT,
          },
          'start'
        )
        .to(
          [rightArm, rightMustache],
          2,
          {
            transformOrigin: '10% 50%',
            rotation: 20,
            ...LOOP_EASE_IN_OUT,
          },
          'start'
        )
        .to(
          body,
          2,
          {
            yPercent: -10,
            ...LOOP_EASE_IN_OUT,
          },
          'start'
        )
    },
  },
}
</script>
