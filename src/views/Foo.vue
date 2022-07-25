<template>
  <div id="foo" class="wrapper">
    <Shapes :isPlaying="isPlaying" class="character" />
    <button
      @click="toggle"
      style="padding: 2rem; margin: 0 auto; display: block"
    >
      {{ isPlaying ? 'pause' : 'play' }}
    </button>
  </div>
</template>

<script>
import Shapes from '../components/Characters/Shapes'

export default {
  name: 'FooView',
  components: { Shapes },
  data() {
    return {
      isPlaying: false,
    }
  },
  methods: {
    toggle() {
      this.isPlaying = !this.isPlaying
    },
  },
}
</script>

<style>
.character {
  border: 1px solid cyan;
  width: 50%;
  margin: 6rem auto 2rem;
}
</style>
