<template>
  <div id="home" class="wrapper">
    <IntroScene />
    <GapBlock />

    <TitleSection scene="curriculum">
      <TitleFunction params="/^.*$/gi" subtitle="&lt;WorkShowcase&gt;"
        >myCV</TitleFunction
      >
    </TitleSection>

    <BizScene :isPlaying="isPlaying.Biz" />
    <GapBlock />

    <EarlyDaysScene :isPlaying="isPlaying.EarlyDays" />
    <GapBlock />

    <TitleSection scene="ArtPhiGamesTitle">
      <TitleFunction subtitle="background.bmp">
        <span
          class="line"
          v-for="text in ['Art', 'Philosophy', 'Games']"
          :key="text"
        >
          <span class="params">${</span>{{ text }}<span class="params">}</span>
        </span>
      </TitleFunction>
    </TitleSection>

    <SuperMarioScene />
    <GapBlock />

    <GhibliScene :isPlaying="isPlaying.Ghibli" />

    <WrapperScene />

    <ThanksScene :isPlayng="isPlaying.Potion" />
  </div>
</template>

<script>
import { TimelineMax, TweenLite, Power0, Power1, Power2, Power3 } from 'gsap'
import * as ScrollMagic from 'scrollmagic'
import {
  DOM,
  removeBodyClass,
  addBodyClass,
  isReverse,
  isForward,
} from '@/utils'
import AudioMarioStart from '../components/Characters/SuperMario/assets/smw_princess_help.ogg'
import IntroScene from '../components/Home/IntroScene.vue'
import BizScene from '../components/Home/BizScene.vue'
import EarlyDaysScene from '../components/Home/EarlyDaysScene.vue'
import SuperMarioScene from '../components/Home/SuperMarioScene.vue'
import GhibliScene from '../components/Home/GhibliScene.vue'
import WrapperScene from '../components/Home/WrapperScene.vue'
import ThanksScene from '../components/Home/ThanksScene.vue'
import GapBlock from '../components/GapBlock.vue'
import TitleSection from '../components/TitleSection.vue'
import TitleFunction from '../components/TitleFunction.vue'

