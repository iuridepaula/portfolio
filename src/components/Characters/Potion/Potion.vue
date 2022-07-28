<template>
  <div>
    <PotionSVG />
  </div>
</template>

<script>
import { LOOP_EASE_IN_OUT } from '@/constants'
import { getNodes } from '@/utils'
import { character } from '../character.mixin'
import PotionSVG from './PotionSVG.vue'

export default {
  name: 'PotionCharacter',
  components: { PotionSVG },
  mixins: [character],
  methods: {
    init() {
      const potion = getNodes('#potion')

      this.loop
        .addLabel('start')
        .to(potion, 3, {
          transformOrigin: '50% 90%',
          rotation: 15,
          ...LOOP_EASE_IN_OUT,
        })
        .fromTo(
          potion.potionDrop,
          0.5,
          {
            yPercent: 100,
            rotation: 0,
            scale: 1,
          },
          {
            transformOrigin: '20% 120%',
            rotation: 360,
            yPercent: -100,
            scale: 0,
            repeat: -1,
          },
          'start'
        )
        .fromTo(
          potion.potionDrop2,
          0.7,
          {
            yPercent: 100,
            rotation: 0,
            scale: 1,
          },
          {
            transformOrigin: '0% 120%',
            rotation: -360,
            yPercent: -100,
            scale: 0,
            repeat: -1,
          },
          'start'
        )
    },
  },
}
</script>

<style lang="scss">
#potion {
  display: block;
  width: 6rem;
  height: 6rem;

  .preview > & {
    margin: 10rem auto 3rem;
  }
}
</style>
