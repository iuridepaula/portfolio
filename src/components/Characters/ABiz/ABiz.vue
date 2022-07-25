<template>
  <div id="abiz">
    <ABizSVG />
  </div>
</template>

<script>
import { LOOP_EASE_IN_OUT } from '@/constants'
import { character } from '../character.mixin'
import ABizSVG from './ABizSVG.vue'
import { LOOP_EASE_OUT } from '../../../constants'

export default {
  name: 'BizCharacter',
  components: { ABizSVG },
  mixins: [character],
  methods: {
    init() {
      this.loop
        .addLabel('start', 0)
        .to(
          '.abiz-head',
          2,
          {
            transformOrigin: '50% 75%',
            scale: 1.05,
            yPercent: -5,
            ...LOOP_EASE_IN_OUT,
          },
          'start'
        )
        .to(
          '.abiz-r-arm, .abiz-l-arm',
          1.5,
          {
            rotationZ: 5,
            transformOrigin: '90% 0%',
            ...LOOP_EASE_IN_OUT,
          },
          'start'
        )
        .to('#magento', 2, {
          yPercent: -20,
          ...LOOP_EASE_OUT,
        })
        .to(
          '.abiz-magento-s',
          2,
          {
            scale: 0.7,
            autoAlpha: 0.5,
            ...LOOP_EASE_OUT,
          },
          '-=2'
        )
    },
  },
}
</script>

<style>
.a-biz {
  transform-origin: center;
}
</style>
