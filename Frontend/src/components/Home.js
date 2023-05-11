import React from "react";
import "./style/Home.css";
import Contact from "./Contact";

function Home() {
  return (
    <div className="home">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100 carocel-image"
              src={require("../assets/images/home3.jpg")}
              alt="First slide"
            />
            <div className="carousel-caption d-none d-md-block shadow rounded carocell">
              <h5>Work Out</h5>
              <p>
                Push yourself, Because no one else is going to do it for
                you.....
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 carocel-image"
              src={require("../assets/images/home6.jpg")}
              alt="Second slide"
            />
            <div className="carousel-caption d-none d-md-block shadow rounded carocell">
              <h5>Biceps</h5>
              <p id="p1">
                Big biceps are nice, but it's a strong heart that's most
                important of all.....
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 carocel-image"
              src={require("../assets/images/home 4.jpg")}
              alt="Third slide"
            />
            <div className="carousel-caption d-none d-md-block shadow rounded carocell">
              <h5>Boxing</h5>
              <p>
                Boxing is a combat sport in which two people, wearing protective
                gloves, throw punches at each other in a boxing ring with the
                goal of knocking out their opponent or scoring points through a
                judge's decision. The sport has been around for centuries and
                has evolved over time to include rules and regulations to ensure
                the safety of the athletes......
              </p>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <Contact />
    </div>
  );
}

export default Home;
