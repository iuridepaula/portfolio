<template>
  <section class="scene-intro" id="intro">
    <div class="static-container">
      <h1 class="title">
        <span class="iuri">Iuri de Paula</span>
      </h1>

      <TextBlock>
        <p class="-purple">Frontend &amp; design engineer</p>
        <p class="-gray">// Made with 🤍 in 2018</p>
      </TextBlock>
    </div>
  </section>
</template>

<script>
import TextBlock from '../TextBlock.vue'

export default {
  name: 'IntroScene',
  components: { TextBlock },
}
</script>
