<template>
  <div>
    <div class="pepe bg-head">
      <div class="blink"></div>
      <div class="keyboard"></div>
      <div class="minas"></div>
      <div class="rio">
        <div class="particles"></div>
        <div class="vase">
          <div class="bg-rio_vase_foliage_3"></div>
          <div class="bg-rio_vase_foliage_2"></div>
          <div class="bg-rio_vase_foliage_1"></div>
          <div class="bg-rio_vase"></div>
        </div>
        <div class="bg-rio_pao_cristo"></div>

        <div class="waterfall"></div>

        <div class="bg-rio_palmtree_1"></div>
        <div class="bg-rio_palmtree_2"></div>
      </div>
      <div class="am-pa">
        <div class="bg-ampa_foliage_3"></div>
        <div class="bg-ampa_tree_2"></div>
        <div class="bg-ampa_foliage_2"></div>
        <div class="bg-ampa_parrot_wing"></div>
        <div class="bg-ampa_foliage_1"></div>
        <div class="bg-ampa_ver_o_peso"></div>
        <div class="bg-ampa_tree_1"></div>
        <div class="bg-ampa_oxes"></div>
      </div>
      <div class="metals">
        <div class="bg-metals_sax"></div>
        <div class="bg-metals_trumpet"></div>
        <div class="bg-metals_trombone">
          <div class="bg-metals_trombone_thing"></div>
        </div>
      </div>

      <div class="bonfim-church"></div>
      <div class="bonfim b1"></div>

      <div class="ear bg-head-ear"></div>
    </div>
  </div>
</template>

<script>
import { TimelineMax } from 'gsap'
import { random } from '@/utils'
import { character } from '../character.mixin'
import {
  LOOP,
  LOOP_EASE_IN_OUT,
  LOOP_EASE_OUT,
  LOOP_ELASTIC_OUT,
} from '../../../constants'

export default {
  name: 'PepeCharacter',
  mixins: [character],
  data() {
    return {
      particlesLoops: [],
    }
  },
  methods: {
    initParticles() {
      if (this.$viewport.isMobile) return

      const particlesCount = this.$viewport.isTablet ? 10 : 15
      const particles = document.querySelector('.pepe .particles')

      if (!particles) return

      for (let i = 0, particle; i < particlesCount; i++) {
        particle = document.createElement('div')
        particle.className = `particle p${i}`
        particles.appendChild(particle)

        this.particlesLoops[i] = new TimelineMax()
        this.particlesLoops[i]
          .delay(random(0, 7))
          .to(`.particle.p${i}`, random(3, 5), {
            y: random(100, 1000),
            x: random(100, 500),
            rotationY: 360 * random(5, 20),
            rotationZ: 360 * random(5, 20),
            autoAlpha: 0,
            repeat: -1,
          })
      }
    },
    init() {
      this.initParticles()

      // head
      const ampa_parrot = document.querySelector('.bg-ampa_parrot_wing')
      const metal_sax = document.querySelector('.bg-metals_sax')
      const metal_trumpet = document.querySelector('.bg-metals_trumpet')
      const metal_trombone = document.querySelector('.bg-metals_trombone')
      const metal_trombone_thing = document.querySelector(
        '.bg-metals_trombone_thing'
      )
      const pepe = document.querySelector('.pepe')
      const blink = document.querySelector('.pepe .blink')
      const ear = document.querySelector('.bg-head-ear')
      const rhythm = 0.3

      this.loop
        .addLabel('start', 0)
        // pepe
        .fromTo(
          blink,
          0.2,
          {
            autoAlpha: 1,
          },
          {
            autoAlpha: 0,
            repeat: -1,
            repeatDelay: random(1, 2.5),
          },
          'start'
        )

      if (!this.$viewport.isMobile) {
        this.loop
          // metals
          .to(
            metal_sax,
            rhythm,
            {
              transformOrigin: '25% 10%',
              yPercent: random(-10, 0),
              rotation: random(-5, 6),
              ...LOOP,
            },
            'start'
          )
          .to(
            metal_trumpet,
            rhythm * 2,
            {
              transformOrigin: '30% 100%',
              rotation: random(-20, 25),
              yPercent: 10,
              ...LOOP_EASE_OUT,
            },
            'start'
          )
          .to(
            metal_trombone,
            rhythm * 4,
            {
              transformOrigin: '0% 100%',
              rotation: random(-40, 45),
              yPercent: 10,
              ...LOOP_EASE_IN_OUT,
            },
            'start'
          )
          .to(
            metal_trombone_thing,
            rhythm / 2,
            {
              transformOrigin: '0% 0%',
              xPercent: random(-25, 15),
              ...LOOP,
            },
            'start'
          )
      }

      if (this.$viewport.isDesktop) {
        this.loop
          // parrot
          .to(
            ampa_parrot,
            1,
            {
              transformOrigin: '0% 0%',
              rotation: random(-5, 5),
              xPercent: random(-5, 0),
              yPercent: random(0, 5),
              ...LOOP_ELASTIC_OUT,
            },
            'start'
          )
          // pepe
          .to(
            ear,
            rhythm,
            {
              transformOrigin: '40% 50%',
              rotationY: random(5, 15),
              ...LOOP,
            },
            'start'
          )
          .to(
            pepe,
            3,
            {
              yPercent: random(-3, 3),
              ...LOOP_EASE_IN_OUT,
            },
            'start'
          )
      }
    },
    toggleGsapAnimations(isPlaying) {
      if (isPlaying) {
        this.$el.classList.remove('animationStop')
        this.loop.play()
        this.particlesLoops.forEach((loop) => loop.play())
      } else {
        this.$el.classList.add('animationStop')
        this.loop.stop()
        this.particlesLoops.forEach((loop) => loop.stop())
      }
    },
  },
}
</script>

