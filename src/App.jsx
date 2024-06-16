import { BrowserRouter } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { About, Contact, Hero, NavBar, Tech, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <NavBar />
          <Hero />
        </div>
        <About />

        <Tech />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <SpeedInsights />
      </div>
    </BrowserRouter>
  );
};

export default App;
