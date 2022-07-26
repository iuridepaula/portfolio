<template>
  <div>
    <Component :is="$route.params.character" :isPlaying="isPlaying" class="character" />
    <button
      @click="toggle"
      style="padding: 2rem; margin: 0 auto; display: block"
    >
      {{ isPlaying ? 'pause' : 'play' }}
    </button>
  </div>
</template>

<script>
const ABiz = () => import('../components/Characters/ABiz')
const Astronaut = () => import('../components/Characters/Astronaut')
const CoffeeMug = () => import('../components/Characters/CoffeeMug')
const Dino = () => import('../components/Characters/Dino')
const ET = () => import('../components/Characters/ET')
const Ocean = () => import('../components/Characters/Ocean')
const Octopus = () => import('../components/Characters/Octopus')
const Pepe = () => import('../components/Characters/Pepe')
const Shapes = () => import('../components/Characters/Shapes')
const Shrimp = () => import('../components/Characters/Shrimp')
const Zen = () => import('../components/Characters/Zen')

export default {
  name: 'PreviewView',
  components: {
    ABiz,
    Astronaut,
    CoffeeMug,
    Dino,
    ET,
    Ocean,
    Octopus,
    Pepe,
    Shapes,
    Shrimp,
    Zen,
  },
  data() {
    return {
      isPlaying: true,
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
  max-width: 70%;
  margin: 6rem auto 2rem;
}
</style>
