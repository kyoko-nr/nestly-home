<script setup lang="ts">
import ExperienceFrame from "./ExperienceFrame.vue";
import ExperienceDescription from "./ExperienceDescription.vue";
import Home01 from "@/assets/images/experience/home_01.jpg";
import Home02 from "@/assets/images/experience/home_02.jpg";
</script>

<template>
  <ExperienceFrame color="mochaBeige">
    <ExperienceDescription title="6:00 PM – Welcome Home">
      <p>
        Nestly senses you’ve returned. The lights come on, your preferred
        temperature is set, and music plays softly as you enter.
      </p>
    </ExperienceDescription>
    <div class="relative">
      <div
        class="absolute top-1/2 w-[80%] -translate-y-[calc(100%-10px)] overflow-hidden"
      >
        <img
          :src="Home01"
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
          :src="Home02"
          alt=""
          width="320"
          height="214"
          class="h-auto w-full scale-120"
        />
      </div>
    </div>
  </ExperienceFrame>
</template>
