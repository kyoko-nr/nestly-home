<script setup lang="ts">
import ExperienceFrame from "./parts/ExperienceFrame.vue";
import Morning01 from "@/assets/images/experience/morning_01.jpg";
import Morning02 from "@/assets/images/experience/morning_02.jpg";
import AnimationImage from "../parts/AnimationImage.vue";
import ExperienceTitle from "./parts/ExperienceTitle.vue";
import ExperienceText from "./parts/ExperienceText.vue";

const className = "js-morning-ex";
const morningText = [
  "Nestly slowly opens the curtains",
  "and warms the room before your alarm goes off.",
  "Soft lights and your favorite playlist greet you as you rise.",
];
</script>

<template>
  <ExperienceFrame
    color="orangeBeige"
    prev-color="beige"
  >
    <div class="relative">
      <div class="absolute top-1/2 w-full -translate-y-1/2 text-white">
        <ExperienceTitle
          title="6:30 AM – Wake Up Gently"
          :class-name="className"
        />
        <ExperienceText
          :texts="morningText"
          :class-name="className"
        />
      </div>
    </div>
    <div class="relative">
      <div class="absolute top-1/2 w-[80%] -translate-y-[calc(100%-10px)]">
        <AnimationImage
          :src="Morning01"
          :width="320"
          :height="214"
        />
      </div>
      <div class="absolute top-1/2 right-0 w-[80%] -translate-y-[10px]">
        <AnimationImage
          :src="Morning02"
          :width="320"
          :height="214"
        />
      </div>
    </div>
  </ExperienceFrame>
</template>
