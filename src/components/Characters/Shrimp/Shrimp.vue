<template>
  <div>
    <ShrimpSVG ref="svg" />
  </div>
</template>

<script>
import gsap from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import { LOOP_EASE_IN_OUT } from '@/constants'
import { random } from '@/utils'
import { character } from '../character.mixin'
import ShrimpSVG from './ShrimpSVG.vue'

gsap.registerPlugin(MotionPathPlugin)

export default {
  name: 'ShrimpCharacter',
  components: { ShrimpSVG },
  mixins: [character],
  methods: {
    init() {
      const body = document.querySelector('.filomena-filomena')
      const skirt = document.querySelector('.filomena-skirt')
      const backSkirt = document.querySelector('.filomena-back-skirt')
      const leftFoot = document.querySelector('.filomena-l-foot')
      const rightFoot = document.querySelector('.filomena-r-foot')
      const leftArm = document.querySelector('.filomena-l-arm')
      const rightArm = document.querySelector('.filomena-r-arm')

      this.loop
        .addLabel('start')
        .to([skirt, backSkirt], {
          duration: 3,
          skewY: -0.5,
          skewX: 0.5,
          transformOrigin: '50% 0%',
          ...LOOP_EASE_IN_OUT,
        })
        .to(
          leftFoot,
          {
            duration: 2,
            transformOrigin: '1% 99%',
            rotation: 80,
            ...LOOP_EASE_IN_OUT,
          },
          'start'
        )
        .to(
          rightFoot,
          {
            duration: 2,
            transformOrigin: '1% 99%',
            yPercent: -7,
            rotation: 50,
            ...LOOP_EASE_IN_OUT,
          },
          '-=1.9'
        )
        .to(
          leftArm,
          {
            duration: 0.6,
            transformOrigin: '20% 50%',
            skewY: 20,
            yPercent: -10,
            ...LOOP_EASE_IN_OUT,
          },
          'start'
        )
        .to(
          rightArm,
          {
            duration: 0.5,
            transformOrigin: '20% 50%',
            skewY: 20,
            yPercent: -20,
            ...LOOP_EASE_IN_OUT,
          },
          'start'
        )
        .to(
          body,
          {
            duration: 10,
            motionPath: {
              curviness: 1.25,
              path: [
                {
                  yPercent: random(-50, -15),
                  xPercent: random(-30, 30),
                  rotation: random(-40, -20),
                },
                {
                  yPercent: random(-50, -15),
                  xPercent: random(-30, 30),
                  rotation: random(40, 20),
                },
              ],
            },
            ...LOOP_EASE_IN_OUT,
          },
          'start'
        )
    },
  },
}
</script>
