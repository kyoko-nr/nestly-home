<script setup lang="ts">
import { onMounted } from "vue";
import gsap from "gsap";

const { texts, wrapperClassName } = defineProps<{
  texts: string[];
  wrapperClassName: string;
}>();

onMounted(() => {
  const sentences = document.querySelectorAll(".js-sentence");
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
        start: "top 70%",
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
    class="overflow-hidden"
  >
    <span class="js-sentence inline-block">{{ text }}</span>
  </span>
</template>
