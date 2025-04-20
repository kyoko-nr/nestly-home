<script setup lang="ts">
import heroImage2 from "@/assets/images/hero_2.jpg";
</script>

<template>
  <div class="relative h-screen">
    <div class="absolute h-full w-full">
      <img
        :src="heroImage2"
        alt=""
        class="h-full w-full object-cover"
      />
    </div>
    <p
      class="text-shadow-dark-gray font-accent absolute top-1/2 -translate-y-1/2 px-[120px] text-left text-8xl text-white text-shadow-lg/30"
    >
      Start living<br />smarter today
    </p>
  </div>
</template>