export default {
  name: 'HomeView',
  components: {
    IntroScene,
    BizScene,
    EarlyDaysScene,
    SuperMarioScene,
    GhibliScene,
    WrapperScene,
    ThanksScene,
    GapBlock,
    TitleSection,
    TitleFunction,
  },
  data() {
    return {
      audioMarioStart: new Audio(AudioMarioStart),
      scrollMagicController: new ScrollMagic.Controller(),
      scrollMagicScene: {},
      timelines: {},
      tweeners: {},
      isPlaying: {
        Biz: false,
        EarlyDays: false,
        Ghibli: false,
        Potion: false,
      },
    }
  },
  created() {
    window.addEventListener('beforeunload', () => window.scroll(0, 0))
  },
  mounted() {
    // setup
    this.playIntroScene()
    this.setupScenes()
    this.manageLoops()
    // scenes animation
    this.sceneMyCV()
    this.sceneBizTitle()
    this.sceneBizZen()
    this.sceneBizEverybody()
    this.sceneBizEnding()
    this.sceneEarlyDays()
    this.sceneOcean()
    this.sceneFloatingHead()
    this.sceneSunset()
    this.sceneArtPhiGames()
    this.sceneMario()
    this.sceneGhibli()
    this.sceneWrapper()
  },
  beforeUnmount() {
    // loop animations
    this.isPlaying = {
      Biz: false,
      EarlyDays: false,
      Ghibli: false,
      Potion: false,
    }
    // to avoid style issues
    removeBodyClass('is-playing-mario', 'blue-background')
    // timelines
    Object.values(this.timelines).forEach((timeLine) => timeLine.kill())
    this.timelines = {}
    // tweeners
    Object.values(this.tweeners).forEach((tweener) => tweener.kill())
    this.tweeners = {}
    // scrollMagic
    this.scrollMagicController.destroy(true)
    this.scrollMagicController = null
    Object.values(this.scrollMagicScene).forEach((scene) => scene.destroy(true))
    this.scrollMagicScene = {}
  },
  methods: {
    setupScenes() {
      const scenesElements = {
        myCV: DOM.get('#curriculum.scene'),
        bizTitle: DOM.get('#bizTitle.scene'),
        biz1: DOM.get('#biz1.scene'),
        biz2: DOM.get('#biz2.scene'),
        biz3: DOM.get('#biz3.scene'),
        earlyTitle: DOM.get('#earlyTitle.scene'),
        early1: DOM.get('#early-days.scene'),
        early2: DOM.get('#early-days2.scene'),
        early3: DOM.get('#early-days3.scene'),
        artPhiGamesTitle: DOM.get('#ArtPhiGamesTitle.scene'),
        mario: DOM.get('#Mario.scene'),
        ghibli: DOM.get('#Ghibli.scene'),
        ghibli2: DOM.get('#Ghibli2.scene'),
        ghibli3: DOM.get('#Ghibli3.scene'),
        ghibli4: DOM.get('#Ghibli4.scene'),
        wrapper: DOM.get('#wrapperTitle.scene'),
        thanks: DOM.get('#thanks.scene'),
      }

      Object.entries(scenesElements).forEach(([scene, element]) => {
        // tweeners animate timelines' progress, to add momentum
        this.tweeners[scene] = new TimelineMax()
        this.timelines[scene] = new TimelineMax({ paused: true })

        // ScrollMagic scenes
        this.scrollMagicScene[scene] = new ScrollMagic.Scene({
          triggerElement: element,
          offset: -this.$viewport.height / 2, // start half screen before
          duration: element.offsetHeight, // lasts for the element height
        })
          .setTween(this.tweeners[scene])
          .addTo(this.scrollMagicController)
          .reverse(true)
          .setClassToggle(element, 'active')

        // animate timeline progress from tweeners
        this.tweeners[scene]
          .to(element, 1, { autoAlpha: 1 }) // fake, just to have some progress
          .eventCallback('onUpdate', () => {
            TweenLite.to(this.timelines[scene], 0.5, {
              progress: this.tweeners[scene].progress(),
              ease: Power0.easeNone,
            })
          })
      })
    },
    playIntroScene() {
      const timeline = new TimelineMax()
      timeline
        .addLabel('enter', 1)
        .from(
          '#intro .title',
          2,
          {
            autoAlpha: 0,
            rotationX: 90,
            transformOrigin: '50% 50% -100px',
            ease: Power3.easeOut,
          },
          'enter'
        )
        .from(
          '#intro .std',
          2,
          {
            autoAlpha: 0,
            x: -32,
            ease: Power3.easeOut,
          },
          'enter+=1.5'
        )
    },
    manageLoops() {
      // play & stop loop animations based on each scene
      this.scrollMagicScene.myCV.on('enter', () => (this.isPlaying.Biz = false))
      this.scrollMagicScene.bizTitle.on(
        'enter',
        () => (this.isPlaying.Biz = true)
      )
      this.scrollMagicScene.biz1.on('enter', () => (this.isPlaying.Biz = true))
      this.scrollMagicScene.biz2.on('enter', () => (this.isPlaying.Biz = true))
      this.scrollMagicScene.biz3.on('enter', () => (this.isPlaying.Biz = true))
      this.scrollMagicScene.earlyTitle.on('enter', () => {
        this.isPlaying.Biz = true
        this.isPlaying.EarlyDays = true
      })
      this.scrollMagicScene.early1.on('enter', () => {
        this.isPlaying.Biz = false
        this.isPlaying.EarlyDays = true
      })
      this.scrollMagicScene.early2.on('enter', (e) => {
        if (isReverse(e)) {
          this.isPlaying.EarlyDays = true
        }
      })
      this.scrollMagicScene.early3.on('enter', () => {
        removeBodyClass('is-playing-mario', 'blue-background')
      })
      this.scrollMagicScene.artPhiGamesTitle.on('enter', () => {
        removeBodyClass('is-playing-mario', 'blue-background')
      })
      this.scrollMagicScene.mario
        .on('enter', (e) => {
          if (isForward(e)) {
            this.isPlaying.EarlyDays = false
          }
          if (isReverse(e)) {
            addBodyClass('blue-background')
          }
        })
        .on('leave', (e) => {
          if (isReverse(e)) {
            this.isPlaying.Ghibli = false
          }
          removeBodyClass('blue-background')
        })
      this.scrollMagicScene.ghibli
        .on('enter', () => {
          this.isPlaying.Ghibli = true
          removeBodyClass('is-playing-mario')
          addBodyClass('blue-background')
        })
        .on('leave', () => removeBodyClass('blue-background'))
      this.scrollMagicScene.ghibli2
        .on('enter', () => addBodyClass('blue-background'))
        .on('leave', () => removeBodyClass('blue-background'))
      this.scrollMagicScene.ghibli3
        .on('enter', () => addBodyClass('blue-background'))
        .on('leave', () => removeBodyClass('blue-background'))
      this.scrollMagicScene.ghibli4
        .on('enter', () => addBodyClass('blue-background'))
        .on('leave', () => removeBodyClass('blue-background'))
      this.scrollMagicScene.wrapper.on('enter', () => {
        removeBodyClass('blue-background')
        this.isPlaying.Ghibli = true
        this.isPlaying.Potion = false
      })
      this.scrollMagicScene.thanks.on('enter', () => {
        this.isPlaying.Ghibli = false
        this.isPlaying.Potion = true
      })
    },
    sceneMyCV() {
      this.timelines.myCV
        .set('#curriculum .title-container', { autoAlpha: 1 }) // show animations
        .addLabel('start', 0)
        .from(
          '#curriculum .title',
          2,
          {
            yPercent: -50,
            autoAlpha: 0,
            rotationX: 90,
            transformOrigin: '50% 50% -100px',
            ease: Power3.easeOut,
          },
          'start'
        )
        .from(
          '#curriculum .std',
          2,
          {
            yPercent: 50,
            autoAlpha: 0,
            rotationX: -90,
            transformOrigin: '50% 50% -100px',
            ease: Power3.easeOut,
          },
          'start'
        )
        .to('#curriculum .title, #curriculum .std', 2, {
          autoAlpha: 0,
          yPercent: -100,
        })
    },
    sceneBizTitle() {
      this.timelines.bizTitle
        // next scene characters
        .set('#filomena', {
          autoAlpha: 0,
          scale: 0,
          xPercent: 600,
          yPercent: 100,
        })
        .set('#dino', {
          scale: 0,
          xPercent: 400,
          yPercent: 100,
        })
        .set('#astro, #coffee, #et, #octo', {
          autoAlpha: 0,
          scale: 0,
          xPercent: 400,
          yPercent: 100,
        })
        // this scene
        .set('#bizTitle .title-container, #biz1 .container', { autoAlpha: 1 })
        .addLabel('start', 0)
        .from(
          '#bizTitle .title',
          6,
          {
            yPercent: -50,
            autoAlpha: 0,
            rotationX: 90,
            transformOrigin: '50% 50% -100px',
            ease: Power3.easeOut,
          },
          'start'
        )
        .to('#bizTitle .title', 6, {
          autoAlpha: 0,
          yPercent: -100,
        })
        .staggerFrom(
          '#smart, #open',
          6,
          {
            autoAlpha: 0,
            scale: 0,
            ease: Power3.easeOut,
          },
          0.2,
          'start+=2'
        )
        .from(
          '#abiz',
          6,
          {
            scale: 0,
          },
          'start+=2'
        )
    },
    sceneBizZen() {
      this.timelines.biz1
        .addLabel('start', 0)
        .from(
          '#zen',
          4,
          {
            xPercent: 70,
            ease: Power3.easeOut,
          },
          'start'
        )
        .to(
          '#abiz',
          4,
          {
            autoAlpha: 0,
            xPercent: -100,
            ease: Power3.easeIn,
          },
          'start'
        )
        .staggerTo(
          '#smart, #open',
          4,
          {
            autoAlpha: 0,
            scale: 0,
            ease: Power3.easeOut,
          },
          0.2,
          'start'
        )
    },
    sceneBizEverybody() {
      this.timelines.biz2
        .addLabel('start', 0)
        .to(
          '#zen',
          4,
          {
            yPercent: 130,
            ease: Power3.easeIn,
          },
          'start'
        )
        .staggerTo(
          '#dino, #astro, #coffee, #et, #filomena, #octo',
          5,
          {
            autoAlpha: 1,
            scale: 1,
            xPercent: 0,
            yPercent: 0,
            ease: Power3.easeOut,
          },
          0.2,
          'start'
        )
    },
    sceneBizEnding() {
      this.timelines.biz3
        .addLabel('start', 0)
        .to(
          '#dino',
          6,
          {
            yPercent: 200,
            scale: 1.5,
            ease: Power3.easeIn,
          },
          'start'
        )
        .to(
          '#et',
          6,
          {
            xPercent: -250,
            yPercent: -100,
            autoAlpha: 0,
            ease: Power3.easeIn,
          },
          'start'
        )
        .to(
          '#filomena',
          6,
          {
            xPercent: -300,
            yPercent: 300,
            autoAlpha: 0,
            ease: Power3.easeIn,
          },
          'start'
        )
        .to(
          '#octo',
          6,
          {
            xPercent: -650,
            yPercent: 400,
            autoAlpha: 0,
            ease: Power3.easeIn,
          },
          'start'
        )
        .to(
          '#astro',
          12,
          {
            bottom: '-10vh',
            right: '-10vw',
            scale: 4,
            ease: Power3.easeInOut,
          },
          'start'
        )
        .to(
          '#coffee',
          12,
          {
            top: '8rem',
            left: 0,
            scale: 4,
            ease: Power3.easeInOut,
          },
          'start'
        )
    },
    sceneEarlyDays() {
      // Clouds parallax
      const timeline = this.createParallax({
        triggerElement: '#earlyTitle',
      })
      timeline
        .addLabel('start', 0)
        .fromTo(
          '.cloud-1',
          10,
          {
            yPercent: 50,
            xPercent: 20,
          },
          {
            yPercent: -85,
            xPercent: -20,
          },
          'action'
        )
        .fromTo(
          '.cloud-2',
          10,
          {
            yPercent: 40,
            xPercent: -10,
          },
          {
            yPercent: -40,
            xPercent: 85,
          },
          'action'
        )
        .fromTo(
          '.cloud-3',
          10,
          {
            yPercent: 70,
            xPercent: 40,
          },
          {
            yPercent: -85,
            xPercent: -40,
          },
          'action'
        )

      // EarlyDays()
      this.timelines.earlyTitle
        .set('.pepe-scenery', { autoAlpha: 0 })
        .set('#biz1 .container', { autoAlpha: 1 })
        .addLabel('start', 0)
        .to(
          '#astro',
          4,
          {
            yPercent: 600,
            xPercent: 200,
            ease: Power2.easeIn,
          },
          'start'
        )
        .to(
          '#coffee',
          4,
          {
            yPercent: -600,
            xPercent: -200,
            ease: Power2.easeIn,
          },
          'start'
        )
        .to('#earlyTitle .title-container', 2, { autoAlpha: 1 }, 'start')
        .from(
          '#earlyTitle .title',
          4,
          {
            yPercent: -50,
            autoAlpha: 0,
            rotationX: 90,
            transformOrigin: '50% 50% -100px',
            ease: Power3.easeOut,
          },
          'start'
        )
        .from(
          '#earlyTitle .std',
          4,
          {
            yPercent: 50,
            autoAlpha: 0,
            rotationX: -90,
            transformOrigin: '50% 50% 100px',
            ease: Power3.easeOut,
          },
          'start'
        )
        .to('#earlyTitle .title, #earlyTitle .std', 4, {
          autoAlpha: 0,
          yPercent: -100,
        })
    },
    sceneOcean() {
      // Pepe head parallax
      const timeline = this.createParallax({
        triggerElement: '#early-days2',
        duration: this.$viewport.height * 4,
      })
      const pepeLength = window.innerWidth + DOM.get('.pepe').offsetWidth + 16

      timeline.addLabel('start').to(
        '.pepe',
        10,
        {
          x: `-${pepeLength}px`,
          scale: 0.5,
        },
        'start'
      )

      this.timelines.early1
        .set('#biz1 .container', { autoAlpha: 0 })
        .to('.pepe-scenery', 8, { autoAlpha: 1 })
    },
    sceneFloatingHead() {
      this.timelines.early2.addLabel('start', 0)
    },
    sceneSunset() {
      this.timelines.early3
        .set('#Mario .container', { autoAlpha: 0 })
        .to('.pepe-scenery', 8, { autoAlpha: 0 })
    },
    sceneArtPhiGames() {
      this.timelines.artPhiGamesTitle
        .set('#Mario .container', { autoAlpha: 0 })
        .addLabel('start', 1)
        .to('#ArtPhiGamesTitle .title-container', 1, { autoAlpha: 1 })
        .staggerFrom('#ArtPhiGamesTitle .title .line', 4, {
          yPercent: -50,
          autoAlpha: 0,
          rotationX: 90,
          transformOrigin: '50% 50% -100px',
          ease: Power3.easeOut,
          stagger: 0.5,
        })
        .from(
          '#ArtPhiGamesTitle .std',
          4,
          {
            yPercent: 50,
            autoAlpha: 0,
            rotationX: -90,
            transformOrigin: '50% 50% 100px',
            ease: Power3.easeOut,
          },
          '-=1'
        )
        .to('#ArtPhiGamesTitle .title, #ArtPhiGamesTitle .std', 3, {
          yPercent: -100,
          autoAlpha: 0,
        })
        .set('#earlyTitle .title-container', { autoAlpha: 1 })
    },
    sceneMario() {
      // using tweener for precise timing
      this.tweeners.mario
        .to('#earlyTitle .title-container', 0.5, { autoAlpha: 0 }) // fix reverse scroll and help time the mario trigger
        .to('#Mario .container', 1, {
          autoAlpha: 1,
          zIndex: 4,
          onComplete: () => {
            const marioScene = document.getElementById('Mario')

            if (!marioScene || !marioScene.classList.contains('active'))
              return false // not this scene

            if (document.body.classList.contains('has-played-mario')) {
              addBodyClass('blue-background')
              return false
            }

            const audioContext = new AudioContext()
            if (audioContext.state === 'running') {
              this.audioMarioStart.play()
            }
            addBodyClass('is-playing-mario') // lock screen
          },
        })
    },
    sceneGhibli() {
      // grass parallax
      const grassTimeline = this.createParallax({
        triggerElement: '#Ghibli',
        timelineTime: 2,
        duration: this.$viewport.height * 4,
      })

      grassTimeline
        .addLabel('start', 0)
        .to(
          '#Ghibli .grass1',
          20,
          {
            yPercent: 10,
            xPercent: -100,
            ease: Power1.easeIn,
          },
          'start'
        )
        .to(
          '#Ghibli .grass2',
          20,
          {
            yPercent: 10,
            xPercent: 100,
            ease: Power1.easeIn,
          },
          'start'
        )
        .addLabel('start')

      // clouds parallax
      const gCloudsTimeline = this.createParallax({
        triggerElement: '#Ghibli',
        timelineTime: 6,
        duration: this.$viewport.height * 4,
      })

      gCloudsTimeline
        .addLabel('start', 0)
        .set('#Ghibli .sky .c1, #Ghibli .sky .c2', { yPercent: 50 })
        .to(
          '#Ghibli .sky .c1',
          20,
          {
            yPercent: 10,
            xPercent: -50,
            scale: 1.5,
            ease: Power1.easeIn,
          },
          'start'
        )
        .to(
          '#Ghibli .sky .c2',
          20,
          {
            yPercent: 0,
            scale: 1.5,
            ease: Power1.easeIn,
          },
          'start'
        )

      // Howl's Castle parallax
      const castleTimeline = this.createParallax({
        triggerElement: '#Ghibli',
        timelineTime: 3,
        duration: this.$viewport.height * 5,
      })

      const castleLength = this.$viewport.isMobile
        ? `-${
            window.innerWidth + DOM.get('.castle-container').offsetWidth + 16
          }px`
        : '-120vw'

      castleTimeline.to('.castle-container', 10, {
        x: castleLength,
        y: '-70vh',
        scale: 0.5,
      })

      this.timelines.ghibli
        .addLabel('start', 0)
        .to('#Mario .container', 4, { autoAlpha: 0 }, 'start')
        .to('#Ghibli .container', 4, { autoAlpha: 1 }, 'start')

      this.timelines.ghibli2.addLabel('start', 0)
      this.timelines.ghibli3.addLabel('start', 0)
      this.timelines.ghibli4.addLabel('start', 0)
    },
    sceneWrapper() {
      this.timelines.wrapper
        .addLabel('start', 0)
        .to('#Ghibli .container', 2, { autoAlpha: 0 }, 'start')
        .from('#wrapperTitle .static-container', 2, { autoAlpha: 1 })
    },
    createParallax(options) {
      const {
        tweenerElement,
        tweenerTime,
        timelineTime,
        offset,
        duration,
        triggerElement,
      } = {
        tweenerElement: '.tweenerElement',
        tweenerTime: 20,
        timelineTime: 4,
        offset: -this.$viewport.height / 2,
        duration: this.$viewport.height * 3.5,
        triggerElement: '',
        ...options,
      }

      const timeline = new TimelineMax({ paused: true })
      const tweener = new TimelineMax()

      tweener
        .to(tweenerElement, tweenerTime, { rotation: 0 })
        .eventCallback('onUpdate', () => {
          TweenLite.to(timeline, timelineTime, {
            progress: tweener.progress(),
            ease: Power3.easeOut,
          })
        })

      new ScrollMagic.Scene({
        triggerElement,
        offset,
        duration,
      })
        .setTween(tweener)
        .addTo(this.scrollMagicController)

      return timeline
    },
  },
}
</script>

<style lang="scss">
//fonts
@font-face {
  font-family: 'SMW';
  src: url('../assets/fonts/smw.woff2') format('woff2'),
    url('../assets/fonts/smw.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

#home {
  .scene .static-container {
    padding: 0;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
  }

  #ArtPhiGamesTitle {
    .line {
      display: block;
    }

    @media screen and (max-width: 568px) {
      .title {
        white-space: nowrap;
      }
    }
  }

  // standard text
  .std {
    font-size: 1.2rem;

    .-big {
      display: block;
      font-size: 4rem;
      font-weight: 700;
      word-spacing: -0.1em;
      letter-spacing: -0.05em;
      width: 70vw;

      @media screen and (max-width: 1024px) {
        font-size: 3.5rem;
        width: 90vw;
      }

      @media screen and (max-width: 768px) {
        width: 100%;
      }

      @media screen and (max-width: 568px) {
        font-size: 2rem;
      }
    }

    @media screen and (max-width: 568px) {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 568px) {
    .title {
      white-space: nowrap;
    }
  }
}
</style>
