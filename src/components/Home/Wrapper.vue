<template>
  <Scene class="scene" id="wrapperTitle">
    <h1 class="title">&lt;/wrapper&gt;</h1>
  </Scene>
</template>

<script>
import Scene from '../Scene.vue'
export default {
  name: 'WrapperBlock',
  components: { Scene },
}
</script>

<style lang="scss">
#wrapperTitle {
  .title {
    color: var(--purple);
  }
  .std {
    font-size: 1rem;
  }
  .-answer {
    opacity: 0.6;
  }
}
</style>
