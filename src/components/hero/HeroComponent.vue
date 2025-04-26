<script setup lang="ts">
import gsap from "gsap";
import heroImage2 from "@/assets/images/hero_2.jpg";
import { useTemplateRef, onMounted } from "vue";

const image = useTemplateRef("image");
const title = useTemplateRef("title");

onMounted(() => {
  setTimeout(() => {
    gsap.fromTo(
      title.value,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "expo.out",
      },
    );
  }, 2400);
  setTimeout(() => {
    gsap.to(image.value, {
      scale: 1,
      duration: 1.8,
      ease: "expo.out",
    });
  }, 1500);
});
</script>

<template>
  <div class="relative h-screen">
    <div class="absolute h-full w-full">
      <img
        ref="image"
        :src="heroImage2"
        alt=""
        class="h-full w-full scale-130 object-cover"
      />
    </div>
    <p
      ref="title"
      class="text-shadow-dark-gray font-accent absolute top-1/2 -translate-y-1/2 px-[120px] text-left text-8xl text-white opacity-0 text-shadow-lg/30"
    >
      Start living<br />smarter today
    </p>
  </div>
</template>
