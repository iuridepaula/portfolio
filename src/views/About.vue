<template>
  <div id="about" class="wrapper">
    <div class="pic"></div>
    <div class="static-container">
      <h1 class="title">about(<span class="params">iuri</span>)</h1>

      <TextBlock>
        <div class="first-fold">
          <ul class="about-contact">
            <li v-for="link in data.links" :key="link.url">
              <a :href="link.url" :title="link.title" target="_blank">
                {{ link.label || null }}
                <component v-if="link.icon" :is="link.icon" />
              </a>
            </li>
            <li v-if="data.cv">
              Download my
              <a
                :href="`./${data.cv.file}`"
                :title="data.cv.title"
                target="_blank"
                class="bt"
              >
                {{ data.cv.label }}
                <CVIcon />
              </a>
            </li>
          </ul>

          <p class="-purple">
            <span v-for="(line, i) in data.description" :key="i">
              {{ line }}<br />
            </span>
          </p>
          <p class="-gray" v-if="data.experiences">
            <span v-for="(line, i) in data.subtitles" :key="i">
              // {{ line }}<br />
            </span>
            // {{ data.experiences[0].position }} @
            {{ data.experiences[0].company }}
          </p>
        </div>

        <div class="about-grid">
          <h2>Main skills</h2>
          <div class="columns fluent">
            <ul>
              <li v-for="(skills, i) in data.skills" :key="i">
                {{ skills.join(', ') }}<br />
              </li>
            </ul>
          </div>

          <h2>Experience</h2>
          <div class="columns experience">
            <ul>
              <li v-for="(experience, i) in data.experiences" :key="i">
                <strong class="-purple">{{ experience.position }}</strong>
                <br />
                @ {{ experience.company }}<br />
                {{ experience.time || null }}
              </li>
            </ul>
          </div>

          <h2>Languages</h2>
          <div class="columns languages">
            <ul>
              <li v-for="(langs, level) in data.languages" :key="level">
                <span class="-comment">// {{ level }}</span
                ><br />
                <span v-for="[locale, label] in langs" :key="locale"
                  ><em class="-purple">{{ locale }}</em> {{ label }}<br
                /></span>
              </li>
            </ul>
          </div>

          <h2>Also busy with</h2>
          <div class="columns busy">
            <ul>
              <li v-for="busy in data.busy" :key="busy">{{ busy }}</li>
            </ul>
          </div>
        </div>
      </TextBlock>
    </div>
  </div>
</template>

<script>
import { TimelineMax, Power3, Power0 } from 'gsap'
import * as ScrollMagic from 'scrollmagic'
import TextBlock from '../components/TextBlock.vue'
import LinkedInIcon from '../components/Icon/LinkedInIcon.vue'
import GithubIcon from '../components/Icon/GithubIcon.vue'
import CVIcon from '../components/Icon/CVIcon.vue'
import { fetchData } from '@/utils'

export default {
  name: 'AboutView',
  components: { TextBlock, LinkedInIcon, GithubIcon, CVIcon },
  data() {
    return {
      introTimeline: new TimelineMax(),
      headerTimeline: new TimelineMax(),
      scrollMagicController: new ScrollMagic.Controller(),
      data: {},
    }
  },
  async mounted() {
    this.data = await fetchData()
    this.playIntro()
    this.playHeaderBg()
  },
  beforeUnmount() {
    this.scrollMagicController.destroy()
    this.scrollMagicController = null
    this.introTimeline.kill()
    this.introTimeline = null
    this.headerTimeline.kill()
    this.headerTimeline = null
  },
  methods: {
    playIntro() {
      this.introTimeline
        .addLabel('enter', 1)
        .from(
          '.title',
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
          '.std',
          2,
          {
            autoAlpha: 0,
            x: -32,
            ease: Power3.easeOut,
          },
          'enter+=1.5'
        )
    },
    playHeaderBg() {
      const duration = window.innerHeight

      this.headerTimeline.to('.header-bg', 4, {
        autoAlpha: 1,
        ease: Power0.easeNone,
      })

      new ScrollMagic.Scene({
        triggerElement: '#about',
        offset: duration / 4,
        duration: duration,
      })
        .setTween(this.headerTimeline)
        .addTo(this.scrollMagicController)
        .reverse(true)
    },
  },
}
</script>

