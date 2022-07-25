<template>
  <div id="home" class="wrapper">
    <!--intro-->
    <Intro />

    <div class="gap"></div>

    <!--Title: CurriculumVitae()-->
    <Titles :viewport="viewport" scene="curriculum">
      <h1 class="title" v-if="viewport.is768">
        Curriculum<br />
        .vitae(<span class="params">'/.*$/g'</span>)
      </h1>
      <h1 class="title" v-else>
        CurriculumVitae(<span class="params">'/.*$/g'</span>)
      </h1>
      <div class="std">
        <p class="-gray">&lt;A life+work showcase&gt;</p>
      </div>
    </Titles>

    <!--biz commerce scenes-->
    <Biz :viewport="viewport" :isPlaying="{ ...isPlaying.Biz }" />
    <div class="gap"></div>

    <!--early days scenes-->
    <EarlyDays :viewport="viewport" />
    <div class="gap"></div>

    <!--Title: Art Phi Games-->
    <Titles :viewport="viewport" scene="ArtPhiGamesTitle">
      <h1 class="title">
        <span class="line"
          ><span class="params">`${</span>Art<span class="params">}</span></span
        >
        <span class="line"
          ><span class="params">&nbsp;${</span>Philosophy<span class="params"
            >}</span
          ></span
        >
        <span class="line"
          ><span class="params">&nbsp;${</span>VideoGames<span class="params"
            >}`</span
          ></span
        >
      </h1>
      <div class="std">
        <p class="-gray">background.bmp</p>
      </div>
    </Titles>

    <!--mario-->
    <SuperMario />
    <div class="gap"></div>

    <!--ghibli-->
    <Ghibli />

    <!--wrapper-->
    <Wrapper />

    <!--thanks-->
    <Thanks />
  </div>
</template>

<script>
// style
import { TimelineMax, TweenLite, Power0, Power1, Power2, Power3 } from 'gsap'
import '@/styles/home.scss'
// ScrollMagic
import * as ScrollMagic from 'scrollmagic'
// components
import Intro from '@/components/Home/Intro.vue'
import Titles from '@/components/Home/Titles.vue'
import Biz from '@/components/Home/Biz.vue'
import EarlyDays from '@/components/Home/EarlyDays.vue'
import SuperMario from '@/components/Home/SuperMario.vue'
import Ghibli from '@/components/Home/Ghibli.vue'
import Wrapper from '@/components/Home/Wrapper.vue'
import Thanks from '@/components/Home/Thanks.vue'
import Potion from '@/js/potion'
import Pepe from '@/js/pepe'
import Mario from '@/js/mario'
import Castle from '@/js/ghibli'

function removeBodyClass(...classes) {
  document.body.classList.remove(...classes)
}

function addBodyClass(...classes) {
  if (document.querySelector('#app.page-home')) {
    document.body.classList.add(...classes)
  }
}

