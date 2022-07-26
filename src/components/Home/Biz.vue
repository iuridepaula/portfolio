<template>
  <div>
    <TitleSection scene="bizTitle">
      <TitleFunction params="2011,2019">biz</TitleFunction>
    </TitleSection>

    <Scene id="biz1">
      <TextBlock>
        <p class="-big">
          From 2011 to 2019 I was
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
          A SaaS e-commerce platform focused on simplifying and customizing the
          use of Magento.
        </p>
      </TextBlock>
      <template #container>
        <ABiz :isPlaying="isPlaying.ABiz" />
        <Dino :isPlaying="isPlaying.Dino" />
        <Astronaut :isPlaying="isPlaying.Astronaut" />
        <CoffeeMug :isPlaying="isPlaying.CoffeeMug" />
        <Shrimp v-if="$viewport.isDesktop" :isPlaying="isPlaying.Shrimp" />
        <Octopus v-if="$viewport.isDesktop" :isPlaying="isPlaying.Octopus" />
        <ET v-if="!$viewport.isMobile" :isPlaying="isPlaying.ET" />
        <Zen v-if="!$viewport.isMobile" :isPlaying="isPlaying.Zen" />
        <Shapes :isPlaying="isPlaying.Shapes" />
      </template>
    </Scene>
    <Scene id="biz2">
      <TextBlock>
        <p>
          Throughout these years we delivered hundreds of
          <span class="-big -purple">
            tools, modules, integrations, and custom projects
          </span>
          for online stores and service providers.
        </p>
      </TextBlock>
    </Scene>
    <Scene id="biz3">
      <TextBlock>
        <p>
          biz currently runs
          <span class="-big">
            <span class="-purple">+1200 stores</span>, payment & shipping
            integrations with
            <span class="-purple">thousands of transactions</span> daily.
          </span>
        </p>
      </TextBlock>
    </Scene>
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
import TitleSection from './TitleSection.vue'
import TitleFunction from './TitleFunction.vue'
import TextBlock from '../TextBlock.vue'
import Scene from '../Scene.vue'

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
    TitleSection,
    TitleFunction,
    TextBlock,
    Scene,
  },
  props: {
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

<style lang="scss">
#biz1 {
  .static-container {
    position: relative;
    z-index: 2;
  }
  .container {
    z-index: unset;
  }
  svg {
    overflow: visible;
  }
}
#abiz {
  position: absolute;
  left: -5vw;
  top: calc(50% - 15vw);
  width: 30vw;
  height: 30vw;
  z-index: 10;
  transform: rotateY(180deg);
}
#zen {
  position: absolute;
  left: calc(100% - 30vw);
  top: 40vh;
  z-index: 20;
  width: 60vw;
  height: 80vh;
  transform: scale(2);
}
#et {
  position: absolute;
  right: 15vw;
  top: 30vh;
  z-index: 18;
  width: 20vw;
  height: 40vw;
}
#dino {
  position: fixed;
  right: 0;
  bottom: -4vh;
  z-index: 919;
  width: 50vh;
  height: 50vh;
  cursor: pointer;

  .dino-sounds {
    opacity: 0;
    stroke-dasharray: 74;
    stroke-dashoffset: 0;
    //animation: smoke 1s linear infinite;
  }

  @keyframes smoke {
    from {
      stroke-dasharray: 36;
      stroke-dashoffset: 72;
    }
    to {
      stroke-dasharray: 36;
      stroke-dashoffset: 0;
    }
  }

  &:hover {
    transition: filter 200ms ease-out;
    filter: brightness(1.2);

    .dino-sounds {
      opacity: 1;
      animation: smoke 1s linear infinite;
    }
  }
}
#astro {
  position: absolute;
  right: 0;
  bottom: 35vh;
  width: 20vw;
  height: 20vw;
}
#coffee {
  position: absolute;
  right: 15vw;
  top: 35vh;
  width: 5vw;
  height: 5vw;
}
#filomena {
  position: absolute;
  right: 40vw;
  bottom: 5vh;
  width: 10vw;
  height: 10vw;
}
#octo {
  position: absolute;
  right: 30vw;
  top: 60vh;
  width: 7vw;
  height: 7vw;
}
#open {
  position: absolute;
  left: -20vw;
  top: calc(50% - 20vw);
  z-index: -1;
  width: 40vw;
  height: 40vw;
}
#smart {
  position: absolute;
  left: 5vw;
  bottom: -5vw;
  z-index: -2;
  width: 20vw;
  height: 20vw;
  filter: brightness(0.7);
}
</style>
