import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite'; 

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  vite: {  
    plugins: [tailwindcss()],
  },
  integrations: [alpinejs()],
});

scroll(animate(".parallaxgrafik1", { y: [400, -600] }), {
  target: document.querySelector(".parallaxgrafik"),
  offset: ["start end", "end start"],
});
scroll(animate(".parallaxgrafik2", { x: [-100, 100], y: [800, -1800] }), {
  target: document.querySelector(".parallaxgrafik"),
  offset: ["start end", "end start"],
});
scroll(animate(".parallaxgrafik3", { x: [-1500, 2000], y: [400, 0] }), {
  target: document.querySelector(".parallaxgrafik"),
  offset: ["start end", "end start"],
});
	

	scroll(animate(".progress-bar", { scaleX: [0, 1] }));

  scroll(
    animate("#horisontalliste", {
      transform: ["none", "translateX(-500vw)"],
    }),
    { target: document.querySelector("#horisontalscrollsection") }
  ); 