
import React, { useState, useEffect } from "react";
import { Navigation } from "./components/landingPage/components/navigation";
import { Header } from "./components/landingPage/components/header";
import { News } from "./components/landingPage/components/news";
import { About } from "./components/landingPage/components/about";
import { Services } from "./components/landingPage/components/services";
import { Gallery } from "./components/landingPage/components/gallery";
import { Contact } from "./components/landingPage/components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import "./App.css";
import Layout from "./components/landingPage/Layout";
import AboutUs from "./components/aboutUs/aboutUs";
import FAQ from "./components/FAQ/Faq";



export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  const history = useHistory();
  useEffect(() => {
    setLandingPageData(JsonData);

  }, []);

//   useEffect(() => {
//    if (window.location.pathname === '/') {
//       console.log("here")
//      history.push('/home');
//    }
//  }, [history]);

  return (
    <div>
     <Router>
     <Navigation />
            <Switch>
                  <Route exact path="/" >
                     <Layout />
                  </Route>
                  
                  <Route path="/aboutus" >
                     <AboutUs data={landingPageData.AboutUs} />
                  </Route>

                  <Route path="/services" >
                     <Services data={landingPageData.Services} />
                  </Route>

                  <Route path="/gallery" >
                     <Gallery data={landingPageData.Gallery} />
                  </Route>

                  <Route path="/faq" >
                     <FAQ data={landingPageData.faq} />
                  </Route>

                  <Route path="/contact" >
                     <Contact data={landingPageData.Contact} />
                  </Route>


                </Switch>
            </Router>
    
    </div>
   
  
   
  );
};

export default App;
