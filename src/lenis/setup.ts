import Lenis from "lenis";

/**
 * Global Lenis instance
 */
export const lenis = new Lenis();

/**
 * setup Lenis
 */
export const setupLenis = () => {
  const raf = (time: number) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);
};
