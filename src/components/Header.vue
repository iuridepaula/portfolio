<template>
  <header id="header">
    <div class="header-bg"></div>

    <div class="header-container">
      <div class="header-breadcrumb">{{ $route.name }}</div>

      <button
        v-if="$viewport.isMobile"
        title="Open menu"
        type="button"
        class="header-nav-button"
        @click="openMenu"
      >
        <span class="label">Menu</span>

        <span class="dots d1"></span>
        <span class="dots d2"></span>
        <span class="dots d3"></span>
      </button>

      <nav class="header-nav">
        <button
          v-if="$viewport.isMobile"
          title="Close menu"
          type="button"
          class="header-nav-close-button"
          @click="closeMenu"
        >
          <span class="label">✕</span>
        </button>

        <ul>
          <li><router-link to="/" title="Home">.is()</router-link></li>
          <li>
            <router-link to="/about" title="About me">.about()</router-link>
          </li>
          <li>
            <a href="mailto:depaula.iuri@gmail.com" title="Send me an email"
              >.email()</a
            >
          </li>
          <li class="social-link">
            <a
              href="https://www.linkedin.com/in/iuridepaula/"
              target="_blank"
              title="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ico"
                viewBox="0 0 16 16"
                role="img"
                aria-labelledby="LinkedinIcoTitle"
              >
                <title id="LinkedinIcoTitle">LinkedIn logo</title>
                <path
                  d="M14.8 0H1.2C.5 0 0 .5 0 1.2v13.7c0 .6.5 1.1 1.2 1.1h13.6c.7 0 1.2-.5 1.2-1.2V1.2c0-.7-.5-1.2-1.2-1.2zM4.7 13.6H2.4V6h2.4v7.6zM3.6 5c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4V9.9c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8H6.2V6h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2z"
                />
              </svg>
            </a>
          </li>
          <li class="social-link">
            <a
              href="https://github.com/iuridepaula"
              target="_blank"
              title="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ico"
                viewBox="0 0 16 16"
                role="img"
                aria-labelledby="GithubIcoTitle"
              >
                <title id="GithubIcoTitle">GitHub logo</title>
                <path
                  fill-rule="evenodd"
                  d="M8 0C3.6 0 0 3.6 0 8c0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4v-1.4c-2.2.5-2.7-1.1-2.7-1.1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6 0 1.3-.1 2-.1s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.3.6.8.6 1.5v2.2c0 .2.1.5.6.4C13.7 14.5 16 11.5 16 8c0-4.4-3.6-8-8-8z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderSection',
  methods: {
    openMenu() {
      document.body.classList.add('is-nav-open')
    },
    closeMenu() {
      document.body.classList.remove('is-nav-open')
    },
  },
}
</script>

<style lang="scss">
#header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 8rem;
  padding: 0 1rem 5rem;
}
.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3rem;
  max-width: 80rem;
  margin: 0 auto;
}

.header-breadcrumb {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--purple);
}

.header-nav-button {
  flex: 0 0 auto;
  width: 3rem;
  height: 3rem;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem;
  margin-right: -1rem; // align with viewport
  background: none;
  border: 0;

  @media screen and (max-width: 768px) {
    transition: all 1s linear;
  }

  .label {
    display: none;
  }
  .dots {
    flex: 0 0 auto;
    position: relative;
    width: 0.25rem;
    height: 0.25rem;
    border-radius: 0.25rem;
    background: var(--header-link);
    transition: all 400ms cubic-bezier(0.19, 1, 0.22, 1);
  }
}

.header-nav-close-button {
  position: absolute;
  top: 0;
  right: 0;
  width: 3rem;
  height: 3rem;
  display: none;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  background: none;
  border: 0;
  color: var(--purple);
  font-size: 2rem;

  &:hover {
    color: var(--light);
  }

  @media screen and (max-width: 768px) {
    display: flex;
  }
}

.header-nav {
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    align-items: flex-end;
    justify-content: flex-end;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 9999;
    width: 100vw;
    height: 100vh;
    padding: 8rem 1rem 4rem;
    text-align: right;
    transform: translate3d(110%, 0, 0);
  }

  ul {
    display: flex;
    align-items: center;
    list-style: none;

    @media screen and (max-width: 768px) {
      display: block;
    }
  }

  li {
    flex: 0 0 auto;
    margin-left: 1rem;
    list-style: none;

    @media screen and (max-width: 768px) {
      margin: 0 0 2rem;
      list-style: none;

      &.social-link {
        display: inline-block;
        margin: 0 0 0 2rem;
      }
    }
  }

  a {
    height: 2rem;
    display: flex;
    align-items: center;
    color: #dbdbdb;
    transition: color 400ms ease-out;
    line-height: 1;

    &:hover {
      color: var(--header-link-hover);

      svg {
        fill: var(--header-link-hover-icon);
      }
    }

    &.router-link-exact-active {
      opacity: 0.5;
      cursor: default;
    }

    @media screen and (max-width: 768px) {
      height: auto;
      justify-content: flex-end;
      font-size: 3rem;
      font-weight: 700;

      &:hover {
        color: var(--header-link-hover);

        svg {
          fill: var(--header-link-hover-icon);
        }
      }

      &.router-link-exact-active {
        opacity: 0.5;
        cursor: default;
      }
    }

    @media screen and (max-width: 568px) {
      font-size: 2rem;
    }

    //icons
    svg {
      display: block;
      width: 1.2rem;
      height: 1.2rem;
      fill: var(--purple);
      position: relative;
      top: 2px;
      transition: fill 400ms ease-out;

      @media screen and (max-width: 768px) {
        width: 3rem;
        height: 3rem;
        top: 0;
      }

      @media screen and (max-width: 568px) {
        width: 2rem;
        height: 2rem;
        top: 0;
      }
    }
  }
}

// mobile menu
@media screen and (max-width: 768px) {
  body.is-nav-open {
    .wrapper {
      opacity: 0.1 !important;
    }
    .header-nav-button {
      opacity: 0;
    }
    .header-nav {
      transition: transform 1s cubic-bezier(0.86, 0, 0.07, 1);
      transform: translate3d(0, 0, 0);
    }
  }
}

// background
.header-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: linear-gradient(
    to bottom,
    var(--bg) 3rem,
    rgba(var(--bg-rgb), 0) 100%
  );
}
body.blue-background {
  .header-bg {
    background: linear-gradient(
      to bottom,
      #0497d1 3rem,
      rgba(4, 151, 209, 0) 100%
    );
  }
  .header-nav-button .dots {
    background: #000;
  }
  .header-nav a {
    color: #000;
  }
  .header-nav a svg,
  .header-breadcrumb,
  .header-nav-close-button {
    color: #411a91;
    fill: #411a91;
  }
}
</style>
