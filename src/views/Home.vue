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
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { DOM, removeBodyClass, addBodyClass } from '@/utils'
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

gsap.registerPlugin(ScrollTrigger)

// scenes are scrubbed with a slight delay to add momentum, except the Mario
// scene which needs to stay locked to the scroll position for precise timing
const SCRUB = 0.5
const SCRUB_OVERRIDES = { mario: true }

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
      isPlaying: {
        Biz: false,
        EarlyDays: false,
        Ghibli: false,
        Potion: false,
      },
    }
  },
  created() {
    // Keep GSAP/ScrollTrigger collections off Vue's reactive proxy
    this.scrollTriggers = []
    this.timelines = {}
    window.addEventListener('beforeunload', () => window.scroll(0, 0))
  },
  mounted() {
    // setup
    this.playIntroScene()
    this.setupScenes()
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
    // timelines are populated after their triggers are created, so let
    // ScrollTrigger recalculate start/end positions against the final durations
    ScrollTrigger.refresh()
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
    // scrollTrigger
    this.scrollTriggers.forEach((trigger) => trigger.kill())
    this.scrollTriggers = []
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

      const callbacks = this.sceneCallbacks()

      Object.entries(scenesElements).forEach(([scene, element]) => {
        this.timelines[scene] = gsap.timeline({ paused: true })
        if (!element) return

      this.scrollTriggers.push(
        ScrollTrigger.create({
          trigger: element,
          start: 'top bottom', // start half screen before the viewport centre
          end: () => `+=${element.offsetHeight}`, // lasts for the element height
          animation: this.timelines[scene],
          scrub: SCRUB_OVERRIDES[scene] ?? SCRUB,
          toggleClass: { targets: element, className: 'active' },
          ...callbacks[scene],
        })
      )
    })
    },
    playIntroScene() {
      const timeline = gsap.timeline()
      timeline
        .addLabel('enter', 1)
        .from(
          '#intro .title',
          {
            duration: 2,
            autoAlpha: 0,
            rotationX: 90,
            transformOrigin: '50% 50% -100px',
            ease: 'power3.out',
          },
          'enter'
        )
        .from(
          '#intro .std',
          {
            duration: 2,
            autoAlpha: 0,
            x: -32,
            ease: 'power3.out',
          },
          'enter+=1.5'
        )
    },
    // play & stop loop animations based on each scene.
    // ScrollMagic fired 'enter'/'leave' regardless of direction, so each is
    // mapped onto both of ScrollTrigger's directional callbacks.
    sceneCallbacks() {
      const onEnterBoth = (fn) => ({ onEnter: fn, onEnterBack: fn })
      const onLeaveBoth = (fn) => ({ onLeave: fn, onLeaveBack: fn })
      const setBlueBackground = {
        ...onEnterBoth(() => addBodyClass('blue-background')),
        ...onLeaveBoth(() => removeBodyClass('blue-background')),
      }

      return {
        myCV: onEnterBoth(() => {
          this.isPlaying.Biz = false
          // Hide fixed biz/earlyDays layers when back on the intro, otherwise
          // shapes from #biz1 .container linger over the first scene on reverse.
          gsap.set('#biz1 .container', { autoAlpha: 0 })
          gsap.set('#earlyTitle .title-container', { autoAlpha: 0 })
        }),
        bizTitle: onEnterBoth(() => {
          this.isPlaying.Biz = true
          gsap.set('#biz1 .container', { autoAlpha: 1 })
        }),
        biz1: onEnterBoth(() => {
          this.isPlaying.Biz = true
          gsap.set('#biz1 .container', { autoAlpha: 1 })
        }),
        biz2: onEnterBoth(() => (this.isPlaying.Biz = true)),
        biz3: onEnterBoth(() => (this.isPlaying.Biz = true)),
        earlyTitle: onEnterBoth(() => {
          this.isPlaying.Biz = true
          this.isPlaying.EarlyDays = true
          gsap.set('#biz1 .container', { autoAlpha: 1 })
        }),
        early1: {
          ...onEnterBoth(() => {
            this.isPlaying.Biz = false
            this.isPlaying.EarlyDays = true
            gsap.set('#biz1 .container', { autoAlpha: 0 })
          }),
          onLeaveBack: () => {
            gsap.set('#biz1 .container', { autoAlpha: 1 })
          },
        },
        early2: {
          onEnterBack: () => (this.isPlaying.EarlyDays = true),
        },
        early3: {
          ...onEnterBoth(() => {
            removeBodyClass('is-playing-mario', 'blue-background')
          }),
          onEnterBack: () => {
            removeBodyClass('is-playing-mario', 'blue-background')
            gsap.set('#earlyTitle .title-container', { autoAlpha: 1 })
          },
        },
        artPhiGamesTitle: {
          ...onEnterBoth(() => {
            removeBodyClass('is-playing-mario', 'blue-background')
            gsap.set('#biz1 .container', { autoAlpha: 0 })
          }),
          onLeaveBack: () => {
            gsap.set('#earlyTitle .title-container', { autoAlpha: 1 })
          },
        },
        mario: {
          onEnter: () => {
            this.isPlaying.EarlyDays = false
            gsap.set('#biz1 .container', { autoAlpha: 0 })
          },
          onEnterBack: () => addBodyClass('blue-background'),
          onLeave: () => removeBodyClass('blue-background'),
          onLeaveBack: () => {
            this.isPlaying.Ghibli = false
            removeBodyClass('blue-background')
            gsap.set('#earlyTitle .title-container', { autoAlpha: 1 })
          },
        },
        ghibli: {
          ...onEnterBoth(() => {
            this.isPlaying.Ghibli = true
            removeBodyClass('is-playing-mario')
            addBodyClass('blue-background')
          }),
          ...onLeaveBoth(() => removeBodyClass('blue-background')),
        },
        ghibli2: setBlueBackground,
        ghibli3: setBlueBackground,
        ghibli4: setBlueBackground,
        wrapper: onEnterBoth(() => {
          removeBodyClass('blue-background')
          this.isPlaying.Ghibli = true
          this.isPlaying.Potion = false
        }),
        thanks: onEnterBoth(() => {
          this.isPlaying.Ghibli = false
          this.isPlaying.Potion = true
        }),
      }
    },
    sceneMyCV() {
      this.timelines.myCV
        .set('#curriculum .title-container', { autoAlpha: 1 }) // show animations
        .addLabel('start', 0)
        .from(
          '#curriculum .title',
          {
            duration: 2,
            yPercent: -50,
            autoAlpha: 0,
            rotationX: 90,
            transformOrigin: '50% 50% -100px',
            ease: 'power3.out',
          },
          'start'
        )
        .from(
          '#curriculum .std',
          {
            duration: 2,
            yPercent: 50,
            autoAlpha: 0,
            rotationX: -90,
            transformOrigin: '50% 50% -100px',
            ease: 'power3.out',
          },
          'start'
        )
        .to('#curriculum .title, #curriculum .std', {
          duration: 2,
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
        // this scene: biz1 container visibility is owned by sceneCallbacks so a
        // scrubbed .set() here cannot leave shapes visible over the intro on reverse
        .set('#bizTitle .title-container', { autoAlpha: 1 })
        .addLabel('start', 0)
        .from(
          '#bizTitle .title',
          {
            duration: 6,
            yPercent: -50,
            autoAlpha: 0,
            rotationX: 90,
            transformOrigin: '50% 50% -100px',
            ease: 'power3.out',
          },
          'start'
        )
        .to('#bizTitle .title', {
          duration: 6,
          autoAlpha: 0,
          yPercent: -100,
        })
        .from(
          '#smart, #open',
          {
            duration: 6,
            autoAlpha: 0,
            scale: 0,
            ease: 'power3.out',
            stagger: 0.2,
          },
          'start+=2'
        )
        .from(
          '#abiz',
          {
            duration: 6,
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
          {
            duration: 4,
            xPercent: 70,
            ease: 'power3.out',
          },
          'start'
        )
        .to(
          '#abiz',
          {
            duration: 4,
            autoAlpha: 0,
            xPercent: -100,
            ease: 'power3.in',
          },
          'start'
        )
        .to(
          '#smart, #open',
          {
            duration: 4,
            autoAlpha: 0,
            scale: 0,
            ease: 'power3.out',
            stagger: 0.2,
          },
          'start'
        )
    },
    sceneBizEverybody() {
      this.timelines.biz2
        .addLabel('start', 0)
        .to(
          '#zen',
          {
            duration: 4,
            yPercent: 130,
            ease: 'power3.in',
          },
          'start'
        )
        .to(
          '#dino, #astro, #coffee, #et, #filomena, #octo',
          {
            duration: 5,
            autoAlpha: 1,
            scale: 1,
            xPercent: 0,
            yPercent: 0,
            ease: 'power3.out',
            stagger: 0.2,
          },
          'start'
        )
    },
    sceneBizEnding() {
      this.timelines.biz3
        .addLabel('start', 0)
        .to(
          '#dino',
          {
            duration: 6,
            yPercent: 200,
            scale: 1.5,
            ease: 'power3.in',
          },
          'start'
        )
        .to(
          '#et',
          {
            duration: 6,
            xPercent: -250,
            yPercent: -100,
            autoAlpha: 0,
            ease: 'power3.in',
          },
          'start'
        )
        .to(
          '#filomena',
          {
            duration: 6,
            xPercent: -300,
            yPercent: 300,
            autoAlpha: 0,
            ease: 'power3.in',
          },
          'start'
        )
        .to(
          '#octo',
          {
            duration: 6,
            xPercent: -650,
            yPercent: 400,
            autoAlpha: 0,
            ease: 'power3.in',
          },
          'start'
        )
        .to(
          '#astro',
          {
            duration: 12,
            bottom: '-10vh',
            right: '-10vw',
            scale: 4,
            ease: 'power3.inOut',
          },
          'start'
        )
        .to(
          '#coffee',
          {
            duration: 12,
            top: '8rem',
            left: 0,
            scale: 4,
            ease: 'power3.inOut',
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
          {
            yPercent: 50,
            xPercent: 20,
          },
          {
            duration: 10,
            yPercent: -85,
            xPercent: -20,
          },
          'action'
        )
        .fromTo(
          '.cloud-2',
          {
            yPercent: 40,
            xPercent: -10,
          },
          {
            duration: 10,
            yPercent: -40,
            xPercent: 85,
          },
          'action'
        )
        .fromTo(
          '.cloud-3',
          {
            yPercent: 70,
            xPercent: 40,
          },
          {
            duration: 10,
            yPercent: -85,
            xPercent: -40,
          },
          'action'
        )

      // EarlyDays()
      // Do not re-set #biz1 .container visible here: that fights early1's hide
      // when both timelines sit at progress 1 and re-render on reverse scroll.
      // Hide ocean once outside any scrubbed timeline: a scrubbed .set() on
      // earlyTitle kept re-applying autoAlpha:0 and fighting early1's fade-in.
      gsap.set('.pepe-scenery', { autoAlpha: 0 })
      this.timelines.earlyTitle
        .addLabel('start', 0)
        .to(
          '#astro',
          {
            duration: 4,
            yPercent: 600,
            xPercent: 200,
            ease: 'power2.in',
          },
          'start'
        )
        .to(
          '#coffee',
          {
            duration: 4,
            yPercent: -600,
            xPercent: -200,
            ease: 'power2.in',
          },
          'start'
        )
        .to(
          '#earlyTitle .title-container',
          { duration: 2, autoAlpha: 1 },
          'start'
        )
        .from(
          '#earlyTitle .title',
          {
            duration: 4,
            yPercent: -50,
            autoAlpha: 0,
            rotationX: 90,
            transformOrigin: '50% 50% -100px',
            ease: 'power3.out',
          },
          'start'
        )
        .from(
          '#earlyTitle .std',
          {
            duration: 4,
            yPercent: 50,
            autoAlpha: 0,
            rotationX: -90,
            transformOrigin: '50% 50% 100px',
            ease: 'power3.out',
          },
          'start'
        )
        .to('#earlyTitle .title, #earlyTitle .std', {
          duration: 4,
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
        {
          duration: 10,
          x: `-${pepeLength}px`,
          scale: 0.5,
        },
        'start'
      )

      this.timelines.early1
        // biz1 hide/show is owned by sceneCallbacks (onEnter / onLeaveBack);
        // a scrubbed .set(autoAlpha:0) here re-hides biz after reverse leave.
        .to('.pepe-scenery', { duration: 8, autoAlpha: 1 })
    },
    sceneFloatingHead() {
      this.timelines.early2.addLabel('start', 0)
    },
    sceneSunset() {
      this.timelines.early3
        .set('#Mario .container', { autoAlpha: 0 })
        // Fade ocean + clouds together so parallax leftovers don't stick at the top
        .to('.pepe-scenery, .earlyDays .clouds', { duration: 8, autoAlpha: 0 })
    },
    sceneArtPhiGames() {
      this.timelines.artPhiGamesTitle
        .set('#Mario .container', { autoAlpha: 0 })
        .addLabel('start', 1)
        .to('#ArtPhiGamesTitle .title-container', {
          duration: 1,
          autoAlpha: 1,
        })
        .from('#ArtPhiGamesTitle .title .line', {
          duration: 4,
          yPercent: -50,
          autoAlpha: 0,
          rotationX: 90,
          transformOrigin: '50% 50% -100px',
          ease: 'power3.out',
          stagger: 0.5,
        })
        .from(
          '#ArtPhiGamesTitle .std',
          {
            duration: 4,
            yPercent: 50,
            autoAlpha: 0,
            rotationX: -90,
            transformOrigin: '50% 50% 100px',
            ease: 'power3.out',
          },
          '-=1'
        )
        .to('#ArtPhiGamesTitle .title, #ArtPhiGamesTitle .std', {
          duration: 3,
          yPercent: -100,
          autoAlpha: 0,
        })
      // Do not .set('#earlyTitle .title-container') here: on reverse that set
      // undoes to autoAlpha 0 and leaves pepe/clouds invisible while earlyTitle
      // is still at progress 1 (so it never re-applies its own show tween).
    },
    sceneMario() {
      // locked to the scroll position (see SCRUB_OVERRIDES) for precise timing
      this.timelines.mario
        .fromTo(
          '#earlyTitle .title-container',
          { autoAlpha: 1 },
          { duration: 0.5, autoAlpha: 0 }
        ) // hide earlyDays layer for Mario; fromTo keeps reverse restore explicit
        .to('#Mario .container', {
          duration: 1,
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
          {
            duration: 20,
            yPercent: 10,
            xPercent: -100,
            ease: 'power1.in',
          },
          'start'
        )
        .to(
          '#Ghibli .grass2',
          {
            duration: 20,
            yPercent: 10,
            xPercent: 100,
            ease: 'power1.in',
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
          {
            duration: 20,
            yPercent: 10,
            xPercent: -50,
            scale: 1.5,
            ease: 'power1.in',
          },
          'start'
        )
        .to(
          '#Ghibli .sky .c2',
          {
            duration: 20,
            yPercent: 0,
            scale: 1.5,
            ease: 'power1.in',
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

      castleTimeline.to('.castle-container', {
        duration: 10,
        x: castleLength,
        y: '-70vh',
        scale: 0.5,
      })

      this.timelines.ghibli
        .addLabel('start', 0)
        .to('#Mario .container', { duration: 4, autoAlpha: 0 }, 'start')
        .to('#Ghibli .container', { duration: 4, autoAlpha: 1 }, 'start')

      this.timelines.ghibli2.addLabel('start', 0)
      this.timelines.ghibli3.addLabel('start', 0)
      this.timelines.ghibli4.addLabel('start', 0)
    },
    sceneWrapper() {
      this.timelines.wrapper
        .addLabel('start', 0)
        .to('#Ghibli .container', { duration: 2, autoAlpha: 0 }, 'start')
        .from('#wrapperTitle .static-container', {
          duration: 2,
          autoAlpha: 1,
        })
    },
    createParallax(options) {
      const { duration, triggerElement } = {
        duration: this.$viewport.height * 3.5,
        triggerElement: '',
        ...options,
      }

      const timeline = gsap.timeline({ paused: true })

      // Old system smoothed progress with a short TweenLite catch-up (~0.5–1s feel),
      // not a multi-second linear scrub. High scrub values left pepe/clouds/castle
      // mid-flight when reversing. Keep light momentum only.
      const scrub = 0.5

      this.scrollTriggers.push(
        ScrollTrigger.create({
          trigger: triggerElement,
          start: 'top bottom',
          end: () => `+=${duration}`,
          animation: timeline,
          scrub,
          fastScrollEnd: true,
        })
      )

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
