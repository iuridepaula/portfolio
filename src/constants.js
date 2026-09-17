export const LOOP = {
  repeat: -1,
  yoyo: true,
}

export const LOOP_EASE_OUT = {
  ...LOOP,
  ease: 'power2.out',
}

export const LOOP_EASE_IN = {
  ...LOOP,
  ease: 'power2.in',
}

export const LOOP_EASE_IN_OUT = {
  ...LOOP,
  ease: 'power2.inOut',
}

export const LOOP_ELASTIC_OUT = {
  ...LOOP,
  ease: 'elastic.out(1, 0.1)',
}
