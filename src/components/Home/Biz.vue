<template>
  <div>
    <Titles :viewport="viewport" scene="bizTitle">
      <h1 class="title">biz(<span class="params">2011,2019</span>)</h1>
    </Titles>

    <section class="scene" id="biz1">
      <div class="static-container">
        <div class="std">
          <p class="-big">
            For the past 8 years, I was
            <strong class="-purple">Head of Frontend</strong>
            @
            <a
              href="https://www.bizcommerce.com.br/"
              target="_blank"
              title="Visit Biz Commerce's website"
            >
              biz</a
            >.
          </p>
          <p>
            A SaaS e-commerce platform with a focus on simplifying and
            customizing the use of Magento.
          </p>
        </div>
      </div>
      <div class="container">
        <ABiz :isPlaying="isPlaying.ABiz" />
        <Dino :isPlaying="isPlaying.Dino" />
        <Astronaut :isPlaying="isPlaying.Astronaut" />
        <CoffeeMug :isPlaying="isPlaying.CoffeeMug" />
        <Shrimp v-if="!viewport.is1024" :isPlaying="isPlaying.Shrimp" />
        <Octopus v-if="!viewport.is1024" :isPlaying="isPlaying.Octopus" />
        <ET v-if="!viewport.is768" :isPlaying="isPlaying.ET" />
        <Zen v-if="!viewport.is568" :isPlaying="isPlaying.Zen" />
        <Shapes :isPlaying="isPlaying.Shapes" />
      </div>
    </section>
    <section class="scene" id="biz2">
      <div class="static-container">
        <div class="std">
          <p>
            Throughout these years we delivered hundreds of
            <span class="-big -purple">
              tools, modules, integrations, and custom projects
            </span>
            for online stores and service providers.
          </p>
        </div>
      </div>
    </section>
    <section class="scene" id="biz3">
      <div class="static-container">
        <div class="std">
          <p>
            biz currently runs
            <span class="-big">
              <span class="-purple">+1200 stores</span>, payment & shipping
              integrations with
              <span class="-purple">thousands of transactions</span> daily.
            </span>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {
  ABiz,
  Dino,
  Astronaut,
  CoffeeMug,
  Shrimp,
  Octopus,
  ET,
  Zen,
  Shapes,
} from '../Characters'
import Titles from './Titles.vue'

export default {
  name: 'BizScene',
  components: {
    ABiz,
    Dino,
    Astronaut,
    CoffeeMug,
    Shrimp,
    Octopus,
    ET,
    Zen,
    Shapes,
    Titles,
  },
  props: {
    viewport: Object,
    isPlaying: {
      ABiz: false,
      Dino: false,
      Astronaut: false,
      CoffeeMug: false,
      Shrimp: false,
      Octopus: false,
      ET: false,
      Zen: false,
      Shapes: false,
    },
  },
}
</script>
