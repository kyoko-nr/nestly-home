<script setup lang="ts">
import imageIcon from "@/assets/images/icon_nestly.svg";
import { onMounted, useTemplateRef } from "vue";
import gsap from "gsap";
import DesktopMenu from "./parts/DesktopMenu.vue";
import MobileMenu from "./parts/MobileMenu.vue";
import { lenis } from "../../lenis/setup";

const header = useTemplateRef("header");

const onClick = (e: Event) => {
  e.preventDefault();
  lenis.scrollTo(0);
};

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
  }, 2400);
});
</script>

<template>
  <header
    ref="header"
    class="border-dark-gray bg-beige/50 fixed top-0 z-1 flex h-[64px] w-full items-center border-b px-[40px] opacity-0 backdrop-blur-sm max-md:justify-between"
  >
    <a
      class="flex h-full items-center gap-2"
      @click="onClick"
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
    <div class="flex h-full flex-1 justify-end gap-8 max-md:hidden">
      <DesktopMenu />
    </div>
    <div class="hidden max-md:block">
      <MobileMenu />
    </div>
  </header>
</template>
