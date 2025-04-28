<script setup lang="ts">
import ExperienceFrame from "./parts/ExperienceFrame.vue";
import Home01 from "@/assets/images/experience/home_01.jpg";
import Home02 from "@/assets/images/experience/home_02.jpg";
import AnimationImage from "../parts/AnimationImage.vue";
import ExperienceTitle from "./parts/ExperienceTitle.vue";
import ExperienceText from "./parts/ExperienceText.vue";

const className = "js-home-ex";
const texts = [
  "Nestly senses you’ve returned.",
  "The lights come on, your preferred temperature is set,",
  "and music plays softly as you enter.",
];
</script>

<template>
  <ExperienceFrame
    color="mochaBeige"
    prev-color="yellowBeige"
  >
    <div class="relative">
      <div class="absolute top-1/2 w-full -translate-y-1/2 text-white">
        <ExperienceTitle
          title="6:00 PM – Welcome Home"
          :class-name="className"
        />
        <ExperienceText
          :texts="texts"
          :class-name="className"
        />
      </div>
    </div>
    <div class="relative">
      <div
        class="absolute top-1/2 w-[80%] -translate-y-[calc(100%-10px)] max-md:top-0 max-md:left-0 max-md:w-[48%] max-md:-translate-y-[10%]"
      >
        <AnimationImage
          :src="Home01"
          :width="320"
          :height="214"
        />
      </div>
      <div
        class="absolute top-1/2 right-0 w-[80%] -translate-y-[10px] max-md:top-0 max-md:right-0 max-md:w-[48%] max-md:translate-y-[10%]"
      >
        <AnimationImage
          :src="Home02"
          :width="320"
          :height="214"
        />
      </div>
    </div>
  </ExperienceFrame>
</template>
