<template>
  <div :class="['mario-coin', { pause: !isPlaying }]" />
</template>

<script>
export default {
  name: 'SuperMarioCoin',
  props: {
    isPlaying: Boolean,
  },
}
</script>

<style lang="scss">
.mario-coin {
  width: 128px;
  height: 128px;
  background: url('./assets/bg-mario.png') no-repeat 0 -256px;
  animation: marioCoin 0.6s steps(4) infinite;
  pointer-events: none;

  &.pause {
    animation-play-state: paused;
  }

  .preview > & {
    margin: 10rem auto 3rem;
  }

  @keyframes marioCoin {
    to {
      background-position: -512px -256px;
    }
  }
}
</style>
