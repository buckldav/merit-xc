import React from "react";
import "./How_To_Join.css";

function How_To_Join() {
  return (
    <div>
      <h4>How do you join Merit XC? Come to practice!</h4>

      <h6>SUMMER PRACTICE AND EXPECTATIONS</h6>
      <p className="coachesStatement">
        The first meet of the year is just after school starts (see attached
        schedule). To ensure that we are fit and ready for that first race, we
        will hold summer practice beginning Wednesday July 29th, continuing
        Monday through Friday at 7:45 am. We will meet at Hobble Creek Park in
        Springville and enjoy the great trails and paths from there. Bring a
        water bottle because the drinking fountains are off.
      </p>
      <p
        className="
        coachesStatement"
      >
        For warmups, we will typically run to the nearby Bartholomew Park (or
        Springville High School when indicated on the workout schedule) where
        there are bathrooms and we will stretch before continuing the run. When
        school starts, we will practice after school (at the school). If you
        would like to carpool for summer practice but don’t know others who are
        going, contact Coach Buckley at david.buckley@meritacademy.org and he
        can help connect you with someone who lives near you.{" "}
      </p>

      <h6>THE EXTRA MILE</h6>
      <p
        className="
        coachesStatement"
      >
        To truly become elite, athletes must go above and beyond what we do at
        team practices. The best members of the cross country teams that I’ve
        been on (several of whom competed collegiately) would run on their own
        (or with friends) in the evenings, stretch, and do core workouts in
        addition to what we did as a team in the mornings. Cross training is
        also common amongst elite athletes and encouraged for those looking to
        increase their overall fitness. Be cautious of over-training, do not
        push yourself to the point of injury, but be aware of your body and see
        how far you can go. If you would like suggestions for additional
        workouts/activities, feel free to ask me. I recommend engaging in some
        sort of physical activity on Saturdays whether it’s working outside,
        playing another sport, or going on a long, slow run to help build
        endurance.
      </p>
      <br></br>

      <p>
        {" "}
        For more details, check out the full practice form&nbsp;
        <a
          href="https://docs.google.com/document/d/1yER-D83RU8CpplRgf0whABhql8F3tE_fW1vXDt_UBOU/edit?usp=sharing"
          target="_blank"
        >
          here!
        </a>
      </p>

      <h3 className="actionItems">Action Items for Athletes</h3>
      <p
        className="
        coachesStatement2"
      >
        Although coming to summer practice is free, all of these items are
        required before students can race in any meets of the year.
      </p>
      <ul id="unorderedList1">
        <li>Pay $100 to Vivian in the finance office</li>
        <li>
          Proof of an up to date physical
          <ul id="unorderedList2">
            <li>
              Download physical form{" "}
              <a href="https://www.uhsaa.org/forms/forma.pdf" target="_blank">
                here
              </a>
            </li>
          </ul>
        </li>
        <li>
          Registration on{" "}
          <a href="https://registermyathlete.com/" target="_blank">
            registermyathlete.com
          </a>
        </li>
      </ul>
    </div>
  );
}

export default How_To_Join;
