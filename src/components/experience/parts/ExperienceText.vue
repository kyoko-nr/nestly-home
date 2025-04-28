<script setup lang="ts">
import AnimationText from "../../parts/AnimationText.vue";
const { texts, className } = defineProps<{
  texts: string[];
  className: string;
}>();
</script>

<template>
  <p
    class="js-morning-ex-description grid grid-cols-1 gap-y-[10px] text-center text-lg leading-[1.5] max-md:text-base"
    :class="`${className}-description`"
  >
    <AnimationText
      :texts="texts"
      :wrapper-class-name="`${className}-description`"
      :text-class-name="`${className}-description-text`"
    />
  </p>
</template>
