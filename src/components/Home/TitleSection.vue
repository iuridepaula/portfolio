<template>
  <section class="scene" :id="scene">
    <div class="title-container">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TitleSection',
  props: {
    scene: String,
  },
}
</script>

<style lang="scss">
.title-container {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  visibility: hidden;
  perspective: 900px;
  perspective-origin: 50% 50vh;
  padding: 0 1rem 0 25vw;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: center;

  .title {
    margin-right: 0;
    padding-right: 0;
  }

  @media screen and (max-width: 1024px) {
    padding-left: 4rem;
  }

  @media screen and (max-width: 568px) {
    padding: 0 1rem 0 2rem;

    .title {
      margin-bottom: 1rem;
    }
  }
}
</style>