export default {
  name: 'HomeView',
  components: {
    Intro,
    Titles,
    Biz,
    EarlyDays,
    SuperMario,
    Ghibli,
    Wrapper,
    Thanks,
  },
  props: {
    viewport: Object,
  },
  data() {
    return {
      intro: new TimelineMax(),
      scroller: new ScrollMagic.Controller(),
      scenes: [],
      timeLines: [],
      tweeners: [],
      isPlaying: {
        Biz: {
          ABiz: true,
          Dino: true,
          Astronaut: true,
          CoffeeMug: true,
          Shrimp: true,
          Octopus: true,
          ET: true,
          Zen: true,
          Shapes: true,
        },
      },
    }
  },
  created() {
    // before leaving the page, in case of refresh
    window.addEventListener('beforeunload', () => window.scroll(0, 0))
  },
  mounted() {
    /**
     * @TODO code split animations
     *       optimize code
     *       better Mario commands
     */

    // 01. play Intro
    this.playIntro()
    // 02. setup time lines and scenes
    this.setupScenes()
    // 03. build loop animations for each character
    this.buildLoops()
    // 04. Hook loops to ScrollMagic Scenes
    this.hookLoops()
    // 05. Animate every scene on scroll
    this.sceneCurriculumVitae()
    // biz(2011,2019)
    this.sceneBizTitle()
    this.sceneBizZen()
    this.sceneBizEverybody()
    this.sceneBizEnding()
    // EarlyDays(2008,2011)
    this.sceneEarlyDays()
    this.sceneOcean()
    this.sceneFloatingHead()
    this.sceneSunset()
    // ${Art} ${Philosophy} ${VideoGames}
    this.sceneArtPhiGames()
    this.sceneMario()
    this.sceneGhibli()
    // </wrapper>
    this.sceneWrapper()
  },
  beforeUnmount() {
    // stop loop animations
    Object.keys(this.isPlaying.Biz).forEach((character) => {
      this.isPlaying.Biz[character] = false
    })

    Castle.stop()
    Pepe.stop()
    Potion.stop()
    Mario.stop()

    // kill time lines
    this.timeLines.forEach((timeLine) => timeLine.kill())
    this.timeLines = []
    this.tweeners.forEach((tweener) => tweener.kill())
    this.tweeners = []

    // destroy ScrollMagic
    this.scroller.destroy(true)
    this.scroller = null
    this.scenes.forEach((scene) => {
      scene.on('enter', () => undefined)
      scene.destroy(true)
    })
    this.scenes = []
  },
  methods: {
    setupScenes() {
      /**
       * @desc
       * Where the magic happens
       *
       * add tweeners to the scenes,
       * then to the ScrollMagic controller,
       * and then the tweeners will tween the time lines.
       *
       * This way I can synchronize scenes to the HTML content
       * and keep the momentum effect on all browsers
       */
      const scenesElements = document.querySelectorAll('.scene')
      for (let [i, scenesElement] of Array.from(scenesElements).entries()) {
        // tweeners, to animate the time lines' progress, to add momentum
        this.tweeners[i] = new TimelineMax()
        // time lines
        this.timeLines[i] = new TimelineMax({ paused: true })
        // create scenes on ScrollMagic
        this.scenes[i] = new ScrollMagic.Scene({
          // trigger on the scene element
          triggerElement: scenesElement,
          // start half screen before
          offset: -this.viewport.h / 2,
          // lasts for the scene element height
          duration: scenesElement.offsetHeight,
        })
          .setTween(this.tweeners[i])
          .addTo(this.scroller)
          .reverse(true)
          .setClassToggle(scenesElement, 'active')
        // animate the progress in the time lines
        this.tweeners[i]
          .to(scenesElement, 1, { autoAlpha: 1 }) // fake, just to have some progress
          .eventCallback('onUpdate', () => {
            TweenLite.to(this.timeLines[i], 0.5, {
              progress: this.tweeners[i].progress(),
              ease: Power0.easeNone,
            })
          })
      }
    },
    playIntro() {
      /**
       * @desc
       * intro scene
       */
      this.intro
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
    hookLoops() {
      /**
       * @desc
       * play and stop loop animations
       * based on the scenes been played
       */
      this.scenes[0].on('enter', (e) => {
        if (e.scrollDirection === 'REVERSE') {
          this.isPlaying.Biz.ABiz = false
          this.isPlaying.Biz.Shapes = false
        }
      })
      this.scenes[1].on('enter', (e) => {
        if (e.scrollDirection === 'FORWARD') {
          this.isPlaying.Biz.ABiz = true
          this.isPlaying.Biz.Shapes = true
        }
        if (e.scrollDirection === 'REVERSE') {
          this.isPlaying.Biz.Zen = false
        }
      })
      this.scenes[2].on('enter', (e) => {
        if (e.scrollDirection === 'FORWARD') {
          this.isPlaying.Biz.Zen = true
        }
        if (e.scrollDirection === 'REVERSE') {
          // play
          this.isPlaying.Biz.ABiz = true
          this.isPlaying.Biz.Shapes = true
          // stop
          this.isPlaying.Biz.Shrimp = false
          this.isPlaying.Biz.Dino = false
          this.isPlaying.Biz.ET = false
          this.isPlaying.Biz.Octopus = false
          this.isPlaying.Biz.Astronaut = false
          this.isPlaying.Biz.CoffeeMug = false
        }
      })
      this.scenes[3].on('enter', (e) => {
        if (e.scrollDirection === 'FORWARD') {
          // stop
          this.isPlaying.Biz.ABiz = false
          this.isPlaying.Biz.Shapes = false
          // play
          this.isPlaying.Biz.Shrimp = true
          this.isPlaying.Biz.Dino = true
          this.isPlaying.Biz.ET = true
          this.isPlaying.Biz.Octopus = true
          this.isPlaying.Biz.Astronaut = true
          this.isPlaying.Biz.CoffeeMug = true
        }
        if (e.scrollDirection === 'REVERSE') {
          this.isPlaying.Biz.Zen = true
        }
      })
      this.scenes[4].on('enter', (e) => {
        if (e.scrollDirection === 'FORWARD') {
          this.isPlaying.Biz.Zen = false
        }
        if (e.scrollDirection === 'REVERSE') {
          this.isPlaying.Biz.Shrimp = true
          this.isPlaying.Biz.Dino = true
          this.isPlaying.Biz.ET = true
          this.isPlaying.Biz.Octopus = true
        }
      })
      this.scenes[5].on('enter', (e) => {
        if (e.scrollDirection === 'FORWARD') {
          this.isPlaying.Biz.Shrimp = false
          this.isPlaying.Biz.Dino = false
          this.isPlaying.Biz.ET = false
          this.isPlaying.Biz.Octopus = false
        }
        if (e.scrollDirection === 'REVERSE') {
          this.isPlaying.Biz.Astronaut = true
          this.isPlaying.Biz.CoffeeMug = true

          Pepe.stop()
        }
      })
      this.scenes[6].on('enter', (e) => {
        if (e.scrollDirection === 'FORWARD') {
          this.isPlaying.Biz.Astronaut = false
          this.isPlaying.Biz.CoffeeMug = false

          Pepe.play()
        }
      })
      this.scenes[9].on('enter', (e) => {
        if (e.scrollDirection === 'REVERSE') {
          Pepe.play()
          // release mario body lock and remove bg
          removeBodyClass('-mario-lock', '-mario-bg')
        }
      })
      this.scenes[10] /** @Mario **/
        .on('enter', (e) => {
          if (e.scrollDirection === 'FORWARD') {
            Pepe.stop()
            // mario bg is added inside mario.js
          }
          if (e.scrollDirection === 'REVERSE') {
            // add bg just in case
            addBodyClass('-mario-bg')
          }
        })
        .on('leave', (e) => {
          if (e.scrollDirection === 'REVERSE') {
            Castle.stop()
          }
        })
      this.scenes[11].on('enter', (e) => {
        if (e.scrollDirection === 'FORWARD') {
          Castle.play()
          // release mario body lock
          removeBodyClass('-mario-lock')
        }
        addBodyClass('-mario-bg')
      })
      this.scenes[12].on('enter', () => {
        // add bg just in case in both directions
        addBodyClass('-mario-bg')
      })
      this.scenes[13].on('enter', () => {
        // add bg just in case in both directions
        addBodyClass('-mario-bg')
      })
      this.scenes[14].on('enter', () => {
        // add bg just in case in both directions
        addBodyClass('-mario-bg')
      })
      this.scenes[15]
        .on('enter', (e) => {
          if (e.scrollDirection === 'FORWARD') {
            // remove bg
            removeBodyClass('-mario-bg')
          }
          if (e.scrollDirection === 'REVERSE') {
            Castle.play()

            Potion.stop()
          }
        })
        .on('leave', (e) => {
          if (e.scrollDirection === 'REVERSE') {
            // add bg
            addBodyClass('-mario-bg')
          }
        })
      this.scenes[16].on('enter', (e) => {
        if (e.scrollDirection === 'FORWARD') {
          Castle.stop()
          Potion.play()
        }
      })
    },
    buildLoops() {
      /**
       * @desc
       * mount loop animations
       */

      Castle.build()
      Potion.build()
      if (this.viewport.is568) {
        Castle.build568()
      } else {
        Castle.build()
      }
      if (this.viewport.is568) {
        Pepe.build568()
      } else if (this.viewport.is1024) {
        Pepe.build1024()
      } else {
        Pepe.build()
      }
    },
    sceneCurriculumVitae() {
      /**
       * @desc
       * Scrolling animations time lines
       */
      // CurriculumVitae()
      this.timeLines[0]
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
      // biz()
      this.timeLines[1]
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
      // Biz Commerce 1
      this.timeLines[2]
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
      // Biz Commerce 2
      this.timeLines[3]
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
      // Biz Commerce 3
      this.timeLines[4]
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
      let cloudsTimeline = new TimelineMax({ paused: true }),
        cloudsTweener = new TimelineMax()
      cloudsTweener
        .to('.cloud-1', 20, { rotation: 0 })
        .eventCallback('onUpdate', () => {
          TweenLite.to(cloudsTimeline, 4, {
            progress: cloudsTweener.progress(),
            ease: Power3.easeOut,
          })
        })

      cloudsTimeline
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

      new ScrollMagic.Scene({
        triggerElement: '#earlyTitle',
        offset: -this.viewport.h / 2,
        duration: this.viewport.h * 3.5,
      })
        .setTween(cloudsTweener)
        .addTo(this.scroller)

      // EarlyDays()
      this.timeLines[5]
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
      // Pepe parallax
      let pepeTimeline = new TimelineMax({ paused: true }),
        pepeTweener = new TimelineMax(),
        pepeLength =
          window.innerWidth + document.querySelector('.pepe').offsetWidth + 16

      pepeTweener
        .to('.pepe', 20, { rotation: 0 })
        .eventCallback('onUpdate', () => {
          TweenLite.to(pepeTimeline, 4, {
            progress: pepeTweener.progress(),
            ease: Power3.easeOut,
          })
        })

      pepeTimeline.addLabel('start').to(
        '.pepe',
        10,
        {
          x: `-${pepeLength}px`,
          scale: 0.5,
        },
        'start'
      )

      new ScrollMagic.Scene({
        triggerElement: '#early-days2',
        offset: -this.viewport.h / 2,
        duration: this.viewport.h * 4,
      })
        .setTween(pepeTweener)
        .addTo(this.scroller)

      // foothold on arts
      this.timeLines[6]
        .set('#biz1 .container', { autoAlpha: 0 })
        .to('.pepe-scenery', 8, { autoAlpha: 1 })
    },
    sceneFloatingHead() {
      // first company
      this.timeLines[7].addLabel('start', 0)
    },
    sceneSunset() {
      // porta, kibe etc.
      this.timeLines[8]
        .set('#Mario .container', { autoAlpha: 0 })
        .to('.pepe-scenery', 8, { autoAlpha: 0 })
    },
    sceneArtPhiGames() {
      this.timeLines[9]
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
      // Mario
      // using the tweener here
      // because I need to be precise about time, and the momentum would ruin it
      this.tweeners[10]
        .to('#earlyTitle .title-container', 0.5, { autoAlpha: 0 }) // fix reverse scroll and help time the mario trigger
        .to('#Mario .container', 1, {
          autoAlpha: 1,
          zIndex: 4,
          onComplete: () => Mario.action(),
        })
      this.timeLines[10].set('.mario', { yPercent: 200, autoAlpha: 0 })
    },
    sceneGhibli() {
      // Ghibli Grass parallax
      let grassTimeline = new TimelineMax({ paused: true }),
        grassTweener = new TimelineMax()

      grassTweener
        .to('.pepe', 20, { rotation: 0 })
        .eventCallback('onUpdate', () => {
          TweenLite.to(grassTimeline, 2, {
            progress: grassTweener.progress(),
            ease: Power3.easeOut,
          })
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

      new ScrollMagic.Scene({
        triggerElement: '#Ghibli',
        offset: -this.viewport.h / 2,
        duration: this.viewport.h * 4,
      })
        .setTween(grassTweener)
        .addTo(this.scroller)

      // Ghibli Clouds parallax
      let gCloudsTimeline = new TimelineMax({ paused: true }),
        gCloudsTweener = new TimelineMax()

      gCloudsTweener
        .to('.pepe', 20, { rotation: 0 })
        .eventCallback('onUpdate', () => {
          TweenLite.to(gCloudsTimeline, 6, {
            progress: gCloudsTweener.progress(),
            ease: Power3.easeOut,
          })
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
            // xPercent: 50,
            scale: 1.5,
            ease: Power1.easeIn,
          },
          'start'
        )

      new ScrollMagic.Scene({
        triggerElement: '#Ghibli',
        offset: -this.viewport.h / 2,
        duration: this.viewport.h * 4,
      })
        .setTween(gCloudsTweener)
        .addTo(this.scroller)

      // Howl's Moving Castle parallax
      let castleTimeline = new TimelineMax({ paused: true }),
        castleTweener = new TimelineMax(),
        castleLength = '-120vw'

      if (this.viewport.is568)
        castleLength =
          '-' +
          (window.innerWidth +
            document.querySelector('.castle-container').offsetWidth +
            16) +
          'px'

      castleTweener
        .to('.pepe', 20, { rotation: 0 })
        .eventCallback('onUpdate', () => {
          TweenLite.to(castleTimeline, 3, {
            progress: castleTweener.progress(),
            ease: Power3.easeOut,
          })
        })

      castleTimeline.to('.castle-container', 10, {
        x: castleLength,
        y: '-70vh',
        scale: 0.5,
      })

      new ScrollMagic.Scene({
        triggerElement: '#Ghibli',
        duration: this.viewport.h * 5,
      })
        .setTween(castleTweener)
        .addTo(this.scroller)

      // Ghibli 1
      this.timeLines[11]
        .addLabel('start', 0)
        .to('#Mario .container', 4, { autoAlpha: 0 }, 'start')
        .to('#Ghibli .container', 4, { autoAlpha: 1 }, 'start')

      // Ghibli 2 (gap)
      this.timeLines[12].addLabel('start', 0)

      // Ghibli 3 (gap)
      this.timeLines[13].addLabel('start', 0)

      // Ghibli 4 (gap)
      this.timeLines[14].addLabel('start', 0)
    },
    sceneWrapper() {
      this.timeLines[15]
        .addLabel('start', 0)
        .to('#Ghibli .container', 2, { autoAlpha: 0 }, 'start')
        .from('#wrapperTitle .static-container', 2, { autoAlpha: 1 })
    },
  },
}
</script>
