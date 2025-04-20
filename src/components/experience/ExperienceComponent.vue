<script setup lang="ts">
import bedroomImage from "@/assets/images/bedroom.jpg";
import uiMorning from "@/assets/images/morning_mode.png";
import BackgroundImage from "./ExperienceBackground.vue";
import ExperienceDescription from "./ExperienceDescription.vue";
import ExperienceDevice from "./ExperienceDevice.vue";
</script>

<template>
  <section class="pt-[120px]">
    <div class="relative h-screen">
      <BackgroundImage :img-src="bedroomImage" />
      <div class="grid h-full grid-cols-2 px-[120px]">
        <ExperienceDescription title="6:30 AM – Wake Up Gently">
          <span>
            Nestly slowly opens the curtains and warms the room<br />before your
            alarm goes off.<br />Soft lights and your favorite playlist
            <br />greet you as you rise.
          </span>
        </ExperienceDescription>
        <ExperienceDevice :img-src="uiMorning" />
      </div>
    </div>
  </section>
</template>
