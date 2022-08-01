<template>
  <div>
    <div class="castle-container" role="img" aria-labelledby="castleDesc">
      <p class="ariaLabel" id="castleDesc">
        The castle of Howl's movie Moving Castle, flying over a green lawn and a
        blue sky.
      </p>
      <div class="castle">
        <div class="top">
          <div class="top-tower"></div>
          <div class="top-clothes"></div>
          <div class="top-top"></div>
        </div>
        <div class="bucket"></div>
        <div class="mouth">
          <div class="back-lip"></div>
          <div class="front-lip"></div>
        </div>
        <div class="l-leg"></div>
        <div class="r-leg"></div>
        <div class="l-arm"></div>
        <div class="body"></div>
        <div class="fans">
          <div class="fan2"></div>
          <div class="fan1"></div>
          <div class="fix-tail"></div>
        </div>
        <div class="r-arm-holder">
          <div class="r-arm"></div>
          <div class="fix-shoulder"></div>
        </div>
        <div class="ear"></div>
        <div class="lower-foliage">
          <div class="foliage2"></div>
          <div class="foliage1"></div>
          <div class="fix-balcony"></div>
        </div>
        <div class="wing"></div>
        <div class="higher-foliage">
          <div class="foliage3"></div>
          <div class="foliage2"></div>
          <div class="foliage1"></div>
          <div class="fix-roof"></div>
        </div>
        <div class="flag"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { RoughEase, Power0 } from 'gsap'
import { LOOP_EASE_IN_OUT, LOOP } from '@/constants'
import { getNodes } from '@/utils'
import { character } from '../character.mixin'

export default {
  name: 'HolwsCastleCharacter',
  mixins: [character],
  methods: {
    init() {
      const castle = getNodes('.castle')

      this.loop
        .addLabel('start', 0)
        .to(
          castle.topTower,
          2,
          {
            rotation: -15,
            transformOrigin: '50% 100%',
            ease: RoughEase.ease.config({
              template: Power0.easeNone,
              strength: 0.5,
              points: 10,
              taper: 'none',
              randomize: true,
              clamp: false,
            }),
            ...LOOP,
          },
          'start'
        )
        .to(
          castle.bucket,
          0.6,
          {
            rotationZ: -25,
            rotationX: -45,
            transformOrigin: '50% 0%',
            ...LOOP,
          },
          'start'
        )
        .to(
          [castle.frontLip, castle.backLip],
          1.6,
          {
            rotation: -20,
            xPercent: -5,
            transformOrigin: '100% 0%',
            ease: RoughEase.ease.config({
              template: Power0.easeNone,
              strength: 1,
              points: 16,
              taper: 'none',
              randomize: true,
              clamp: false,
            }),
            ...LOOP,
          },
          'start'
        )
        .to(
          castle.ear,
          2,
          {
            rotation: -25,
            transformOrigin: '25% 50%',
            ease: RoughEase.ease.config({
              template: Power0.easeNone,
              strength: 1,
              points: 16,
              taper: 'none',
              randomize: true,
              clamp: false,
            }),
            ...LOOP,
          },
          'start'
        )
        .to(
          castle,
          1.6,
          {
            yPercent: -5,
            ...LOOP_EASE_IN_OUT,
          },
          'start'
        )

      if (this.$viewport.isDesktop) {
        this.loop
          .to(
            castle.topTower,
            2,
            {
              rotation: -15,
              transformOrigin: '50% 100%',
              ease: RoughEase.ease.config({
                template: Power0.easeNone,
                strength: 0.5,
                points: 10,
                taper: 'none',
                randomize: true,
                clamp: false,
              }),
              ...LOOP,
            },
            'start'
          )
          .to(
            castle.lLeg,
            2,
            {
              rotation: -15,
              transformOrigin: '0% 0%',
              ...LOOP_EASE_IN_OUT,
            },
            'start'
          )
          .to(
            castle.rLeg,
            2.2,
            {
              rotation: -15,
              transformOrigin: '0% 0%',
              ...LOOP_EASE_IN_OUT,
            },
            'start'
          )
          .to(
            castle.rArm,
            1.8,
            {
              rotation: 15,
              transformOrigin: '0% 0%',
              ...LOOP_EASE_IN_OUT,
            },
            'start'
          )
          .to(
            castle.lArm,
            2,
            {
              rotation: 15,
              transformOrigin: '0% 0%',
              ...LOOP_EASE_IN_OUT,
            },
            'start'
          )
          .to(
            castle.foliage1,
            0.7,
            {
              transformOrigin: '50% 100%',
              skewX: 10,
              ...LOOP,
            },
            'start'
          )
          .to(
            castle.foliage2,
            0.6,
            {
              transformOrigin: '50% 100%',
              skewX: -8,
              ...LOOP,
            },
            'start'
          )
          .to(
            castle.foliage3,
            0.5,
            {
              transformOrigin: '50% 100%',
              skewX: 6,
              ...LOOP,
            },
            'start'
          )
      }
    },
  },
}
</script>

<style lang="scss">
@mixin pieces-img {
  background: url('./assets/pieces.png') 0 0 no-repeat;
  background-size: 865px 713px;
}

