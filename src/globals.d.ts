// globals.d.ts
declare module '@studio-freight/lenis';

interface Lenis {
    // eslint-disable-next-line @typescript-eslint/no-misused-new
    new (options: { 
      duration: number; 
      easing: (t: number) => number; 
      wrapper: HTMLElement; 
      content: HTMLElement;
    }): Lenis;
    raf: (time: number) => void;
    scrollTo: (target: HTMLElement) => void;
    destroy: () => void;
  }
  
  interface Window {
    Lenis: Lenis;
  }
  