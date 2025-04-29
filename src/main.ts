import { createApp } from "vue";
import App from "./App.vue";
import "./assets/styles/main.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { setupLenis } from "./lenis/setup";

gsap.registerPlugin(ScrollTrigger);

setupLenis();

createApp(App).mount("#app");
