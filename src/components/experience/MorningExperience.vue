<script setup lang="ts">
import ExperienceFrame from "./parts/ExperienceFrame.vue";
import ExperienceDescription from "./parts/ExperienceDescription.vue";
import Morning01 from "@/assets/images/experience/morning_01.jpg";
import Morning02 from "@/assets/images/experience/morning_02.jpg";
import AnimationImage from "./parts/AnimationImage.vue";
</script>

<template>
  <ExperienceFrame color="orangeBeige">
    <ExperienceDescription title="6:30 AM – Wake Up Gently">
      <p>
        Nestly slowly opens the curtains and warms the room before your alarm
        goes off.<br />Soft lights and your favorite playlist greet you as you
        rise.
      </p>
    </ExperienceDescription>
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
