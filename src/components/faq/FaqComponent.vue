<script setup lang="ts">
import AnimationTitle from "../parts/AnimationTitle.vue";
import FaqContent from "./parts/FaqContent.vue";

const wrapperClassName = "js-faq-title";
const textClassName = "js-faq-title-text";
</script>

<template>
  <section
    id="faqs"
    class="bg-beige relative z-0 px-[120px] py-[240px] max-lg:px-[24px] max-lg:py-[60px] max-lg:py-[120px]"
  >
    <div class="mb-20 flex justify-center">
      <h2
        class="font-accent relativeinline-block text-center text-3xl tracking-wider max-md:text-xl"
        :class="wrapperClassName"
      >
        <AnimationTitle
          :titles="['Got questions? Nestly\'s got answers.']"
          :wrapper-class-name="wrapperClassName"
          :text-class-name="textClassName"
        />
      </h2>
    </div>

    <div class="flex flex-col">
      <FaqContent />
    </div>
  </section>
</template>
