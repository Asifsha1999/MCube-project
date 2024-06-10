import React from "react";
import { Header } from "./components/header";
import { About } from "./components/about";
import { News } from "./components/news";
import { Services } from "./components/services";
import { Contact } from "./components/contact";
import JsonData from "../../data/data.json";
import SmoothScroll from "smooth-scroll";
import "./landingPage.css";
import AboutUs from "../aboutUs/aboutUs";
import faq from "../FAQ/Faq";

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
      <faq data={JsonData.FAQ}/>
      <News data={JsonData.News} />
      <Services data={JsonData.Services} />
      {/* <Gallery data={JsonData.Gallery} /> */}
      <Contact data={JsonData.Contact} />      
      
    </div>
  );
};

export default Layout;
