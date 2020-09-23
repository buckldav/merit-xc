import React from "react";
import Map from "./Map";
import TeamPic from "../../media/team.jpg";
import Calendar from "./Calendar";
import "./IntroductionToXC.css";

function IntroductionToXC() {
  return (
    <>
      <div className="map-and-calendar">
        <Calendar />
      </div>
      <article>
        <h4>Why Merit Cross Country?</h4>
        <h6>COACH BUCKLEY HERE:</h6>
        <div className="text-with-pic">
          <p>
            Cross country is both an individual and a team sport. You practice as a
            team, bond as a team, and race as a team in addition to trying to
            achieve your personal goals. There’s something about experiencing hard
            things with your peers that draws you closer together. Some of my
            greatest experiences in high school came through cross country and I
            can’t wait for you to form your own memories on this team. We are few,
            but we are one.
          </p>
          <img src={TeamPic} alt="Merit Academy Cross Country Team" width="300px" height="225px" /> 
        </div>
      </article>
      <div className="map-and-calendar">
        <Map />
      </div>
    </>
  );
}

export default IntroductionToXC;
