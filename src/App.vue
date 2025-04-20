<script setup lang="ts">
import HeaderComponent from "./components/header/HeaderComponent.vue";
import HeroComponent from "./components/hero/HeroComponent.vue";
import VisionComponent from "./components/vision/VisionComponent.vue";
</script>

<template>
  <div
    class="dark group/design-root bg-beige text-dark-gray relative flex size-full min-h-screen flex-col overflow-x-hidden"
  >
    <div class="layout-container flex h-full grow flex-col">
      <HeaderComponent />
      <main>
        <HeroComponent />
        <VisionComponent />
      </main>
    </div>
  </div>
</template>

<style scoped></style>
