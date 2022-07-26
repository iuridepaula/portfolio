<template>
  <section class="scene">
    <div class="static-container">
      <slot></slot>
    </div>
    <div class="container">
      <slot name="container"></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SceneSection',
}
</script>

<style lang="scss">
.scene {
  min-height: 100vh;
}

.static-container {
  padding: calc(50vh - 3.5rem) 0 0;
  margin: 0 25vw;
  min-height: 100vh;
  perspective: 900px;
  perspective-origin: 50% 50vh;

  @media screen and (max-width: 1024px) {
    .static-container {
      margin: 0 4rem 0 calc(4rem + 1px);
    }
  }

  @media screen and (max-width: 568px) {
    .static-container {
      margin: 0 2rem 0 calc(2rem + 1px);
    }
  }
}

.container {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  visibility: hidden;
  perspective: 900px;
  perspective-origin: 50% 50vh;
}
</style>
