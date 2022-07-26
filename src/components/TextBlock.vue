<template>
  <div class="std"><slot></slot></div>
</template>

<script>
export default { name: 'TextBlock' }
</script>

<style lang="scss">
.std {
  max-width: 42rem;
  font-size: 1rem;
  line-height: 1.5;
  color: var(--std-color);
  word-break: break-word;
  hyphens: none;
  font-size: 1.2rem;

  h3 {
    margin-bottom: 1rem;
  }

  .bt {
    background: var(--purple);
    color: var(--bg);
    padding: 0 1rem;
    height: 2rem;
    border-radius: 3rem;
    line-height: 2rem;
    text-decoration: none;
    display: inline-block;

    &:hover {
      background: var(--light);

      .nav-ico {
        stroke: var(--gray);
      }
    }
  }

  p {
    margin-bottom: 1rem;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .-big {
    display: block;
    font-size: 4rem;
    font-weight: 700;
    word-spacing: -0.1em;
    letter-spacing: -0.05em;
    width: 70vw;
    line-height: 1.2;
  }
  .-purple {
    color: var(--purple);
  }
  .-gray {
    color: var(--gray);
  }
  .-comment {
    color: var(--comment);
  }
  .-red {
    color: #f0514e;
  }
  .-green {
    color: #3cb878;
  }
  .-full {
    display: block;
    margin-right: -25vw;
    padding-right: 1rem;
  }
  i {
    font-style: italic;
  }
  b,
  strong {
    font-weight: 700;
  }
  a {
    color: var(--light);
    text-decoration: underline;
    transition: all 400ms ease-out;
    &:hover {
      color: var(--purple);
    }
  }

  .subtitle {
    color: var(--purple);
    font-size: 4rem;
    line-height: 1;
    margin: 4rem -25vw 2rem 0;
    padding-right: 1rem;
    word-spacing: -1rem;
    word-break: break-word;
    hyphens: auto;

    s {
      opacity: 0.4;
      font-weight: 400;
    }
  }

  ul {
    margin-bottom: 1rem;
    &:last-child {
      margin-bottom: 0;
    }
  }
  li {
    list-style-position: outside;
    margin: 0 0 0.5rem 1rem;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
