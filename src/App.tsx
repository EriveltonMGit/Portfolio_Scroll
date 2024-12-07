// src/App.jsx

// import ParticleScene from "../src/assets/components/Particles/Particles";

// IMPORTS COMPONENTS

import Nav from "./Pages/Nav/Nav_bar";
import Page_1 from "./Pages/Page_1";
import Page_2 from "./Pages/Page_2/ScrollSection.tsx";
import  Page_3  from "./Pages/Page_3/index.tsx";
import  Page_4  from "./Pages/Page_4";
import  Page_5  from "./Pages/Page_5";

export default function App() {
  return (
    <section>
      {/* <ParticleScene /> */}
      <Nav />
      <Page_1 />
      
      <Page_2 />
      <Page_3/>
      <Page_4 />
      <Page_5 />
      
    </section>
  );
}
