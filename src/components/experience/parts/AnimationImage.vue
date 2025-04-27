<script setup lang="ts">
import { onMounted, useTemplateRef } from "vue";
import gsap from "gsap";

const { src, width, height } = defineProps<{
  src: string;
  width: number;
  height: number;
}>();

const image = useTemplateRef("image");

onMounted(() => {
  gsap.fromTo(
    image.value,
    {
      y: 30,
    },
    {
      y: -30,
      scrollTrigger: {
        scrub: 1,
        trigger: image.value,
      },
    },
  );
});
</script>

<template>
  <div class="overflow-hidden">
    <img
      ref="image"
      :src="src"
      alt=""
      :width="width"
      :height="height"
      class="h-auto w-full scale-115"
    />
  </div>
</template>
