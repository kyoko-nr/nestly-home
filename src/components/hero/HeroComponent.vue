<script setup lang="ts">
import gsap from "gsap";
import heroImage2 from "@/assets/images/hero_2.jpg";
import { useTemplateRef, onMounted } from "vue";

const image = useTemplateRef("image");
const title = useTemplateRef("title");
const scroll = useTemplateRef("scroll");

const setTrigger = () => {
  gsap.fromTo(
    scroll.value,
    {
      opacity: 1,
    },
    {
      opacity: 0,
      duration: 0.5,
      ease: "expo.iuOut",
      scrollTrigger: {
        trigger: scroll.value,
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    },
  );
};

onMounted(() => {
  setTimeout(() => {
    gsap.to(image.value, {
      scale: 1,
      duration: 1.8,
      ease: "expo.out",
    });
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
        delay: 0.7,
      },
    );
    gsap.to(scroll.value, {
      opacity: 1,
      duration: 1,
      ease: "expo.inOut",
      delay: 1,
      onComplete: setTrigger,
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
    <div
      ref="scroll"
      class="absolute bottom-0 left-1/2 -translate-y-[50px] -rotate-90 opacity-0"
    >
      <div class="custom-scroll relative">
        <span>scroll</span>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.custom-scroll {
  padding-left: 40px;
  overflow: hidden;
  &::before {
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: #ffffff;
    position: absolute;
    opacity: 0.4;
  }
  &::after {
    content: "";
    top: 0;
    left: 0;
    width: 50%;
    height: 1px;
    background: var(--color-dark-gray);
    position: absolute;
    translate: -100% 0;
    animation: scroll 1.8s var(--ease-in-out-expo) infinite;
    opacity: 1;
  }
}

@keyframes scroll {
  0% {
    translate: 200% 0;
  }
  100% {
    translate: -100% 0;
  }
}
</style>
