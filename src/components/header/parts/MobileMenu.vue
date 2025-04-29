<script setup lang="ts">
import { ref } from "vue";
import { navItems } from "./navItems";

const isOpen = ref(false);

const onClick = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div class="ovescroll-none z-1">
    <button
      class="custom-hamburger relative z-6 block cursor-pointer p-[20px]"
      :class="{ 'is-open': isOpen }"
      @click="onClick"
    >
      <span class="custom-hamburger-line"></span>
      <span class="custom-hamburger-line"></span>
      <span class="custom-hamburger-line"></span>
    </button>
    <Transition>
      <div
        v-if="isOpen"
        class="bg-beige/90 absolute top-0 left-0 z-5 flex h-screen w-full items-center justify-center"
      >
        <ul class="w-full">
          <li
            v-for="item in navItems"
            :key="item.href"
          >
            <a
              :href="item.href"
              class="custom-link relative flex h-full items-center px-[60px] py-[18px] leading-normal"
              ><span
                class="custom-link-text relative pl-[40px] text-xl tracking-wider"
                >{{ item.label }}</span
              ></a
            >
          </li>
        </ul>
      </div>
    </Transition>
  </div>
</template>

<style lang="css" scoped>
.custom-hamburger.is-open {
  > .custom-hamburger-line {
    &:nth-child(1) {
      translate: -50% 0;
      rotate: 45deg;
    }
    &:nth-child(2) {
      opacity: 0;
    }
    &:nth-child(3) {
      translate: -50% 0;
      rotate: -45deg;
    }
  }
}
.custom-hamburger-line {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 36px;
  height: 1px;
  background: var(--color-dark-gray);
  left: 50%;
  transition:
    opacity 0.3s ease-in-out,
    rotate 0.3s ease-in-out,
    translate 0.3s ease-in-out;

  &:nth-child(1) {
    top: 50%;
    rotate: 0deg;
    translate: -50% calc(-50% - 10px);
  }
  &:nth-child(2) {
    top: 50%;
    translate: -50% calc(-50%);
  }
  &:nth-child(3) {
    rotate: 0deg;
    top: 50%;
    translate: -50% calc(-50% + 10px);
  }
}
@media (any-hover: hover) {
  .custom-link:hover {
    > .custom-link-text {
      translate: 20px 0;
    }
  }
}
.custom-link-text {
  transition: translate 0.2s ease-in-out;
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 16px;
    height: 1px;
    background: var(--color-dark-gray);
    translate: 0 -50%;
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
