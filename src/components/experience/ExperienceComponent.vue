<script setup lang="ts">
import bedroomImage from "@/assets/images/bedroom.jpg";
import uiMorning from "@/assets/images/morning_mode.png";
import ExperienceDescription from "./ExperienceDescription.vue";
import ExperienceDevice from "./ExperienceDevice.vue";
import MorningDescription from "./descriptions/MorningDescription.vue";
import LeaveDescription from "./descriptions/LeaveDescription.vue";
import ExperienceFrame from "./ExperienceFrame.vue";
import AfternoonDescription from "./descriptions/AfternoonDescription.vue";

const experiences = [
  {
    color: "orangeBeige" as const,
    title: "6:30 AM – Wake Up Gently",
    bgImage: bedroomImage,
    content: MorningDescription,
    deviceImage: uiMorning,
  },
  {
    color: "yellowBeige" as const,
    title: "8:00 AM – Leave with Confidence",
    bgImage: bedroomImage,
    content: LeaveDescription,
    deviceImage: uiMorning,
  },
  {
    color: "mochaBeige" as const,
    title: "12:30 PM – Stay in the Loop",
    bgImage: bedroomImage,
    content: AfternoonDescription,
    deviceImage: uiMorning,
  },
  {
    color: "mochaBrown" as const,
    title: "6:00 PM – Welcome Home",
    bgImage: bedroomImage,
    content: AfternoonDescription,
    deviceImage: uiMorning,
  },
  {
    color: "yellowBrown" as const,
    title: "10:30 PM – Wind Down Effortlessly",
    bgImage: bedroomImage,
    content: AfternoonDescription,
    deviceImage: uiMorning,
  },
];
</script>

<template>
  <section class="pt-[120px]">
    <div
      v-for="ex in experiences"
      :key="ex.title"
      class="relative h-screen"
    >
      <ExperienceFrame :color="ex.color">
        <!-- <BackgroundImage :img-src="ex.bgImage" /> -->
        <div class="grid h-full grid-cols-2 px-[120px]">
          <ExperienceDescription :title="ex.title">
            <component :is="ex.content" />
          </ExperienceDescription>
          <ExperienceDevice :img-src="ex.deviceImage" />
        </div>
      </ExperienceFrame>
    </div>
  </section>
</template>
