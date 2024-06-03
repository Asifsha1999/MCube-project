import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
import { News } from "./components/news";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "../../data/data.json";
import SmoothScroll from "smooth-scroll";
import "./landingPage.css";
import AboutUs from "../aboutUs/aboutUs";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const Layout = () => {
  // const [landingPageData, setLandingPageData] = useState({});
  // useEffect(() => {
  //   setLandingPageData(JsonData);
  // }, []);

  return (
    <div>
      <Header data={JsonData.Header} />
      <About data={JsonData.About} />
      <News data={JsonData.News} />
      <Services data={JsonData.Services} />
      <Gallery data={JsonData.Gallery} />
      <Contact data={JsonData.Contact} />
      {/* <AboutUs /> */}
    </div>
  );
};

export default Layout;
