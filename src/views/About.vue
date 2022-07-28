<template>
  <div id="about" class="wrapper">
    <div class="static-container">
      <h1 class="title">about(<span class="params">iuri</span>)</h1>

      <TextBlock>
        <div class="first-fold">
          <ul class="about-contact">
            <li>
              <a
                href="https://www.linkedin.com/in/iuridepaula/"
                target="_blank"
                title="LinkedIn"
              >
                <LinkedInIcon />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/iuridepaula"
                target="_blank"
                title="GitHub"
              >
                <GithubIcon />
              </a>
            </li>
            <li>
              Download my
              <a
                href="./iuri.depaula.cv.pdf"
                target="_blank"
                title="Download CV"
                class="bt"
              >
                CV
                <CVIcon />
              </a>
            </li>
          </ul>

          <p class="-purple">
            Frontend developer heavily influenced by storytelling, interactions,
            and UX. Addicted to music, visual arts, and games.<br />
            From Brazil, based in Barcelona.
          </p>
          <p class="-gray">
            // he/him<br />
            // Senior Frontend Engineer @ Activision Blizzard King
          </p>
        </div>

        <div class="about-grid">
          <h2>Main skills</h2>
          <div class="columns fluent">
            <ul>
              <li>
                Frontend,<br />
                UX/UI,<br />
                Web app architecture
              </li>
              <li>
                JavaScript, CSS, HTML,<br />
                React, Vue, Node,<br />
                Canvas, SVG, WebGL
              </li>
              <li>
                Photoshop,<br />
                Illustrator
              </li>
              <li>
                Strategic thinking,<br />
                Storytelling
              </li>
            </ul>
          </div>

          <h2>Experience</h2>
          <div class="columns experience">
            <ul>
              <li>
                <strong class="-purple">Senior Frontend Engineer</strong>
                <br />
                @ Activision Blizzard King<br />
                * current
              </li>
              <li>
                <strong class="-purple">Senior Frontend Engineer</strong>
                <br />
                @ ON<br />
                2020-2022
              </li>
              <li>
                <strong class="-purple">Senior Frontend Engineer</strong>
                <br />
                @ fromAtoB<br />
                2019-2020
              </li>
              <li>
                <strong class="-purple">Head of Frontend & UX</strong><br />
                @ Biz<br />
                2011 - 2019
              </li>
              <li>
                <strong class="-purple">Senior Frontend Developer</strong><br />
                @ Tray<br />
                2008 - 2010
              </li>
              <li>
                <strong class="-purple">Web Designer</strong><br />
                @ E2W<br />
                2006 - 2008
              </li>
              <li>
                <strong class="-purple">Freelancer</strong><br />
                Illustrations & Web development<br />
              </li>
            </ul>
          </div>

          <h2>Languages</h2>
          <div class="columns languages">
            <ul>
              <li>
                <span class="-comment">// fluent</span><br />
                <em class="-purple">en-US</em> English,<br />
                <em class="-purple">pt-BR</em> Português
              </li>
              <li>
                <span class="-comment">// intermediate</span><br />
                <em class="-purple">es-ES</em> Español<br />
              </li>
              <li>
                <span class="-comment">// basic</span><br />
                <em class="-purple">de-DE</em> Deutsch,<br />
                <em class="-purple">ca-ES</em> Català<br />
              </li>
            </ul>
          </div>

          <h2>Also busy with</h2>
          <div class="columns busy">
            <ul>
              <li>Pet my dog</li>
              <li>Spanish guitar</li>
              <li>Video games</li>
              <li>#eleNÃO</li>
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
import LinkedInIcon from '../components/LinkedInIcon.vue'
import GithubIcon from '../components/GithubIcon.vue'
import CVIcon from '../components/CVIcon.vue'

export default {
  name: 'AboutView',
  components: { TextBlock, LinkedInIcon, GithubIcon, CVIcon },
  data() {
    return {
      intro: new TimelineMax(),
      scroller: new ScrollMagic.Controller(),
    }
  },
  methods: {},
  mounted() {
    /**
     * @desc
     * Intro scene
     */
    this.intro
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
    /**
     * @desc
     * Setup Time lines and Scenes
     */
    let duration = window.innerHeight
    /**
     * @desc
     * header background scene
     */
    let tlHeader = new TimelineMax()
    tlHeader.to('.header-bg', 4, {
      autoAlpha: 1,
      ease: Power0.easeNone,
    })
    new ScrollMagic.Scene({
      triggerElement: '#about',
      offset: duration / 4,
      duration: duration,
    })
      .setTween(tlHeader)
      .addTo(this.scroller)
      .reverse(true)
  },
  beforeUnmount() {
    this.scroller.destroy()
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
  &:before {
    content: '';
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 40%;
    height: 100%;
    background-image: linear-gradient(
        to left,
        var(--bg),
        rgba(var(--bg-rgb), 0) 90%
      ),
      linear-gradient(to bottom, var(--bg), rgba(var(--bg-rgb), 0) 60%),
      url(../assets/iuri-de-paula.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    @media screen and (max-width: 1024px) {
      position: absolute;
      width: 100%;
      height: 60vh;
      background-image: linear-gradient(
          to left,
          var(--bg),
          rgba(var(--bg-rgb), 0) 80%
        ),
        linear-gradient(to top, var(--bg), rgba(var(--bg-rgb), 0) 60%),
        url(../assets/iuri-de-paula.jpg);
    }

    @media screen and (max-width: 568px) {
      height: 80vh;
      background-image: linear-gradient(
          to left,
          var(--bg),
          rgba(var(--bg-rgb), 0) 50%
        ),
        linear-gradient(to top, var(--bg), rgba(var(--bg-rgb), 0) 60%),
        url(../assets/iuri-de-paula.jpg);
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

  @media screen and (max-width: 568px) {
    .static-container {
      padding-top: 65vh;
    }
  }
}
</style>
