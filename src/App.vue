<script setup lang="ts">
import ExperienceComponent from "./components/experience/ExperienceComponent.vue";
import FaqComponent from "./components/faq/FaqComponent.vue";
import FeaturesComponent from "./components/features/FeaturesComponent.vue";
import HeaderComponent from "./components/header/HeaderComponent.vue";
import HeroComponent from "./components/hero/HeroComponent.vue";
import VisionComponent from "./components/vision/VisionComponent.vue";
</script>

<template>
  <div
    class="dark group/design-root text-dark-gray relative flex size-full min-h-screen flex-col overflow-x-hidden"
  >
    <div class="layout-container flex h-full grow flex-col">
      <HeaderComponent />
      <main>
        <HeroComponent />
        <VisionComponent />
        <FeaturesComponent />
        <ExperienceComponent />
        <FaqComponent />
      </main>
    </div>
  </div>
</template>

<style scoped></style>
