<script setup lang="ts">
import bedroomImage from "@/assets/images/bedroom.jpg";
import uiMorning from "@/assets/images/morning_mode.png";
import BackgroundImage from "./ExperienceBackground.vue";
import ExperienceDescription from "./ExperienceDescription.vue";
import ExperienceDevice from "./ExperienceDevice.vue";
import MorningDescription from "./descriptions/MorningDescription.vue";

const experiences = [
  {
    title: "6:30 AM – Wake Up Gently",
    bgImage: bedroomImage,
    content: MorningDescription,
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
      <BackgroundImage :img-src="ex.bgImage" />
      <div class="grid h-full grid-cols-2 px-[120px]">
        <ExperienceDescription :title="ex.title">
          <component :is="ex.content" />
        </ExperienceDescription>
        <ExperienceDevice :img-src="ex.deviceImage" />
      </div>
    </div>
  </section>
</template>
