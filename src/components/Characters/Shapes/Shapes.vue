<template>
  <div>
    <ShapesSVG />
  </div>
</template>

<script>
import { LOOP_EASE_IN_OUT } from '@/constants'
import { character } from '../character.mixin'
import ShapesSVG from './ShapesSVG.vue'

export default {
  name: 'ShapesCharacter',
  components: { ShapesSVG },
  mixins: [character],
  methods: {
    init() {
      const smart = document.querySelector('.smart-smart')
      const open = document.querySelector('.open-open')

      this.loop
        .clear(true)
        .addLabel('start')
        .to(
          smart,
          8,
          {
            rotation: -360,
            transformOrigin: '50% 50%',
            ...LOOP_EASE_IN_OUT,
          },
          'start'
        )
        .to(
          open,
          7,
          {
            rotation: 360,
            transformOrigin: '50% 50%',
            ...LOOP_EASE_IN_OUT,
          },
          'start'
        )
    },
  },
}
</script>
