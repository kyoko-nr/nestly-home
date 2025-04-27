<script setup lang="ts">
import ExperienceFrame from "./parts/ExperienceFrame.vue";
import ExperienceDescription from "./parts/ExperienceDescription.vue";
import Night01 from "@/assets/images/experience/night_01.jpg";
import AnimationImage from "./parts/AnimationImage.vue";
</script>

<template>
  <ExperienceFrame color="mochaBrown">
    <div class="relative">
      <div class="absolute top-1/2 w-[100%] -translate-y-1/2">
        <AnimationImage
          :src="Night01"
          :width="500"
          :height="282"
        />
      </div>
    </div>
    <ExperienceDescription title="10:30 PM – Wind Down Effortlessly">
      <p>
        Activate “Good Night” mode: Lights dim, doors lock, blinds close, and
        your home prepares for sleep.
      </p>
    </ExperienceDescription>
  </ExperienceFrame>
</template>