.castle-container {
  position: relative;
  z-index: 0;
  width: 733px;
  height: 824px;
  transform-origin: 0 0;

  div {
    position: absolute;
  }
}

.castle {
  width: 100%;
  height: 100%;

  .top {
    top: 58px;
    left: 44px;
    width: 596px;
    height: 420px;
  }

  .top-top {
    top: 0;
    left: 0;
    width: 596px;
    height: 420px;
    @include pieces-img;
    background-position: 0 0;
  }

  .top-tower {
    top: -58px;
    left: 102px;
    width: 131px;
    height: 172px;
    @include pieces-img;
    background-position: -596px 0;
  }

  .top-clothes {
    top: 36px;
    left: 500px;
    width: 130px;
    height: 323px;
    background: url('./assets/clothes.png') no-repeat 0 0;
    background-size: 390px 323px;
    animation: clothes 0.25s steps(3) infinite;

    @keyframes clothes {
      to {
        background-position: -390px 0;
      }
    }
  }

  .bucket {
    top: 499px;
    left: 580px;
    width: 15px;
    height: 54px;
    background: url('./assets/bucket.png') 0 0;
  }

  .mouth {
    .back-lip {
      top: 550px;
      left: 71px;
      width: 150px;
      height: 150px;
      @include pieces-img;
      background-position: 0 -563px;
    }

    .front-lip {
      top: 551px;
      left: 72px;
      width: 150px;
      height: 150px;
      @include pieces-img;
      background-position: -150px -563px;
    }
  }

  .l-leg {
    top: 714px;
    left: 409px;
    width: 132px;
    height: 110px;
    @include pieces-img;
    background-position: -727px -140px;
  }

  .r-leg {
    top: 668px;
    left: 462px;
    width: 152px;
    height: 136px;
    @include pieces-img;
    background-position: -300px -563px;
  }

  .l-arm {
    top: 697px;
    left: 191px;
    width: 146px;
    height: 104px;
    @include pieces-img;
    background-position: -388px -420px;
  }

  .body {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('./assets/body.png') no-repeat 0 0;
    background-size: 100% 100%;
  }

  .fans {
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;

    .fan2 {
      width: 100%;
      height: 100%;
      background: url('./assets/fan-2.png') 0 0 no-repeat;
      background-size: 2199px 824px;
      animation: fan1 0.3s steps(3) infinite;
    }

    .fan1 {
      width: 100%;
      height: 100%;
      background: url('./assets/fan-1.png') no-repeat 0 0;
      background-size: 2199px 824px;
      animation: fan1 0.4s steps(3) infinite;

      @keyframes fan1 {
        to {
          background-position: -2199px 0;
        }
      }
    }

    .fix-tail {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url('./assets/fixed-tails.png') 0 0 no-repeat;
      background-size: 100% 100%;
    }
  }

  .r-arm-holder {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    .r-arm {
      top: 643px;
      left: 254px;
      width: 177px;
      height: 143px;
      @include pieces-img;
      background-position: 0 -420px;
    }

    .fix-shoulder {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url('./assets/fixed-shoulder.png') 0 0 no-repeat;
      background-size: 100% 100%;
    }
  }

  .ear {
    top: 523px;
    left: 205px;
    width: 70px;
    height: 53px;
    background: url('./assets/ear.png') 0 0;
  }

  .lower-foliage {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    .foliage2 {
      top: 360px;
      left: 244px;
      width: 121px;
      height: 99px;
      @include pieces-img;
      background-position: -727px -250px;
    }

    .foliage1 {
      top: 417px;
      left: 307px;
      width: 110px;
      height: 62px;
      @include pieces-img;
      background-position: -727px -349px;
    }

    .fix-balcony {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url('./assets/fixed-balcony.png') 0 0 no-repeat;
      background-size: 100% 100%;
    }
  }

  .wing {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('./assets/wing.png') no-repeat 0 0;
    background-size: 4398px 824px;
    animation: wing 0.4s steps(6) infinite alternate;

    @keyframes wing {
      to {
        background-position: -4398px 0;
      }
    }
  }

  .higher-foliage {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    .foliage3 {
      top: 183px;
      left: 290px;
      width: 138px;
      height: 140px;
      @include pieces-img;
      background-position: -727px 0;
    }

    .foliage2 {
      top: 239px;
      left: 357px;
      width: 211px;
      height: 119px;
      @include pieces-img;
      background-position: -177px -420px;
    }

    .foliage1 {
      top: 320px;
      left: 438px;
      width: 89px;
      height: 62px;
      @include pieces-img;
      background-position: -727px -411px;
    }

    .fix-roof {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url('./assets/fixed-roof.png') 0 0 no-repeat;
      background-size: 100% 100%;
    }
  }

  .flag {
    top: 323px;
    left: 429px;
    width: 53px;
    height: 30px;
    background: url('./assets/flag.png') 0 0;
    animation: flag 0.2s steps(2) infinite;

    @keyframes flag {
      to {
        background-position: -106px 0;
      }
    }
  }
}
</style>
