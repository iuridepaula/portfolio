<template>
  <div>
    <ETSVG />
  </div>
</template>

<script>
import { LOOP_EASE_IN_OUT } from '@/constants'
import { random } from '@/utils'
import { LOOP } from '../../../constants'
import { character } from '../character.mixin'
import ETSVG from './ETSVG.vue'

export default {
  name: 'ETCharacter',
  components: { ETSVG },
  mixins: [character],
  methods: {
    init() {
      const body = document.querySelector('.et-et')
      const ship = document.querySelector('.et-ship')
      const eye = document.querySelector('.et-eye')

      this.loop
        .clear()
        .addLabel('start', 0)
        .to(
          ship,
          0.25,
          {
            rotationZ: 5,
            transformOrigin: '50% 75%',
            ...LOOP_EASE_IN_OUT,
          },
          'start'
        )
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
          12,
          {
            bezier: {
              curviness: 1.25,
              values: [
                {
                  xPercent: random(-100, 50),
                  yPercent: random(-40, 40),
                  rotationZ: random(15, 30),
                },
                {
                  xPercent: random(-100, 50),
                  yPercent: random(-40, 40),
                  rotationZ: random(-30, -15),
                },
                {
                  xPercent: random(-100, 50),
                  yPercent: random(-40, 40),
                  rotationZ: random(15, 30),
                },
                {
                  xPercent: random(-100, 50),
                  yPercent: random(-40, 40),
                  rotationZ: random(-30, -15),
                },
                {
                  xPercent: random(-100, 50),
                  yPercent: random(-40, 40),
                  rotationZ: random(15, 30),
                },
                {
                  xPercent: random(-100, 50),
                  yPercent: random(-40, 40),
                  rotationZ: random(-30, -15),
                },
              ],
              autoRotate: true,
            },
            transformOrigin: '50% 5%',
            ...LOOP,
          },
          'start'
        )
    },
  },
}
</script>
