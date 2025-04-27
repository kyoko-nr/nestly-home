<script setup lang="ts">
import gsap from "gsap";
import { onMounted } from "vue";

onMounted(() => {
  const texts = document.querySelectorAll(".js-hero-title-text");
  setTimeout(() => {
    gsap.fromTo(
      texts,
      {
        y: "110%",
      },
      {
        y: 0,
        duration: 1.8,
        ease: "expo.out",
        stagger: 0.1,
      },
    );
  }, 2200);
});
</script>

<template>
  <h1
    ref="title"
    class="text-shadow-dark-gray font-accent relative text-left text-8xl leading-[1.2] text-white text-shadow-lg/30"
  >
    <span class="block overflow-hidden"
      ><span class="js-hero-title-text inline-block translate-y-[110%]"
        >Start living</span
      ></span
    >
    <span class="block overflow-hidden"
      ><span class="js-hero-title-text inline-block translate-y-[110%]"
        >smarter today</span
      ></span
    >
  </h1>
</template>

<style lang="css" scoped></style>
