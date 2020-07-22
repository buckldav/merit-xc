import React from "react";
import HobbleCreekCanyon from "./HobbleCreekCanyon.jpg";

function BackgroundPicture() {
  return (
    <div>
      <img
        src={HobbleCreekCanyon}
        alt="A picture of red and green trees in a canyon."
      />
    </div>
  );
}

export default BackgroundPicture;
