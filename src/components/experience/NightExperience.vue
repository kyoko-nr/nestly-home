<script setup lang="ts">
import ExperienceFrame from "./parts/ExperienceFrame.vue";
import Night01 from "@/assets/images/experience/night_01.jpg";
import AnimationImage from "../parts/AnimationImage.vue";
import ExperienceTitle from "./parts/ExperienceTitle.vue";
import ExperienceText from "./parts/ExperienceText.vue";

const className = "js-night-ex";
const texts = [
  "Activate “Good Night” mode:",
  "Lights dim, doors lock, blinds close,",
  "and your home prepares for sleep.",
];
</script>

<template>
  <ExperienceFrame
    color="mochaBrown"
    prev-color="mochaBeige"
    :pin="false"
  >
    <div class="relative">
      <div
        class="absolute top-1/2 w-full -translate-y-1/2 max-md:top-0 max-md:left-1/2 max-md:h-full max-md:w-[80%] max-md:translate-0 max-md:-translate-x-1/2"
      >
        <AnimationImage
          :src="Night01"
          :width="500"
          :height="282"
        />
      </div>
    </div>
    <div class="relative">
      <div class="absolute top-1/2 w-full -translate-y-1/2 text-white">
        <ExperienceTitle
          title="10:30 PM – Wind Down Effortlessly"
          :class-name="className"
        />
        <ExperienceText
          :texts="texts"
          :class-name="className"
        />
      </div>
    </div>
  </ExperienceFrame>
</template>
