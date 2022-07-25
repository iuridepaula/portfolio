import { Power2, Elastic } from 'gsap'

export const LOOP = {
  repeat: -1,
  yoyo: true,
}

export const LOOP_EASE_OUT = {
  ...LOOP,
  ease: Power2.easeOut,
}

export const LOOP_EASE_IN = {
  ...LOOP,
  ease: Power2.easeIn,
}

export const LOOP_EASE_IN_OUT = {
  ...LOOP,
  ease: Power2.easeInOut,
}

export const LOOP_ELASTIC_OUT = {
  ...LOOP,
  ease: Elastic.easeOut.config(1, 0.1),
}
