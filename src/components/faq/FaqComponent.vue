<script setup lang="ts">
import FaqAccordion from "./FaqAccordion.vue";

const productFAQs = [
  {
    question: "Do I need special devices to use Nestly?",
    answer:
      "Nope. Nestly works with many popular smart home devices right out of the box. Just connect and go.",
  },
  {
    question: "Is it hard to set up?",
    answer:
      "Not at all. We designed Nestly so anyone can get started in minutes—no tech background required.",
  },
  {
    question: "Can I control my home when I’m not there?",
    answer:
      "Absolutely. Nestly lets you check in and control your devices from anywhere.",
  },
  {
    question: "What if I want to automate things?",
    answer:
      "Easy. Set up routines like “Morning Mode” or “Good Night” in just a few taps.",
  },
  {
    question: "What platforms does Nestly support?",
    answer: "iOS and Android. Your home in your pocket—no matter your device.",
  },
];
</script>

<template>
  <section
    id="faqs"
    class="z-index-1 bg-beige relative p-[120px]"
  >
    <h2 class="font-accent mb-20 text-center text-4xl tracking-wider">
      Got questions? Nestly’s got answers.
    </h2>
    <div class="flex flex-col">
      <div
        v-for="(faq, index) in productFAQs"
        :key="index"
        class="border-b"
      >
        <FaqAccordion
          :question="faq.question"
          :answer="faq.answer"
        />
      </div>
    </div>
  </section>
</template>
