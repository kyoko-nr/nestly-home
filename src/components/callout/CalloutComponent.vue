<script setup lang="ts">
import CalloutImage from "@/assets/images/callout.jpg";
import AnimationTitle from "../parts/AnimationTitle.vue";
import AnimationImage from "../parts/AnimationImage.vue";

const title1 = ["Live better, beautifully."];
const title2 = ["Nestly brings comfort and control together."];

const className = "js-callout-title";
</script>

<template>
  <section
    id="get-started"
    class="relative flex h-screen w-full justify-center p-[120px]"
  >
    <div class="absolute top-0 left-0 -z-1 h-full w-full">
      <AnimationImage
        :src="CalloutImage"
        :width="1535"
        :height="863"
      />
    </div>
    <div class="flex flex-col items-center justify-center">
      <h3 class="font-accent mb-[24px] text-4xl tracking-wider">
        <AnimationTitle
          :titles="title1"
          :wrapper-class-name="`${className}-wrapper-1`"
          :text-class-name="`${className}-1`"
        />
      </h3>
      <h3 class="font-accent mb-[60px] text-4xl tracking-wider">
        <AnimationTitle
          :titles="title2"
          :wrapper-class-name="`${className}-wrapper-2`"
          :text-class-name="`${className}-2`"
        />
      </h3>
      <button
        class="border-dark-gray/80 transition-bg-color hover:bg-dark-beige/50 border bg-white/60 px-[48px] py-[16px] backdrop-blur-xs duration-300 ease-in-out"
      >
        <span class="text-xl tracking-wider">Get Started</span>
      </button>
    </div>
  </section>
</template>
