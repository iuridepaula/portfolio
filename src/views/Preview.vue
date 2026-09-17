<template>
  <div class="preview">
    <component
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
import { defineAsyncComponent } from 'vue'

const ABiz = defineAsyncComponent(() => import('../components/Characters/ABiz'))
const Astronaut = defineAsyncComponent(() =>
  import('../components/Characters/Astronaut')
)
const CoffeeMug = defineAsyncComponent(() =>
  import('../components/Characters/CoffeeMug')
)
const Dino = defineAsyncComponent(() => import('../components/Characters/Dino'))
const ET = defineAsyncComponent(() => import('../components/Characters/ET'))
const HolwsCastle = defineAsyncComponent(() =>
  import('../components/Characters/HolwsCastle')
)
const Ocean = defineAsyncComponent(() =>
  import('../components/Characters/Ocean')
)
const Octopus = defineAsyncComponent(() =>
  import('../components/Characters/Octopus')
)
const Pepe = defineAsyncComponent(() => import('../components/Characters/Pepe'))
const Potion = defineAsyncComponent(() =>
  import('../components/Characters/Potion')
)
const Shapes = defineAsyncComponent(() =>
  import('../components/Characters/Shapes')
)
const Shrimp = defineAsyncComponent(() =>
  import('../components/Characters/Shrimp')
)
const Zen = defineAsyncComponent(() => import('../components/Characters/Zen'))
const SuperMarioCoin = defineAsyncComponent(() =>
  import('../components/Characters/SuperMario/Coin.vue')
)
const SuperMarioBlock = defineAsyncComponent(() =>
  import('../components/Characters/SuperMario/Block.vue')
)
const SuperMarioMario = defineAsyncComponent(() =>
  import('../components/Characters/SuperMario/Mario.vue')
)

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
