<script setup lang="ts">
import gsap from "gsap";
import { onMounted, useTemplateRef } from "vue";

const { titles, wrapperClassName, textClassName } = defineProps<{
  titles: string[];
  wrapperClassName: string;
  textClassName: string;
}>();

const titlebg = useTemplateRef("titlebg");

onMounted(() => {
  const sentences = document.querySelectorAll(`.${textClassName}`);
  gsap.fromTo(
    sentences,
    {
      y: "110%",
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
      onStart: () => {
        gsap.to(titlebg.value, {
          backgroundSize: "100% 100%",
          duration: 0.9,
          ease: "expo.inOut",
          delay: 0.2,
        });
      },
    },
  );
});
</script>

<template>
  <span
    v-for="(title, index) in titles"
    :key="index"
    class="relative inline-block h-full w-full overflow-hidden px-4 pt-1"
  >
    <span
      class="inline-block"
      :class="textClassName"
      >{{ title }}</span
    >
    <span
      ref="titlebg"
      class="custom-bg"
    ></span>
  </span>
</template>

<style lang="css" scoped>
.custom-bg {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(var(--color-primary), var(--color-primary));
  z-index: -1;
  opacity: 0.8;
  background-size: 0 100%;
  background-repeat: no-repeat;
}
</style>
