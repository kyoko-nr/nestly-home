<script setup lang="ts">
import { onMounted, ref } from "vue";
import CalloutComponent from "./components/callout/CalloutComponent.vue";
import ExperienceComponent from "./components/experience/ExperienceComponent.vue";
import FaqComponent from "./components/faq/FaqComponent.vue";
import FeaturesComponent from "./components/features/FeaturesComponent.vue";
import HeaderComponent from "./components/header/HeaderComponent.vue";
import HeroComponent from "./components/hero/HeroComponent.vue";
import VisionComponent from "./components/vision/VisionComponent.vue";
import LoadingComponent from "./components/loading/LoadingComponent.vue";

const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 3000);
});
</script>

<template>
  <div class="relative">
    <div
      v-if="isLoading"
      class="absolute h-full w-full"
    >
      <LoadingComponent :is-loading="isLoading" />
    </div>
    <div
      class="dark group/design-root text-dark-gray relative flex size-full min-h-screen flex-col overflow-x-hidden"
      :class="{ 'overflow-hidden': isLoading, 'h-screen': isLoading }"
    >
      <div
        class="layout-container flex h-full grow flex-col"
        :class="{ 'overflow-hidden': isLoading }"
      >
        <HeaderComponent />
        <main>
          <HeroComponent />
          <VisionComponent />
          <FeaturesComponent />
          <ExperienceComponent />
          <FaqComponent />
          <CalloutComponent />
        </main>
      </div>
    </div>
  </div>
</template>
