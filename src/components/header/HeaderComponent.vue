<script setup lang="ts">
import imageIcon from "@/assets/images/icon_nestly.svg";
import { onMounted, useTemplateRef } from "vue";
import gsap from "gsap";

const navItems = [
  { label: "Vision", href: "#vision" },
  { label: "Features", href: "#features" },
  { label: "Experience", href: "#experience" },
  { label: "FAQs", href: "#faqs" },
  { label: "Get Started", href: "#get-started" },
];

const header = useTemplateRef("header");

onMounted(() => {
  setTimeout(() => {
    gsap.fromTo(
      header.value,
      {
        opacity: 0,
        y: -10,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "expo.out",
      },
    );
  }, 2200);
});
</script>

<template>
  <header
    ref="header"
    class="border-dark-gray bg-beige/50 fixed top-0 z-1 flex h-[64px] w-full items-center border-b px-[40px] opacity-0 backdrop-blur-sm"
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
      <h2 class="text-lg leading-tight font-bold tracking-[-0.015em]">
        NESTLY Home
      </h2>
    </a>
    <div class="flex h-full flex-1 justify-end gap-8">
      <ul class="flex items-center">
        <li
          v-for="item in navItems"
          :key="item.href"
          class="h-full"
        >
          <a
            :href="item.href"
            class="flex h-full items-center px-[20px] leading-normal"
            ><span class="text-base tracking-wider">{{ item.label }}</span></a
          >
        </li>
      </ul>
    </div>
  </header>
</template>
