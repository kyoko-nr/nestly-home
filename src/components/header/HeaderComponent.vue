<script setup lang="ts">
import imageIcon from "@/assets/images/icon_nestly.svg";

const navItems = [
  { label: "Vision", href: "#vision" },
  { label: "Features", href: "#features" },
  { label: "Experience", href: "#experience" },
  { label: "Devices", href: "#devices" },
  { label: "About", href: "#about" },
  { label: "Get Started", href: "#get-started" },
];
</script>

<template>
  <header
    class="border-light-gray flex h-[64px] items-center border-b px-[40px]"
  >
    <a
      href="#"
      class="flex h-full items-center gap-2"
    >
      <img
        class="size-4"
        :src="imageIcon"
        alt=""
      />
      <h2
        class="text-lg leading-tight font-bold tracking-[-0.015em] text-white"
      >
        NESTLY
      </h2>
    </a>
    <div class="flex h-full flex-1 justify-end gap-8">
      <ul class="flex items-center gap-[16px]">
        <li
          v-for="item in navItems"
          :key="item.href"
          class="h-full"
        >
          <a
            :href="item.href"
            class="flex h-full items-center px-[12px] text-sm leading-normal font-medium text-white"
            ><span>{{ item.label }}</span></a
          >
        </li>
      </ul>
    </div>
  </header>
</template>
