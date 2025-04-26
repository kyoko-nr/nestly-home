<script setup lang="ts">
import gsap from "gsap";
import { onMounted, useTemplateRef } from "vue";

const text = useTemplateRef("text");
const line = useTemplateRef("line");
const upper = useTemplateRef("upper");
const lower = useTemplateRef("lower");

onMounted(() => {
  gsap.to(text.value, {
    duration: 1.0,
    y: "-=40",
    ease: "expo.out",
  });
  gsap.to(text.value, { opacity: 1, duration: 0.8, ease: "expo.inOut" });
  gsap.to(line.value, {
    duration: 1.5,
    width: "100%",
    ease: "expo.inOut",
  });

  gsap.to(upper.value, {
    clipPath: "inset(0 0 100% 0)",
    duration: 1,
    delay: 1.5,
    ease: "expo.inOut",
  });
  gsap.to(lower.value, {
    clipPath: "inset(100% 0 0 0)",
    duration: 1,
    delay: 1.5,
    ease: "expo.inOut",
  });
});
</script>

<template>
  <div class="relative inset-0 z-50 h-screen w-full">
    <div
      ref="upper"
      class="absolute top-0 left-0 h-[50%] w-full"
    >
      <div
        class="bg-beige fixed flex h-full w-full flex-col items-center justify-center"
      >
        <div
          ref="text"
          class="absolute top-1/2 -translate-y-[calc(100%+10px)] text-xl font-bold opacity-0"
        >
          Welcom to NESTLY Home
        </div>
        <div
          ref="line"
          class="bg-dark-gray absolute top-1/2 left-0 h-[1px] w-0 -translate-y-[1px]"
        ></div>
      </div>
    </div>
    <div
      ref="lower"
      class="absolute top-1/2 left-0 h-[50%] w-full"
    >
      <div class="bg-beige h-full w-full"></div>
    </div>
  </div>
</template>
