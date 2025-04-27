<script setup lang="ts">
import { onMounted, useTemplateRef } from "vue";
import gsap from "gsap";

type Colors =
  | "beige"
  | "orangeBeige"
  | "yellowBeige"
  | "mochaBeige"
  | "mochaBrown"
  | "yellowBrown";

const bgColor = {
  beige: "bg-beige before:bg-beige",
  orangeBeige: "bg-orange-beige before:bg-orange-beige",
  yellowBeige: "bg-yellow-beige before:bg-yellow-beige",
  mochaBeige: "bg-mocha-beige before:bg-mocha-beige",
  mochaBrown: "bg-mocha-brown before:bg-mocha-brown",
  yellowBrown: "bg-yellow-brown before:bg-yellow-brown",
} as Record<Colors, string>;

const {
  color,
  prevColor,
  pin = true,
} = defineProps<{ color: Colors; prevColor: Colors; pin?: boolean }>();

const content = useTemplateRef("content");
const frame = useTemplateRef("frame");

onMounted(() => {
  // scaling animation
  gsap.fromTo(
    frame.value,
    {
      scaleX: 0.9,
    },
    {
      scaleX: 1,
      scrollTrigger: {
        trigger: frame.value,
        start: "top bottom",
        end: "top 20%",
        toggleActions: "play none none reverse",
        scrub: true,
      },
    },
  );
  // pin animation
  gsap.to(content.value, {
    scrollTrigger: {
      trigger: content.value,
      start: "top top",
      end: "+=100%",
      toggleActions: "play none none reverse",
      scrub: true,
      pin: pin,
    },
  });
});
</script>

<template>
  <div class="h-screen w-full">
    <div
      ref="content"
      class="relative h-screen w-full"
      :class="bgColor[prevColor]"
    >
      <div class="h-full w-full">
        <div
          ref="frame"
          class="custom-bg h-full w-full rounded-t-2xl"
          :class="bgColor[color]"
        ></div>
        <div class="absolute top-0 left-0 h-full w-full">
          <div class="relative grid h-full grid-cols-2 gap-8 px-[120px]">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.custom-bg {
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    translate: 0 50%;
  }
}
</style>
