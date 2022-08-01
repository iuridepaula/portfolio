<template>
  <SceneSection class="scene" id="wrapperTitle">
    <h1 class="title">&lt;/wrapper&gt;</h1>
  </SceneSection>
</template>

<script>
import SceneSection from '../SceneSection.vue'

export default {
  name: 'WrapperBlock',
  components: { SceneSection },
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
