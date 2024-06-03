
import React, { useState, useEffect } from "react";
import { Navigation } from "./components/landingPage/components/navigation";
import { Header } from "./components/landingPage/components/header";
import { News } from "./components/landingPage/components/news";
import { About } from "./components/landingPage/components/about";
import { Services } from "./components/landingPage/components/services";
import { Gallery } from "./components/landingPage/components/gallery";
import { Testimonials } from "./components/landingPage/components/testimonials";
import { Team } from "./components/landingPage/components/Team";
import { Contact } from "./components/landingPage/components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css";
import Layout from "./components/landingPage/Layout";

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
     <Router>
     <Navigation />
            <Switch>
                  <Route path="/home" >
                     <Layout />
                  </Route>
                  
                  <Route path="/testimonials" >
                     <Testimonials data={landingPageData.Testimonials} />
                  </Route>

                  <Route path="/gallery" >
                     <Gallery data={landingPageData.Gallery} />
                  </Route>
                </Switch>
            </Router>
    
    </div>
   
  
   
  );
};

export default App;
