import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Logo from "./components/02_merit_logo/MeritKnightsLogo.jpg";
import Logo2 from "./components/02_merit_logo/MeritLogo.jpg";

import IntroductionToXC from "./components/03_home_page/IntroductionToXC";
import How_To_Join from "./components/04_how_to_join/How_To_Join";
import Meet_Schedules from "./components/05_Meet_Schedule/Meet_Schedules";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Main-page">
          <img src={Logo} alt="Logo" id="meritcademyLogo"></img>
          <Router>
            <div>
              <nav id="navigationBar">
                <Link to="/" className="navigations">
                  Home Page
                </Link>
                <Link to="/join" className="navigations">
                  How to Join
                </Link>
                <Link to="/meetings" className="navigations">
                  Meet Schedule &amp; Locations
                </Link>
              </nav>

              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/join">
                  <Join />
                </Route>
                <Route exact path="/meetings">
                  <Meetings />
                </Route>
              </Switch>
            </div>
          </Router>
          <img src={Logo2} alt="Logo" id="meritAcademyLogo2"></img>
        </div>
      </header>
    </div>
  );
}

function Home() {
  // return <How_To_Join />;
  return <IntroductionToXC />;
  // return <h2>Home</h2>;
}

function Join() {
  // return <h2>Join</h2>;
  return <How_To_Join />;
}

function Meetings() {
  // return <h2>Join</h2>;
  return <Meet_Schedules />;
}

export default App;
