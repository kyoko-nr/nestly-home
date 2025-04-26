import { createApp } from "vue";
import App from "./App.vue";
import "./assets/styles/main.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

createApp(App).mount("#app");
