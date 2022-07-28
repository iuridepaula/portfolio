<template>
  <Scene id="Mario" role="img" aria-labelledby="marioDesc">
    <p class="ariaLabel" id="marioDesc">
      Three boxes with a question mark, from the Super Mario Bros game, are
      standing in the center of the screen ... try to find the coin in one of
      them by using the numbers 1, 2, and 3 on your keyboard!
    </p>
    <template #container>
      <div class="blocks">
        <SuperMarioBlock
          v-for="(block, i) in 3"
          :key="i"
          @jumped="onJumped"
          @foundCoin="onFoundCoin"
          @foundAllCoins="onFoundAllCoins"
          :hasCoins="randomBlock === i + 1"
        />
      </div>

      <SuperMarioMario class="mario-container" :state="marioState" />

      <div class="mario-coin-counter" v-show="foundCoins">
        {{ foundCoins }}
      </div>

      <div v-show="hasFoundAllCoins">
        <div class="mario-msg-overlay"></div>
        <div class="mario-msg">
          Hooray! Thanks for jumping so many times. <br />
          <span class="-purple">You found all the coins!</span>
          <br />&nbsp;<br />
          Keep scrolling, you're near the end!

          <div class="later">
            ;)
            <button
              class="mario-msg-close"
              type="button"
              title="Close message"
              @click="onCloseMessage"
            >
              ✕
            </button>
          </div>
        </div>
      </div>
    </template>
  </Scene>
</template>

<script>
import { TimelineMax, SteppedEase } from 'gsap'
import { random } from '@/utils'
import { SuperMarioBlock, SuperMarioMario } from '@/components/Characters'
import AudioExit from '@/components/Characters/SuperMario/assets/smw_keyhole_exit.ogg'
import Scene from '../Scene.vue'

export default {
  name: 'SuperMarioScene',
  components: { Scene, SuperMarioBlock, SuperMarioMario },
  data() {
    return {
      foundCoins: 0,
      marioState: null,
      hasFoundAllCoins: false,
      randomBlock: random(1, 3),
      audioExit: new Audio(AudioExit),
    }
  },
  methods: {
    onJumped(block) {
      const rect = block.getBoundingClientRect()
      const blockCenter = Math.floor(rect.x + rect.width / 2)
      const blockBottom = rect.bottom

      this.jumpMario(blockCenter, blockBottom)
    },
    jumpMario(blockCenter, blockBottom) {
      const mario = this.$el.querySelector('.mario')
      const marioRect = mario.getBoundingClientRect()
      const isJumpingLeft = marioRect.x > blockCenter
      const marioFloor = window.innerHeight - marioRect.height
      const marioAnimation = new TimelineMax()

      marioAnimation
        .clear(true)
        .set(mario, {
          rotationY: isJumpingLeft ? 180 : 0,
        })
        .fromTo(
          mario,
          0.3,
          {
            left: marioRect.x,
            top: marioFloor,
            onStart: () => {
              this.marioState = 'up'
            },
          },
          {
            bezier: {
              curviness: 1.25,
              values: [
                {
                  left: blockCenter - marioRect.width / 2,
                  top: this.$viewport.isTablet
                    ? blockBottom * 0.85
                    : blockBottom,
                },
                {
                  left: isJumpingLeft ? blockCenter - 128 : blockCenter + 128,
                  top: this.$viewport.isTablet ? marioFloor * 0.9 : marioFloor,
                  onStart: () => {
                    this.marioState = 'down'
                  },
                },
              ],
              autoRotate: false,
            },
            ease: SteppedEase.config(12),
            onComplete: () => {
              this.marioState = this.hasFoundAllCoins ? 'celebrate' : null
            },
          }
        )
    },
    onFoundCoin(foundCoins) {
      this.$emit('foundCoin')
      this.foundCoins = foundCoins

      document.body.classList.remove('is-playing-mario')
      document.body.classList.add('has-played-mario')
      document.body.classList.add('blue-background')
    },
    onFoundAllCoins() {
      this.$emit('foundAllCoins')
      this.hasFoundAllCoins = true
      this.marioState = 'celebrate'
      this.onOpenMessage()
    },
    onOpenMessage() {
      this.audioExit.play()
      const timeline = new TimelineMax()
      timeline
        .to('#Mario .mario-msg', 1, {
          scale: 1,
          ease: SteppedEase.config(12),
        })
        .to(
          '#Mario .mario-msg .later',
          0.1,
          {
            autoAlpha: 1,
          },
          '+=2'
        )
    },
    onCloseMessage() {
      const timeline = new TimelineMax()
      timeline.to('#Mario .mario-msg, #Mario .mario-msg-overlay', 1, {
        scale: 0,
        ease: SteppedEase.config(12),
      })
    },
  },
}
</script>

<style lang="scss">
body.is-playing-mario {
  overflow: hidden;

  #header,
  .wrapper:after,
  .spine,
  .spine-target {
    transition: opacity 200ms ease-out;
    opacity: 0 !important;
  }

  &:before {
    content: '?';
    font-family: 'SMW', monospace;
    font-size: 3rem;
    color: #fff;
    position: fixed;
    top: 8rem;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
  }
}

#Mario {
  position: relative;
  z-index: 999;

  .blocks {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: max(2rem, 6vw);
    margin-top: 35vh;
  }
  .mario-box {
    left: calc(50% - 64px);
  }
  .mario {
    position: fixed !important;
    top: calc(100% - 248px);
    left: calc(50% - 64px);
  }
  .mario-coin-counter {
    position: fixed;
    top: 7rem;
    left: calc(50% - 3rem);
    width: 7rem;
    text-align: center;
    line-height: 3rem;
    font-family: 'SMW', monospace;
    font-size: 2rem;
    color: #fff;
    display: flex;
    align-items: center;

    &:before {
      flex: 0 0 auto;
      content: '';
      margin-right: 0.5rem;
      width: 2rem;
      height: 2rem;
      background: url('../Characters/SuperMario/assets/bg-mario.png') no-repeat
        0 -64px;
      background-size: 160px 158px;
    }
  }

  @media screen and (max-width: 1024px) {
    .mario-box,
    .mario {
      transform-origin: 50% 100%;
      transform: scale(0.7);
    }

    .container {
      transform: scale(1);
    }

    .mario-coin-counter {
      top: 6rem;
      font-size: 1.5rem;

      &:before {
        transform: scale(0.8);
      }
    }
  }
}

.mario-msg-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
}
.mario-msg {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 9999;
  transform: translate3d(-50%, -50%, 0) scale(0);
  transform-origin: 50% 50%;
  width: 40rem;
  height: 30rem;
  padding: 2rem;
  max-width: 70vw;
  max-height: 70vh;
  background: #000;
  color: #fff;
  font-family: 'SMW', monospace;
  font-size: 2rem;
  text-align: center;
  letter-spacing: 2px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  user-select: none;

  .-purple {
    color: var(--purple);
  }

  .later {
    color: var(--purple);
    opacity: 0;
    padding-top: 2rem;
    position: static;
    text-align: center;
  }

  @media screen and (max-width: 568px) {
    padding: 1rem;
    max-width: 80vw;
    font-size: 1.2rem;

    .later {
      padding-top: 1rem;
    }
  }
}
.mario-msg-close {
  position: absolute;
  bottom: 100%;
  right: 0;
  z-index: 99;
  width: 3rem;
  height: 3rem;
  color: #000;
  font-size: 2rem;
  background: none;
  padding: 0;
}
</style>
