<script setup lang="ts">
import { onMounted } from "vue";
import gsap from "gsap";

const { texts, wrapperClassName, textClassName } = defineProps<{
  texts: string[];
  wrapperClassName: string;
  textClassName: string;
}>();

onMounted(() => {
  const sentences = document.querySelectorAll(`.${textClassName}`);
  gsap.fromTo(
    sentences,
    {
      y: "100%",
    },
    {
      y: 0,
      duration: 1.2,
      ease: "expo.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: `.${wrapperClassName}`,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    },
  );
});
</script>

<template>
  <span
    v-for="(text, index) in texts"
    :key="index"
    class="inline-block overflow-hidden"
  >
    <span
      class="inline-block"
      :class="textClassName"
      >{{ text }}</span
    >
  </span>
</template>
