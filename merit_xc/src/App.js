import React from "react";
import "./App.css";
import MeritLogo from "./components/merit_logo/MeritLogo";
import Map from "./components/main_page/Map";
import Calendar from "./components/main_page/Calendar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Main-page">
          <MeritLogo />
          <Map />
          <Calendar />
        </div>
      </header>
    </div>
  );
}

export default App;
