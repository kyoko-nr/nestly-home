<script setup lang="ts">
import ExperienceFrame from "./ExperienceFrame.vue";
import ExperienceDescription from "./ExperienceDescription.vue";
import Leave01 from "@/assets/images/experience/leave_01.jpg";
</script>

<template>
  <ExperienceFrame color="yellowBeige">
    <div class="relative">
      <div class="absolute top-1/2 w-[100%] -translate-y-1/2 overflow-hidden">
        <img
          :src="Leave01"
          alt=""
          width="500"
          height="282"
          class="h-auto w-full scale-120"
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
