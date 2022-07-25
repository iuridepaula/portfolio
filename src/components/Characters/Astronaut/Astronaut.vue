<template>
  <div>
    <AstronautSVG />
  </div>
</template>

<script>
import { LOOP_ELASTIC_OUT, LOOP_EASE_IN_OUT } from '@/constants'
import { random } from '@/utils'
import { character } from '../character.mixin'
import AstronautSVG from './AstronautSVG.vue'

export default {
  name: 'AstronautCharacter',
  components: { AstronautSVG },
  mixins: [character],
  methods: {
    init() {
      this.loop
        .set('.astro-head', {
          rotation: -15,
          transformOrigin: '50% 90%',
          yPercent: 0,
          xPercent: -10,
        })
        .set('.astro-tube', {
          rotation: -15,
          transformOrigin: '0% 100%',
        })
        .addLabel('start', 0)
        .to(
          '.astro-head',
          4,
          {
            rotation: 10,
            yPercent: 5,
            xPercent: 10,
            ...LOOP_EASE_IN_OUT,
          },
          'start'
        )
        .to(
          '.astro-tube',
          4,
          {
            rotation: 20,
            yPercent: 10,
            ...LOOP_EASE_IN_OUT,
          },
          'start'
        )
        .to(
          '.astro-l-arm',
          2,
          {
            rotation: -20,
            transformOrigin: '90% 90%',
            ...LOOP_ELASTIC_OUT,
          },
          'start'
        )
        .fromTo(
          '.astro-l-leg',
          2,
          {
            rotation: 10,
            transformOrigin: '90% 10%',
          },
          {
            rotation: -10,
            ...LOOP_EASE_IN_OUT,
          },
          'start'
        )
        .fromTo(
          '.astro-r-leg',
          2,
          {
            rotation: -10,
            transformOrigin: '90% 10%',
          },
          {
            rotation: 10,
            ...LOOP_EASE_IN_OUT,
          },
          'start'
        )
        .to(
          '.astro-body',
          1,
          {
            scaleX: 1.06,
            transformOrigin: '50% 50%',
            ...LOOP_EASE_IN_OUT,
          },
          'start'
        )
        .to(
          '.astro-astro',
          5,
          {
            yPercent: random(-40, -20),
            xPercent: random(-10, 10),
            rotation: random(-120, 120),
            transformOrigin: '50% 50%',
            ...LOOP_EASE_IN_OUT,
          },
          'start'
        )
    },
  },
}
</script>
