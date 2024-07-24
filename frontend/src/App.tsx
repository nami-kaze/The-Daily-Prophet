import React from "react";
import GoogleSlide from "./components/GoogleSlide/GoogleSlide";
import PomodoroTimer from "./components/PomodoroTimer/PomodoroTimer";
import GoogleForms from "./components/GoogleForms/GoogleForms";
import GoogleSheets from "./components/GoogleSheets/GoogleSheets";
import "./App.css"; // Ensure you have a CSS file to style your components

function App() {
  return (
    <div>
      <h1>Welcome to My Digital Notice Board</h1>
      <div className="main-one">
        <GoogleSlide />
        <PomodoroTimer />
      </div>
      <div className="side-by-side">
        <GoogleForms />
        <GoogleSheets />
      </div>
    </div>
  );
}

export default App;
