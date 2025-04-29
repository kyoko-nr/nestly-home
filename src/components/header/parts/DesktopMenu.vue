<script setup lang="ts">
import { navItems } from "./navItems";
import { lenis } from "../../../lenis/setup";

const onClick = (e: Event, anchor: string) => {
  e.preventDefault();
  lenis.scrollTo(anchor);
};
</script>

<template>
  <ul class="flex items-center">
    <li
      v-for="item in navItems"
      :key="item.href"
      class="h-full"
    >
      <a
        :href="item.href"
        class="custom-link flex h-full items-center px-[8px] leading-normal"
        @click="(e: Event) => onClick(e, item.href)"
        ><span
          class="custom-text b relative px-[8px] py-[2px] text-base tracking-wider"
          >{{ item.label }}</span
        ></a
      >
    </li>
  </ul>
</template>

<style lang="css" scoped>
.custom-text::before {
  content: "";
  background-image: linear-gradient(var(--color-primary), var(--color-primary));
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-size: 0% 100%;
  transition: background-size 0.4s var(--ease-in-out-expo);
  background-position: bottom right;
  opacity: 0.8;
}

@media (any-hover: hover) {
  .custom-link:hover .custom-text::before {
    background-size: 100% 100%;
    background-position: bottom left;
  }
}
</style>
