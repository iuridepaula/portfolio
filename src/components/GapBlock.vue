<template>
  <div :class="['gap', { full: isFull }]"></div>
</template>

<script>
export default {
  name: 'GapBlock',
  props: {
    isFull: Boolean,
  },
}
</script>

<style lang="scss">
.gap {
  height: 25vh;

  &.full {
    height: 100vh;
  }
}
</style>