<style lang="scss">
.animationStop {
  .pepe {
    .bonfim,
    .waterfall {
      animation: none;
    }
  }
}

.pepe {
  position: relative;
  z-index: 2;
  transform: scale(0.6);
  transform-origin: 0 0;

  &.bg-head {
    width: 1262px;
    height: 1651px;
    background: url('./assets/head.png') -1262px 0 no-repeat;
    background-size: 200% 100%;
  }
  div {
    position: absolute;
  }
  .blink {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('./assets/pepe-blink.png') 0 0 no-repeat;
    background-size: 100% 100%;
  }
  .bg-head-ear {
    top: 0;
    left: 0;
    z-index: 20;
    width: 100%;
    height: 100%;
    background: url('./assets/head.png') 0 0 no-repeat;
    background-size: 200% 100%;
  }
  /*am/pa*/
  .bg-ampa_foliage_3,
  .bg-ampa_tree_2,
  .bg-ampa_foliage_2,
  .bg-ampa_parrot_wing,
  .bg-ampa_foliage_1,
  .bg-ampa_ver_o_peso,
  .bg-ampa_tree_1,
  .bg-ampa_oxes {
    background: url('./assets/am-pa.png') no-repeat;
    background-size: 1007px 997px;
  }
  .bg-ampa_foliage_3 {
    top: 178px;
    left: 421px;
    width: 278px;
    height: 267px;
    background-position: -10px -720px;
  }
  .bg-ampa_tree_2 {
    top: 19px;
    left: 291px;
    width: 385px;
    height: 213px;
    background-position: -10px -487px;
  }
  .bg-ampa_foliage_2 {
    top: 3px;
    left: 548px;
    width: 581px;
    height: 457px;
    background-position: -10px -10px;
  }
  .bg-ampa_parrot_wing {
    top: 103px;
    left: 792px;
    width: 162px;
    height: 241px;
    background-position: -604px -720px;
  }
  .bg-ampa_foliage_1 {
    top: 125px;
    left: 593px;
    width: 276px;
    height: 254px;
    background-position: -308px -720px;
  }
  .bg-ampa_ver_o_peso {
    top: 221px;
    left: 650px;
    width: 311px;
    height: 206px;
    background-position: -415px -487px;
  }
  .bg-ampa_tree_1 {
    top: 29px;
    left: 465px;
    width: 386px;
    height: 236px;
    background-position: -611px -10px;
  }
  .bg-ampa_oxes {
    top: 145px;
    left: 485px;
    width: 176px;
    height: 164px;
    background-position: -611px -266px;
  }
  /*metals*/
  .metals {
    z-index: 19;
  }
  .bg-metals_sax,
  .bg-metals_trumpet,
  .bg-metals_trombone_thing,
  .bg-metals_trombone {
    background: url('./assets/metals.png') no-repeat;
    background-size: 516px 385px;
  }
  .bg-metals_sax {
    top: 662px;
    left: 647px;
    width: 219px;
    height: 386px;
    background-position: 0 0;
  }
  .bg-metals_trumpet {
    top: 584px;
    left: 527px;
    width: 297px;
    height: 124px;
    background-position: -219px 0;
  }
  .bg-metals_trombone_thing {
    top: 95px;
    left: 131px;
    width: 243px;
    height: 25px;
    background-position: -219px -248px;
  }
  .bg-metals_trombone {
    top: 583px;
    left: 670px;
    width: 270px;
    height: 124px;
    background-position: -219px -124px;
  }
  /*rio*/
  .vase {
    top: 893px;
    left: 731px;
    width: 260px;
    height: 249px;
  }
  .bg-rio_vase_foliage_1 {
    top: 172px;
    left: 125px;
    width: 193px;
    height: 157px;
    background: url('./assets/rio.png') 0 -464px no-repeat;
    background-size: 753px 621px;
  }
  .bg-rio_vase_foliage_2 {
    top: 120px;
    left: 42px;
    width: 207px;
    height: 195px;
    background: url('./assets/rio.png') -489px -163px no-repeat;
    background-size: 753px 621px;
  }
  .bg-rio_vase_foliage_3 {
    top: 155px;
    left: 26px;
    width: 179px;
    height: 75px;
    background: url('./assets/rio.png') -489px -358px no-repeat;
    background-size: 753px 621px;
  }
  .bg-rio_vase {
    top: 0;
    left: 0;
    width: 260px;
    height: 249px;
    background: url('./assets/rio.png') 0 -215px no-repeat;
    background-size: 753px 621px;
  }
  .bg-rio_pao_cristo {
    top: 856px;
    left: 740px;
    width: 311px;
    height: 215px;
    background: url('./assets/rio.png') 0 0 no-repeat;
    background-size: 753px 621px;
  }
  .bg-rio_palmtree_2 {
    top: 874px;
    left: 700px;
    width: 264px;
    height: 163px;
    background: url('./assets/rio.png') -489px 0 no-repeat;
    background-size: 753px 621px;
  }
  .bg-rio_palmtree_1 {
    top: 882px;
    left: 637px;
    width: 178px;
    height: 245px;
    background: url('./assets/rio.png') -311px 0 no-repeat;
    background-size: 753px 621px;
  }
  /*rio waterfall*/
  .waterfall {
    top: 992px;
    left: 686px;
    width: 264px;
    height: 436px;
    background: url('./assets/rio-waterfall.png') 0 0 no-repeat;
    background-size: 1056px 436px;
    animation: waterfall 0.25s steps(4) infinite;

    @keyframes waterfall {
      to {
        background-position: -1056px 0;
      }
    }
  }
  /*minas*/
  .minas {
    top: 698px;
    left: 824px;
    width: 134px;
    height: 159px;
    background: url('./assets/minas-church.png') 0 0;
    background-size: 134px 159px;
  }
  /*keyboard*/
  .keyboard {
    top: 508px;
    left: 917px;
    width: 176px;
    height: 332px;
    background: url('./assets/keyboard.png') 0 0 no-repeat;
    background-size: 176px 332px;
  }
  /*bonfim*/
  .bonfim {
    top: 438px;
    left: 999px;
    width: 242px;
    height: 209px;
    background: url('./assets/bonfim.png') no-repeat 0 0;
    background-size: 1210px 209px;
    opacity: 0.8;
    animation: bonfim 0.37s steps(5) infinite;

    @keyframes bonfim {
      to {
        background-position: -1210px 0;
      }
    }

    &.b2 {
      animation-duration: 0.54s;
      transform-origin: 0 center;
      transform: rotate(10deg);
    }
  }
  .bonfim-church {
    top: 386px;
    left: 1046px;
    width: 169px;
    height: 224px;
    background: url('./assets/salvador-church.png') no-repeat 0 0;
    background-size: 100% 100%;
  }
  /*particles*/
  .particles {
    top: 1100px;
    left: 831px;
    .particle {
      width: 1rem;
      height: 1rem;
      border-radius: 100%;
      background: #b90068;

      &:nth-child(4n + 1) {
        background: #b90068;
      }
      &:nth-child(4n + 2) {
        background: #0dbdca;
      }
      &:nth-child(4n + 3) {
        background: #3a8419;
      }
      &:nth-child(4n + 4) {
        background: #ffac1e;
      }
    }
  }
}
</style>
