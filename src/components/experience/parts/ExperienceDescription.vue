<script setup lang="ts">
const { title } = defineProps<{ title: string }>();
</script>

<template>
  <div class="relative">
    <div class="absolute top-1/2 -translate-y-1/2 text-white">
      <h3 class="font-accent mb-10 text-center text-2xl tracking-wider">
        {{ title }}
      </h3>
      <p class="text-center text-lg leading-[2]">
        <slot></slot>
      </p>
    </div>
  </div>
</template>
