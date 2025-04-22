<script setup lang="ts">
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
</script>

<template>
  <div
    class="h-full w-full rounded-2xl"
    :class="bgColor[color]"
  >
    <slot></slot>
  </div>
</template>
