<template>
  <div>
    <h1 class="title">
      <slot></slot
      ><template v-if="params"
        >(<span class="params">{{ params }}</span
        >)</template
      >
    </h1>
    <TextBlock v-if="subtitle">
      <p class="-gray">{{ subtitle }}</p>
    </TextBlock>
  </div>
</template>

<script>
import TextBlock from '../TextBlock.vue'
export default {
  name: 'TitleFunction',
  props: {
    params: String,
    subtitle: String,
  },
  components: { TextBlock },
}
</script>
