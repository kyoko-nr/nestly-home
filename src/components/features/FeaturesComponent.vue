<script setup lang="ts">
import gsap from "gsap";
import { onMounted } from "vue";
import {
  ClockIcon,
  ShieldCheckIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/vue/24/outline";
const features = [
  {
    icon: AdjustmentsHorizontalIcon,
    title: "Effortless Control",
    description: "Lights, climate, and more—just a tap away.",
  },
  {
    icon: ClockIcon,
    title: "Custom Routines",
    description: "Automate daily moments, your way.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Remote Security",
    description: "Stay connected and in control—anywhere.",
  },
  {
    icon: DevicePhoneMobileIcon,
    title: "Clean, Calm UI",
    description: "Designed to be simple, focused, and elegant.",
  },
];

onMounted(() => {
  gsap.fromTo(
    ".js-features-item",
    {
      y: 100,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "expo.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".js-features-section",
        start: "top 70%",
      },
    },
  );
});
</script>

<template>
  <section
    id="features"
    class="js-features-section grid grid-cols-2 gap-12 p-[120px]"
  >
    <div
      v-for="(feature, index) in features"
      :key="index"
      class="bg-dark-beige js-features-item flex flex-col items-center rounded-2xl px-6 py-12 opacity-0"
    >
      <component
        :is="feature.icon"
        class="mb-10 h-10 w-10"
      />
      <h3 class="font-accent mb-6 text-2xl">
        {{ feature.title }}
      </h3>
      <p class="text-lg">
        {{ feature.description }}
      </p>
    </div>
  </section>
</template>
