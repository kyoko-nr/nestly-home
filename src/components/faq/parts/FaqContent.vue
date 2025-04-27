<script setup lang="ts">
import gsap from "gsap";
import { onMounted } from "vue";
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

onMounted(() => {
  const accordions = document.querySelectorAll(".js-faq-accordion-item");
  gsap.fromTo(
    accordions,
    {
      y: 20,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".js-faq-accordion",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    },
  );
});
</script>

<template>
  <div class="js-faq-accordion">
    <div
      v-for="(faq, index) in productFAQs"
      :key="index"
      class="js-faq-accordion-item border-b"
    >
      <FaqAccordion
        :question="faq.question"
        :answer="faq.answer"
      />
    </div>
  </div>
</template>
