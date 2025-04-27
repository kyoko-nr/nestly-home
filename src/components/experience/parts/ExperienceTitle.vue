<script setup lang="ts">
import AnimationText from "../../parts/AnimationText.vue";
const { title, className } = defineProps<{
  title: string;
  className: string;
}>();
</script>

<template>
  <h3
    class="font-accent mb-10 text-center text-2xl tracking-wider"
    :class="`${className}-title`"
  >
    <AnimationText
      :texts="[title]"
      :wrapper-class-name="`${className}-title`"
      :text-class-name="`${className}-title-text`"
    />
  </h3>
</template>
