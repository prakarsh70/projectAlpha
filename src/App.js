import React from "react";
import Alpha from "./alpha.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Alpha} className="App-logo" alt="logo" />
        <div class="container">
          <div class="glitch" data-text="ProjectAlpha">
          ProjectAlpha
          </div>
          <div class="glow">ProjectAlpha</div>
          <p class="subtitle">this is ProjectAlpha bitches!</p>
        </div>
        <div class="scanlines"></div>
      </header>
    </div>
  );
}

export default App;
