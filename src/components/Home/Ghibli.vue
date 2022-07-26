<template>
  <div>
    <Scene id="Ghibli">
      <TextBlock>
        <p>
          Before designing for web, I was creating
          <span class="-big -purple">
            3D models, matte painting and advertisements
          </span>
          for many brands, TV commercials, games...
        </p>
      </TextBlock>

      <template #container>
        <div class="sky">
          <div class="cloud c1"></div>
          <div class="cloud c2"></div>
        </div>

        <div class="castle-container" role="img" aria-labelledby="castleDesc">
          <p class="ariaLabel" id="castleDesc">
            The castle of Howl's movie Moving Castle, flying over a green lawn
            and a blue sky.
          </p>
          <div class="castle">
            <div class="top">
              <div class="top-tower"></div>
              <div class="top-clothes"></div>
              <div class="top-top"></div>
            </div>
            <div class="bucket"></div>
            <div class="mouth">
              <div class="back-lip"></div>
              <div class="front-lip"></div>
            </div>
            <div class="l-leg"></div>
            <div class="r-leg"></div>
            <div class="l-arm"></div>
            <div class="body"></div>
            <div class="fans">
              <div class="fan2"></div>
              <div class="fan1"></div>
              <div class="fix-tail"></div>
            </div>
            <div class="r-arm-holder">
              <div class="r-arm"></div>
              <div class="fix-shoulder"></div>
            </div>
            <div class="ear"></div>
            <div class="lower-foliage">
              <div class="foliage2"></div>
              <div class="foliage1"></div>
              <div class="fix-balcony"></div>
            </div>
            <div class="wing"></div>
            <div class="higher-foliage">
              <div class="foliage3"></div>
              <div class="foliage2"></div>
              <div class="foliage1"></div>
              <div class="fix-roof"></div>
            </div>
            <div class="flag"></div>
          </div>
        </div>

        <div class="grass1"></div>
        <div class="grass2"></div>
      </template>
    </Scene>
    <Scene />
    <Scene id="Ghibli3">
      <TextBlock>
        <p class="-big">
          And studying
          <span class="-purple"
            >Philosophy, Japanese animation, fine arts and video games.</span
          >
        </p>
        <p>
          All of these subjects have a major impact on how I start and develop
          my creative processes, leading the way on how I view web development
          today.
        </p>
      </TextBlock>
    </Scene>
    <Scene />
  </div>
</template>

<script>
import TextBlock from '../TextBlock.vue'
import Scene from '../Scene.vue'
export default {
  name: 'GhibliScene',
  components: { TextBlock, Scene },
}
</script>
