<script setup lang="ts">
import CalloutImage from "@/assets/images/callout.jpg";
</script>

<template>
  <section
    id="get-started"
    class="relative flex h-screen w-full justify-end p-[120px]"
  >
    <div class="absolute top-0 left-0 -z-1 h-full w-full">
      <img
        :src="CalloutImage"
        alt=""
        class="h-full w-full object-cover"
        width="1535"
        height="863"
        loading="lazy"
      />
    </div>
    <div class="flex flex-col items-center justify-center">
      <p
        class="font-accent bg-dark-gray/40 mb-[24px] px-[8px] py-[4px] text-4xl tracking-wider text-white backdrop-blur-xs"
      >
        Live better, beautifully.
      </p>
      <p
        class="bg-dark-gray/40 mb-[60px] px-[4px] py-[2px] text-xl text-white backdrop-blur-xs"
      >
        Nestly brings comfort and control together.
      </p>
      <button
        class="border-dark-gray/80 bg-beige/60 hover:bg-beige/80 rounded-[8px] rounded-full border px-[48px] py-[16px] backdrop-blur-xs"
      >
        <span class="text-xl tracking-wider">Get Started</span>
      </button>
    </div>
  </section>
</template>
