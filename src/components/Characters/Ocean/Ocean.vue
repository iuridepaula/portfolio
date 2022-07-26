<template>
  <div>
    <div class="pepe-scenery" role="img" aria-labelledby="pepeDesc">
      <p class="ariaLabel" id="pepeDesc">
        A floating head carrying musical instruments in the ear, foliage and
        monuments in the hair, flies over a greenish ocean during the sunset
      </p>
      <div class="sky"></div>
      <div class="ocean">
        <div class="sky-mask"></div>
        <div class="ocean-waves w1"></div>
        <div class="ocean-waves w2"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { character } from '../character.mixin'

export default {
  name: 'OceanCharacter',
  mixins: [character],
  methods: {
    init() {
      // setup ocean
      const wave1 = document.querySelector('.ocean-waves.w1')
      const wave2 = document.querySelector('.ocean-waves.w2')

      this.loop
        .fromTo(
          wave1,
          16,
          {
            xPercent: 10,
            yPercent: 0,
            zIndex: 9,
          },
          {
            xPercent: 0,
            yPercent: -100,
            zIndex: 1,
            repeat: -1,
          }
        )
        .fromTo(
          wave2,
          16,
          {
            xPercent: 10,
            yPercent: 0,
            zIndex: 9,
          },
          {
            xPercent: 0,
            yPercent: -100,
            zIndex: 1,
            repeat: -1,
          },
          '-=8'
        )
    },
  },
}
</script>

<style lang="scss">
.pepe-scenery {
  z-index: -1;

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(var(--bg-rgb), 1) 40%,
      rgba(65, 96, 33, 0.2) 90%
    );
  }

  .sky {
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100vw;
    height: calc(100vh - 102px);
    background: url(./assets/sky.jpg) no-repeat 0 0;
    background-size: 100% 100%;

    @media screen and (max-width: 568px) {
      height: calc(100vh - 52px);
    }
  }
  .ocean {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: -1;
    width: 100vw;
    height: 102px;
    background: url(./assets/ocean-base.jpg) no-repeat 0 0;
    background-size: 100% 100%;
    overflow: hidden;

    @media screen and (max-width: 568px) {
      height: 52px;
    }
  }
  .sky-mask {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
    background: url(./assets/sky-mask.png) no-repeat 0 0;
    background-size: 100% 100%;
  }
  .ocean-waves {
    opacity: 0.9;
    position: absolute;
    top: 100%;
    left: -10%;
    width: 120%;
    height: 200%;
    background: url(./assets/ocean-waves.png) no-repeat center;
    background-size: 100% 100%;

    &.w2 {
      background-size: 120% 120%;
      transform: rotateY(180deg);
    }
  }
}
</style>