<style lang="scss">
.page-about {
  .header-bg {
    opacity: 0;
    visibility: hidden;
  }
}

#about {
  .pic {
    pointer-events: none;
    display: block;
    position: fixed;
    z-index: 9999;
    top: 50%;
    left: -12vw;
    transform: translate3d(0, -50%, 0);
    width: 43vw;
    aspect-ratio: 1/1;
    border-radius: 100%;
    background-image: url(../assets/me.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    filter: grayscale(1) brightness(1);
    mix-blend-mode: difference;

    @media screen and (max-width: 1024px) {
      top: -12vh;
      left: 50%;
      transform: translate3d(-50%, 0, 0) rotate(90deg);
      width: 70vw;
    }
  }

  .static-container {
    padding-top: 30vh;

    @media screen and (max-width: 1024px) {
      padding-top: 50vw;
    }
  }

  .about-contact {
    display: flex;
    align-items: center;
    list-style: none;
    margin: 2rem 0;

    li {
      display: flex;
      align-items: center;
      flex: 0 0 auto;
      list-style: none;
      margin: 0 1rem 0 0;
      color: var(--gray);
    }

    a {
      flex: 0 0 auto;
      display: flex;
      align-items: center;
      text-decoration: none;

      &.bt {
        background: var(--purple);
        color: var(--bg);
        padding: 0 1rem;
        height: 2rem;
        border-radius: 3rem;
        margin-left: 1rem;
        line-height: 2rem;

        .ico {
          margin-left: 0.5rem;
          height: 14px;
          width: 14px;
        }

        &:hover {
          background: var(--light);
        }
      }

      .ico {
        flex: 0 0 auto;
        overflow: visible;
        width: 1.5rem;
        height: 1.5rem;
        stroke: var(--bg);
        fill: var(--purple);
        stroke-width: 2px;
        transition: all 400ms ease-out;
      }

      &:hover {
        .ico {
          fill: var(--light);
        }
      }
    }

    @media screen and (max-width: 568px) {
      flex-flow: row wrap;

      li:last-child {
        flex: 0 0 100%;
        margin: 1rem 0 0;
      }
    }
  }

  .about-grid {
    padding: 3rem 2rem 0 0;
    margin-right: -25vw;
    width: 75vw;

    h2 {
      font-size: 1.2rem;
      margin-bottom: 1rem;
    }

    .columns {
      margin-bottom: 2rem;
    }

    ul {
      display: grid;
      grid-template: 1fr / repeat(4, 1fr);
      grid-gap: 2rem;
      grid-row-gap: 1rem;
    }

    li {
      list-style: none;
      margin: 0;
      font-size: 1rem;
      line-height: 1.5em;
      color: var(--gray);
    }

    .tools {
      display: grid;
      grid-template: 1fr / repeat(4, 1fr);
      grid-gap: 2rem;
      grid-row-gap: 1rem;

      ul {
        display: block;
      }
    }

    @media screen and (max-width: 1024px) {
      padding: 3rem 1rem 0 0;
      margin: 0;
      width: calc(100vw - 4rem);
    }

    @media screen and (max-width: 768px) {
      ul {
        grid-template: 1fr / repeat(3, 1fr);
      }

      .tools {
        grid-template: 1fr / repeat(3, 1fr);

        ul {
          display: block;
        }
      }
    }

    @media screen and (max-width: 568px) {
      ul {
        grid-template: 1fr / 1fr;
        grid-gap: 1rem;
      }

      .tools {
        grid-template: 1fr / 1fr;
        grid-gap: 1rem;

        ul {
          display: block;
        }
      }
    }
  }
}
</style>
