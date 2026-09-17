<template>
  <div>
    <ETSVG />
  </div>
</template>

<script>
import gsap from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import { LOOP_EASE_IN_OUT, LOOP } from '@/constants'
import { random } from '@/utils'
import { character } from '../character.mixin'
import ETSVG from './ETSVG.vue'

gsap.registerPlugin(MotionPathPlugin)

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
          {
            duration: 0.25,
            rotationZ: 5,
            transformOrigin: '50% 75%',
            ...LOOP_EASE_IN_OUT,
          },
          'start'
        )
        .fromTo(
          eye,
          {
            scaleY: 0.1,
            transformOrigin: '50% 50%',
          },
          {
            duration: 0.05,
            scaleY: 1,
            repeat: -1,
            repeatDelay: 1.618,
          },
          'start'
        )
        .to(
          body,
          {
            duration: 12,
            motionPath: {
              curviness: 1.25,
              path: [
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
