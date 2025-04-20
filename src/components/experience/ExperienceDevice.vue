<script setup lang="ts">
const { imgSrc } = defineProps<{ imgSrc: string }>();
</script>

<template>
  <div class="relative px-20">
    <div class="absolute top-1/2 -translate-y-1/2 pt-10">
      <img
        :src="imgSrc"
        alt=""
        height="640"
        width="380"
      />
    </div>
  </div>
</template>
