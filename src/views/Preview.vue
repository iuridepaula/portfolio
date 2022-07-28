<template>
  <div class="preview">
    <Component
      :is="$route.params.character"
      :isPlaying="isPlaying"
      class="preview"
    />
    <button @click="toggle">
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
const HolwsCastle = () => import('../components/Characters/HolwsCastle')
const Ocean = () => import('../components/Characters/Ocean')
const Octopus = () => import('../components/Characters/Octopus')
const Pepe = () => import('../components/Characters/Pepe')
const Potion = () => import('../components/Characters/Potion')
const Shapes = () => import('../components/Characters/Shapes')
const Shrimp = () => import('../components/Characters/Shrimp')
const Zen = () => import('../components/Characters/Zen')
const SuperMarioCoin = () =>
  import('../components/Characters/SuperMario/Coin.vue')
const SuperMarioBlock = () =>
  import('../components/Characters/SuperMario/Block.vue')
const SuperMarioMario = () =>
  import('../components/Characters/SuperMario/Mario.vue')

export default {
  name: 'PreviewView',
  components: {
    ABiz,
    Astronaut,
    CoffeeMug,
    Dino,
    ET,
    HolwsCastle,
    Ocean,
    Octopus,
    Pepe,
    Potion,
    Shapes,
    Shrimp,
    Zen,
    SuperMarioCoin,
    SuperMarioBlock,
    SuperMarioMario,
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

<style lang="scss">
.preview {
  max-width: calc(100vw - 2rem);
  margin: 6rem auto 2rem;

  button {
    display: block;
    background: var(--purple);
    color: white;
    border-radius: 0.5rem;
    padding: 1rem;
    cursor: pointer;
  }

  & > button {
    margin: 0 auto;
  }
}
</style>
