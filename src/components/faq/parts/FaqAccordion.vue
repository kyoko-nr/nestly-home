<script setup lang="ts">
const { question, answer } = defineProps<{
  question: string;
  answer: string;
}>();
</script>

<template>
  <details>
    <summary class="flex cursor-pointer items-center justify-between px-2 py-6">
      <h4 class="flex items-center gap-2 text-2xl">
        {{ question }}
      </h4>
      <span class="relative inline-block h-[20px] w-[20px]">
        <span
          class="bg-dark-gray absolute top-1/2 left-0 inline-block h-[1px] w-[20px] -translate-y-1/2"
        ></span>
        <span
          class="bg-dark-gray absolute top-1/2 left-0 inline-block h-[1px] w-[20px] -translate-y-1/2 rotate-90"
        ></span>
      </span>
    </summary>
    <div class="px-2 pb-6">
      <p class="text-lg">{{ answer }}</p>
    </div>
  </details>
</template>
