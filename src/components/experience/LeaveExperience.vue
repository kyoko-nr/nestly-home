<script setup lang="ts">
import ExperienceFrame from "./parts/ExperienceFrame.vue";
import ExperienceDescription from "./parts/ExperienceDescription.vue";
import Leave01 from "@/assets/images/experience/leave_01.jpg";
import AnimationImage from "./parts/AnimationImage.vue";
</script>

<template>
  <ExperienceFrame color="yellowBeige">
    <div class="relative">
      <div class="absolute top-1/2 w-[100%] -translate-y-1/2">
        <AnimationImage
          :src="Leave01"
          :width="500"
          :height="282"
        />
      </div>
    </div>
    <ExperienceDescription title="8:00 AM – Leave with Confidence">
      <p>
        As you leave, Nestly locks your doors, turns off unused lights, and arms
        your security system—automatically.
      </p>
    </ExperienceDescription>
  </ExperienceFrame>
</template>
