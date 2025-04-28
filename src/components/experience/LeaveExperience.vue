<script setup lang="ts">
import ExperienceFrame from "./parts/ExperienceFrame.vue";
import Leave01 from "@/assets/images/experience/leave_01.jpg";
import AnimationImage from "../parts/AnimationImage.vue";
import ExperienceTitle from "./parts/ExperienceTitle.vue";
import ExperienceText from "./parts/ExperienceText.vue";

const className = "js-leave-ex";
const texts = [
  "As you leave, Nestly locks your doors,",
  "turns off unused lights,",
  "and arms your security system—automatically.",
];
</script>

<template>
  <ExperienceFrame
    color="yellowBeige"
    prev-color="orangeBeige"
  >
    <div class="relative">
      <div class="absolute top-1/2 w-[100%] -translate-y-1/2">
        <AnimationImage
          :src="Leave01"
          :width="500"
          :height="282"
        />
      </div>
    </div>
    <div class="relative">
      <div class="absolute top-1/2 w-full -translate-y-1/2 text-white">
        <ExperienceTitle
          title="8:00 AM – Leave with Confidence"
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
