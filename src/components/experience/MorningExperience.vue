<script setup lang="ts">
import ExperienceFrame from "./ExperienceFrame.vue";
import ExperienceDescription from "./ExperienceDescription.vue";
import Morning01 from "@/assets/images/experience/morning_01.jpg";
import Morning02 from "@/assets/images/experience/morning_02.jpg";
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
      <div
        class="absolute top-1/2 w-[80%] -translate-y-[calc(100%-10px)] overflow-hidden"
      >
        <img
          :src="Morning01"
          alt=""
          width="320"
          height="214"
          class="h-auto w-full scale-120"
        />
      </div>
      <div
        class="absolute top-1/2 right-0 w-[80%] -translate-y-[10px] overflow-hidden"
      >
        <img
          :src="Morning02"
          alt=""
          width="320"
          height="214"
          class="h-auto w-full scale-120"
        />
      </div>
    </div>
  </ExperienceFrame>
</template>
