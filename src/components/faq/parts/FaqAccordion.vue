<script setup lang="ts">
import { useTemplateRef } from "vue";
import gsap from "gsap";

const { question, answer } = defineProps<{
  question: string;
  answer: string;
}>();

const details = useTemplateRef("details");
const content = useTemplateRef("content");

const toggleAccordion = (event: Event) => {
  event.preventDefault();
  if (details.value?.open) {
    gsap.fromTo(
      content.value,
      {
        opacity: 1,
        height: `${content.value?.getBoundingClientRect().height}px`,
      },
      {
        opacity: 0,
        height: 0,
        duration: 0.5,
        ease: "expo.out",
        onComplete: () => {
          details.value?.removeAttribute("open");
        },
        overwrite: true,
      },
    );
  } else {
    details.value?.setAttribute("open", "true");
    gsap.fromTo(
      content.value,
      {
        opacity: 0,
        height: 0,
      },
      {
        opacity: 1,
        height: "auto",
        duration: 0.5,
        ease: "expo.out",
        overwrite: true,
      },
    );
  }
};
</script>

<template>
  <details
    ref="details"
    class="hover:bg-dark-beige/60 transition-bg-color duration-300 ease-in-out"
  >
    <summary
      class="flex cursor-pointer items-center justify-between px-2 py-6"
      @click="toggleAccordion"
    >
      <h4 class="flex items-center gap-2 text-2xl">
        {{ question }}
      </h4>
      <span class="relative inline-block h-[20px] w-[20px]">
        <span
          class="custom-line-v bg-dark-gray absolute top-1/2 left-0 inline-block h-[1px] w-[20px] -translate-y-1/2"
        ></span>
        <span
          class="custom-line-h bg-dark-gray absolute top-1/2 left-0 inline-block h-[1px] w-[20px] -translate-y-1/2 rotate-90"
        ></span>
      </span>
    </summary>
    <div
      ref="content"
      class="overflow-hidden"
    >
      <div class="px-2 pb-6">
        <p class="text-lg">{{ answer }}</p>
      </div>
    </div>
  </details>
</template>

<style lang="css" scoped>
details {
  .custom-line-v,
  .custom-line-h {
    transition:
      rotate 0.3s ease-in-out,
      opacity 0.2s ease-in-out;
  }
  &[open] {
    .custom-line-v {
      rotate: 180deg;
    }
    .custom-line-h {
      rotate: 180deg;
      opacity: 0;
    }
  }
}
</style>
