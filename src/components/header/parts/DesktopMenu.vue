<script setup lang="ts">
import { navItems } from "./navItems";
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
        ><span
          class="custom-text b relative px-[8px] py-[2px] text-base tracking-wider"
          >{{ item.label }}</span
        ></a
      >
    </li>
  </ul>
</template>
