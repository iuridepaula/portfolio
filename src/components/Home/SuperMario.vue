<template>
  <Scene id="Mario" role="img" aria-labelledby="marioDesc">
    <p class="ariaLabel" id="marioDesc">
      Three boxes with a question mark, from the Super Mario Bros game, are
      standing in the center of the screen ... try to find the coin in one of
      them by using the numbers 1, 2, and 3 on your keyboard!
    </p>
    <template #container>
      <audio id="mario-start" class="bgm">
        <source src="@/assets/audio/smw_princess_help.ogg" type="audio/ogg" />
      </audio>
      <audio id="mario-stomp" class="bgm">
        <source src="@/assets/audio/smw_stomp.ogg" type="audio/ogg" />
      </audio>
      <audio id="mario-empty" class="bgm">
        <source src="@/assets/audio/smw_stomp_no_damage.ogg" type="audio/ogg" />
      </audio>
      <audio id="mario-appears" class="bgm">
        <source
          src="@/assets/audio/smw_power-up_appears.ogg"
          type="audio/ogg"
        />
      </audio>
      <audio id="mario-power-up" class="bgm">
        <source src="@/assets/audio/smw_power-up.ogg" type="audio/ogg" />
      </audio>
      <audio id="mario-exit" class="bgm">
        <source src="@/assets/audio/smw_keyhole_exit.ogg" type="audio/ogg" />
      </audio>

      <div class="mario-box b1">
        <div class="in"></div>
      </div>
      <div class="mario-box b2">
        <div class="in"></div>
      </div>
      <div class="mario-box b3">
        <div class="in"></div>
      </div>

      <div class="mario"></div>
    </template>
  </Scene>
</template>

<script>
import Scene from '../Scene.vue'
export default {
  name: 'SuperMarioScene',
  components: { Scene },
}
</script>
