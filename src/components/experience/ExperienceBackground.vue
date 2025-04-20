<script setup lang="ts">
const { imgSrc } = defineProps<{ imgSrc: string }>();
</script>

<template>
  <div class="absolute top-0 left-0 -z-1 h-full w-full opacity-90">
    <img
      :src="imgSrc"
      alt=""
      class="h-full w-full object-cover"
    />
  </div>
</template>
