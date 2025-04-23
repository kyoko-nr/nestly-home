<script setup lang="ts">
import ExperienceFrame from "./ExperienceFrame.vue";
import ExperienceDescription from "./ExperienceDescription.vue";
import Night01 from "@/assets/images/experience/night_01.jpg";
</script>

<template>
  <ExperienceFrame color="mochaBrown">
    <div class="relative">
      <div class="absolute top-1/2 w-[100%] -translate-y-1/2 overflow-hidden">
        <img
          :src="Night01"
          alt=""
          width="500"
          height="282"
          class="h-auto w-full scale-120"
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
