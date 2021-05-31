import React from "react";
import "./HowToJoin.css";

function HowToJoin() {
  return (
    <article>
      <h4>How do you join Merit XC? Come to practice!</h4>

      <h6>SUMMER PRACTICE AND EXPECTATIONS</h6>
      <p>
        The first meet of the year is just after school starts (see <a href="/meets">meet schedule</a>). To ensure that we are fit and ready for that first race, we
        will hold summer practice beginning <strong>Tuesday, July 6th</strong>, continuing
        Monday through Friday at <strong>7:45 am</strong>. We will meet at <strong><a href="/#map">Hobble Creek Park</a></strong> in
        Springville and enjoy the great trails and paths from there. Bring a
        water bottle because the drinking fountains are off.
      </p>
      <p>
        For warmups, we will typically run to the nearby Bartholomew Park (or
        Springville High School when indicated on the <a href="/#calendar">workout schedule</a>) where
        there are bathrooms and we will stretch before continuing the run. When
        school starts, we will practice after school (at the school). If you
        would like to carpool for summer practice but don’t know others who are
        going, contact Coach Buckley at <a href="mailto:david.buckley@meritacademy.org">david.buckley@meritacademy.org</a> and he
        can help connect you with someone who lives near you.{" "}
      </p>

      <p className="no-indent">
        {" "}
        For more details, check out Coach Buckley's letter to parents and students&nbsp;
        <a
          href="https://docs.google.com/document/d/1yER-D83RU8CpplRgf0whABhql8F3tE_fW1vXDt_UBOU/edit?usp=sharing"
          target="_blank" rel="noopener noreferrer"
        >
          here!
        </a>
      </p>
      <br />

      <h4>Action Items for Athletes</h4>
      <p className="no-indent">
        Although coming to summer practice is free, all of these items are
        required before students can race in any meets of the year.
      </p>
      <ul id="unorderedList1">
        <li>Pay $100 at the front desk</li>
        <li>
          Provide proof of an up to date physical
          <ul id="unorderedList2">
            <li>
              Download physical form{" "}
              <a href="https://www.uhsaa.org/forms/forma.pdf" target="_blank" rel="noopener noreferrer">here</a>
            </li>
          </ul>
        </li>
        <li>
          Parents must register their student on{" "}
          <a href="https://registermyathlete.com/" target="_blank" rel="noopener noreferrer">
            registermyathlete.com
          </a>
        </li>
      </ul>
      <br />
    </article>
    
  );
}

export default HowToJoin;
