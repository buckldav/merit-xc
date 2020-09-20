import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Logo from "./media/knights-xc.PNG";

import IntroductionToXC from "./components/03_home_page/IntroductionToXC";
import HowToJoin from "./components/04_how_to_join/HowToJoin";
import MeetSchedules from "./components/05_Meet_Schedule/MeetSchedules";
import Results from "./components/02_results/Results";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Main-page">
          <img src={Logo} alt="Logo" id="meritAcademyLogo" width="300px"></img>
          <Router>
            <div>
              <nav id="navigationBar">
                <Link to="/" className="navigations">
                  Home Page
                </Link>
                <Link to="/join" className="navigations">
                  How to Join
                </Link>
                <Link to="/meets" className="navigations">
                  Meet Schedule
                </Link>
                <Link to="/results" className="navigations">
                  Race Results
                </Link>
              </nav>

              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/join">
                  <Join />
                </Route>
                <Route exact path="/meets">
                  <Meetings />
                </Route>
                <Route exact path="/results">
                  <Results />
                </Route>
              </Switch>
            </div>
          </Router>
          <footer>&copy; 2020 by <a href="https://github.com/Adomin8er">Adomin8er</a></footer>
        </div>
      </header>
    </div>
  );
}

function Home() {
  // return <HowToJoin />;
  return <IntroductionToXC />;
  // return <h2>Home</h2>;
}

function Join() {
  // return <h2>Join</h2>;
  return <HowToJoin />;
}

function Meetings() {
  // return <h2>Join</h2>;
  return <MeetSchedules />;
}

export default App;
