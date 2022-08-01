<template>
  <section class="scene-intro" id="intro">
    <div class="static-container">
      <h1 class="title">
        <span class="iuri">iuri</span>
        <span class="func">.is()</span>
      </h1>

      <TextBlock>
        <p class="-purple">Iuri de Paula</p>
        <p class="-gray">Creative frontend developer</p>
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
