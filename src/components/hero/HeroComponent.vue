<script setup lang="ts">
import heroImage from "@/assets/images/hero.jpg";
</script>

<template>
  <div class="relative h-screen">
    <div class="absolute h-full w-full">
      <img
        :src="heroImage"
        alt=""
        class="h-full w-full object-cover"
      />
    </div>
    <p
      class="text-shadow-dark-gray absolute top-1/2 left-[120px] -translate-y-1/2 text-left text-8xl text-white text-shadow-lg/30"
    >
      Start living<br />smarter today
    </p>
  </div>
</template>
