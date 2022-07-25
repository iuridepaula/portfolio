<template>
  <div>
    <CoffeeMugSVG />
  </div>
</template>

<script>
import { LOOP_EASE_IN_OUT } from '@/constants'
import { random } from '@/utils'
import { character } from '../character.mixin'
import CoffeeMugSVG from './CoffeeMugSVG.vue'

export default {
  name: 'CoffeeMugCharacter',
  components: { CoffeeMugSVG },
  mixins: [character],
  methods: {
    init() {
      this.loop.to('.coffee-coffee', 5, {
        yPercent: random(20, 200),
        xPercent: random(-50, 50),
        rotation: random(0, 360),
        transformOrigin: '50% 50%',
        ...LOOP_EASE_IN_OUT,
      })
    },
  },
}
</script>
