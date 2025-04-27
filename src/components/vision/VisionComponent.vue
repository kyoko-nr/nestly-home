<script setup lang="ts">
import gsap from "gsap";
import { onMounted, useTemplateRef } from "vue";
import MockImage from "@/assets/images/morning_mode.png";
import AnimationText from "../parts/AnimationText.vue";

const title = useTemplateRef("title");
const titlebg = useTemplateRef("title-bg");
const image = useTemplateRef("image");
const description = useTemplateRef("description");

const texts = [
  "Nestly brings thoughtful technology into your life.",
  "It works quietly behind the scenes.",
  "Simplifying your routines.",
  "Bringing comfort to your space.",
  "Connecting you to your home like never before.",
];

onMounted(() => {
  const sentences = document.querySelectorAll(".js-description-sentence");
  gsap.fromTo(
    title.value,
    {
      opacity: 0,
      y: 20,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "expo.out",
      scrollTrigger: {
        trigger: title.value,
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
  gsap.fromTo(
    image.value,
    {
      y: 200,
    },
    {
      y: 0,
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
    class="relative grid grid-cols-[1fr_32%] p-[120px]"
  >
    <div class="flex h-full flex-col items-center justify-center gap-[60px]">
      <h2
        ref="title"
        class="custom-title font-accent relative inline-block px-[12px] py-[5px] text-center text-4xl"
      >
        Live simply, live smart.
        <span
          ref="title-bg"
          class="custome-title-bg"
        ></span>
      </h2>
      <p
        ref="description"
        class="js-vision-description flex flex-col text-center text-xl leading-[2]"
      >
        <AnimationText
          :texts="texts"
          wrapper-class-name="js-vision-description"
        />
      </p>
    </div>

    <div
      ref="image"
      class=""
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
  </section>
</template>

<style lang="css" scoped>
.custome-title-bg {
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
