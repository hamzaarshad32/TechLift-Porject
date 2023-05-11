import React from "react";
import "./style/Services.css";

function Services() {
  return (
    <div className="about p-5">
      <div className="container p-5">
        <div className="mt-3 row">
          <div className="col-md-6 col-lg-6 col-sm-12 text-white service-text">
            <h1>Services</h1>
            <p className="lead mt-3">
              Biceps weight lifting refers to exercises that target the biceps
              muscles of the upper arm. Bicep curls: This exercise can be done
              with dumbbells, barbells or cables. The lifter holds the weight
              with an underhand grip and curls the weight towards the shoulder,
              flexing the elbow joint. Hammer curls: Similar to bicep curls, but
              with a neutral grip, where the palms are facing each other.
              Chin-ups/pull-ups: These exercises use the lifter's body weight
              and require the use of a pull-up bar. The lifter hangs from the
              bar and pulls themselves up until their chin is above the bar.
            </p>
          </div>
          <div className="col-md-6 col-lg-6 col-sm-12">
            <img
              className="w-100 img"
              src={require("../assets/images/bicps.jpg")}
            />
          </div>
        </div>
        <div className=" mt-5 row">
          <div className="col-md-6 col-lg-6 col-sm-12">
            <img
              className="w-100 img"
              src={require("../assets/images/15.jpg")}
            />
          </div>
          <div className="col-md-6 col-lg-6 col-sm-12 text-white service-text">
            <h1>Dumbbell</h1>
            <p className="lead mt-3">
              Dumbbell bicep curls: Stand with feet shoulder-width apart,
              holding a dumbbell in each hand with palms facing up. Keeping the
              elbows close to the body, curl the dumbbells up towards the
              shoulders and then lower back down. Hammer curls: Stand with feet
              shoulder-width apart, holding a dumbbell in each hand with palms
              facing in towards the body. Curl the dumbbells up towards the
              shoulders, keeping the elbows close to the body, and then lower
              back down. Incline dumbbell curls: Sit on an incline bench with a
              dumbbell in each hand, palms facing up. Curl the dumbbells up
              towards the shoulders, keeping the elbows close to the body, and
              then lower back down.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
