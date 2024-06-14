import React from "react";
import { TypeAnimation } from 'react-type-animation';
import { Services } from "./services";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                {/* <TypeAnimation
                  sequence={[
                    "Build.",
                    500,
                    "Build. Design.", //  Continuing previous Text
                    500,
                    "Build. Design. Management.",
                    500,
                    "Build. Design.",
                    500,
                    "Build.",
                    500,
                    "",
                    500,
                  ]}
                  style={{ fontSize: "4em" , fontWeight:700, color: "white" , fontFamily:"Montserrat" }}
                  repeat={Infinity}
                /> */}
                
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="#Services"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Learn More
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
