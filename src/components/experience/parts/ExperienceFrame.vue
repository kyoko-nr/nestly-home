<script setup lang="ts">
import gsap from "gsap";
import { onMounted } from "vue";
type Colors =
  | "orangeBeige"
  | "yellowBeige"
  | "mochaBeige"
  | "mochaBrown"
  | "yellowBrown";

const { color } = defineProps<{ color: Colors }>();

const bgColor = {
  orangeBeige: "bg-orange-beige",
  yellowBeige: "bg-yellow-beige",
  mochaBeige: "bg-mocha-beige",
  mochaBrown: "bg-mocha-brown",
  yellowBrown: "bg-yellow-brown",
} as Record<Colors, string>;

onMounted(() => {});
</script>

<template>
  <div
    class="h-screen w-full rounded-t-2xl"
    :class="bgColor[color]"
  >
    <div class="relative grid h-full grid-cols-2 gap-8 px-[120px]">
      <slot></slot>
    </div>
  </div>
</template>
