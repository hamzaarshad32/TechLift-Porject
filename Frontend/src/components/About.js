import React from "react";
import "../components/style/About.css";
import aboutimage from "../assets/images/home1.jpg";

function About() {
  return (
    <div className="about">
      <div className="container p-5">
        <div className="mt-5 row">
          <div className="col-md-6 col-lg-6 col-sm-12 text-white left">
            <h1 className="heading text-danger">About Us</h1>
            <p className="lead mt-3">
              The term "workout" refers to physical exercise or activity that is
              designed to improve or maintain physical fitness and health. The
              concept of working out has been around for thousands of years,
              with evidence of exercise and physical activity being an integral
              part of many cultures and civilizations throughout history. In the
              modern era, the concept of working out became popular in the late
              19th and early 20th centuries, as people began to realize the
              health benefits of regular exercise. The development of organized
              sports, fitness equipment, and gyms also contributed to the rise
              of working out as a popular pastime. Today, working out is an
              important part of many people's lives, with a wide range of
              activities and exercise programs available to help individuals
              achieve their fitness goals. From weight lifting and cardio
              workouts to yoga and pilates, there are many ways to stay active
              and healthy through regular physical activity.
            </p>
          </div>
          <div className="col-md-6 col-lg-6 col-sm-12">
            <img className="w-100 image" src={aboutimage} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
