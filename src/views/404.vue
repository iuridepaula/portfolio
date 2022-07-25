<template>
  <div id="err404" class="wrapper">
    <div class="static-container">
      <h1 class="title">err(<span class="params">404</span>)</h1>

      <div class="std">
        <p class="-big">Lost?</p>

        <p>The page you requested could not be found.</p>
        <router-link to="/" title="Back home" class="bt">
          <svg class="nav-ico -prev" viewBox="0 0 16 16">
            <path d="M5,1h10v10 M5.5,10.5l0.8-0.8" />
          </svg>
          Back home
        </router-link>
      </div>
    </div>

    <Astronaut isPLaying />
    <CoffeeMug isPLaying />
  </div>
</template>

<script>
import { Astronaut, CoffeeMug } from '@/components/Characters'

export default {
  name: '404View',
  components: {
    Astronaut,
    CoffeeMug,
  },
}
</script>

<style lang="scss">
#err404 {
  #astro {
    position: fixed;
    right: -20vw;
    bottom: 0;
    width: 60vw;
    height: 60vh;
    overflow: visible;
  }
  #coffee {
    position: absolute;
    right: 30vw;
    bottom: 70vh;
    width: 12vw;
    height: 12vh;
    overflow: visible;
  }
}
</style>
