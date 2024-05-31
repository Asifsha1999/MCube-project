import React, { useState, useEffect } from "react";
import { Navigation } from "./components/landingPage/landingPage components/navigation";
import { Header } from "./components/landingPage/landingPage components/header";
import { About } from "./components/landingPage/landingPage components/about";
import { News } from "./components/landingPage/landingPage components/news";
import { Services } from "./components/landingPage/landingPage components/services";
import { Gallery } from "./components/landingPage/landingPage components/gallery";
import { Testimonials } from "./components/landingPage/testimonials";
import { Team } from "./components/landingPage/Team";
import { Contact } from "./components/landingPage/landingPage components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <News data={landingPageData.News} />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery} />
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
      <aboutUs />
    </div>
  );
};

export default App;
