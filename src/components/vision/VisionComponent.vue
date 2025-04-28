<script setup lang="ts">
import gsap from "gsap";
import { onMounted, useTemplateRef } from "vue";
import MockImage from "@/assets/images/morning_mode.png";
import AnimationText from "../parts/AnimationText.vue";
import AnimationTitle from "../parts/AnimationTitle.vue";

const image = useTemplateRef("image");

const texts = [
  "Nestly brings thoughtful technology into your life.",
  "It works quietly behind the scenes.",
  "Simplifying your routines.",
  "Bringing comfort to your space.",
  "Connecting you to your home like never before.",
];

onMounted(() => {
  gsap.fromTo(
    image.value,
    {
      y: 200,
    },
    {
      y: -100,
      scrollTrigger: {
        scrub: 1,
        trigger: image.value,
        start: "top 90%",
      },
    },
  );
});
</script>

<template>
  <section
    id="vision"
    class="relative grid grid-cols-[1fr_32%] p-[120px] max-lg:px-[24px] max-lg:py-[60px] max-md:grid-cols-1"
  >
    <div class="flex h-full flex-col items-center justify-center gap-[60px]">
      <h2
        class="js-vision-title font-accent relative inline-block text-center text-4xl max-md:text-2xl"
      >
        <AnimationTitle
          :titles="['Live simply, live smart.']"
          wrapper-class-name="js-vision-title"
          text-class-name="js-vision-title-text"
        />
      </h2>
      <p
        class="js-vision-description flex flex-col text-center text-xl leading-[2] max-md:text-base"
      >
        <AnimationText
          :texts="texts"
          wrapper-class-name="js-vision-description"
          text-class-name="js-vision-description-text"
        />
      </p>
    </div>

    <div class="max-md:flex max-md:justify-center">
      <div
        ref="image"
        class="max-md:w-[50%]"
      >
        <img
          height="1548"
          width="928"
          alt=""
          loading="lazy"
          :src="MockImage"
          class="h-full w-full object-cover"
        />
      </div>
    </div>
  </section>
</template>
