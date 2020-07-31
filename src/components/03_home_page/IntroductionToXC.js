import React from "react";
import Map from "./Map";
import Calendar from "./Calendar";
import "./IntroductionToXC.css";

function IntroductionToXC() {
  return (
    <>
      <article>
        <h4>WHY MERIT CROSS COUNTRY?</h4>
        <h6>COACH BUCKLEY HERE:</h6>
        <p>
          Cross country is both an individual and a team sport. You practice as a
          team, bond as a team, and race as a team in addition to trying to
          achieve your personal goals. There’s something about experiencing hard
          things with your peers that draws you closer together. Some of my
          greatest experiences in high school came through cross country and I
          can’t wait for you to form your own memories on this team. We are few,
          but we are one.
        </p>

        <p>
          Through cross country, you have the chance to improve yourself
          physically, mentally, and emotionally every single day. It has been over
          ten years since I began seriously running, and I still enjoy getting out
          on Utah’s beautiful trails with friends and keeping myself fit because
          it improves my quality of life. “Runner’s high” is a real thing and it’s
          a great addiction.
        </p>
      </article>
      <div className="map-and-calendar">
        <Calendar />
        <Map />
      </div>
    </>
  );
}

export default IntroductionToXC;
