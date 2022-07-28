<template>
  <div>
    <div :class="['mario', state]" />
  </div>
</template>

<script>
export default {
  name: 'SuperMarioCharacter',
  props: {
    state: String,
  },
}
</script>

<style lang="scss">
.mario {
  width: 128px;
  height: 248px;
  background: url('./assets/bg-mario.png') no-repeat -256px -384px;

  &.up {
    background-position: 0 -384px;
  }
  &.down {
    background-position: -128px -384px;
  }
  &.celebrate {
    background-position: -384px -384px;
  }

  .preview > & {
    margin: 10rem auto 3rem;
  }
}

button {
  padding: 1rem;
}
</style>
