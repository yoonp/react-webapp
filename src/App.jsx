import "./App.css";
import React, { useState } from "react";
import Pace from "./components/Pace";
import Time from "./components/Time";
import Distance from "./components/Distance";
import { click } from "@testing-library/user-event/dist/click";
import Button from "@mui/material/Button";

function App() {
  const [isCalculated, setIsCalculated] = useState(false);

  function clickButton(event){
    setIsCalculated(!isCalculated);
    event.preventDefault();
  }

  return (
    <div className="App">
      <img
        className="App-logo"
        src={require("./assets/LibertyRunnersLogo.png")}
      />
      <div className="App-main">
        <div className="title">
          <h1 className="title-text">Pace Calculator</h1>
        </div>
        <div className="form">
          <form action="/action_page.php">
            <div className="calculate-box container">
              <div className="label">
                <label>Distance :</label>
              </div>
              <div className="inputboxes">
                {isCalculated ? <div className="input">3 km</div> : <Distance />}
              </div>
              <div className="label">
                <label>Time :</label>
              </div>
              <div className="inputboxes">
                {isCalculated ? <div className="input">3 : 28 : 38</div> : <Time />}
              </div>
              <div className="label">
                <label>Pace :</label>
              </div>
              <div className="inputboxes">
              {isCalculated ? <div className="input">4 : 57 / km</div> : <Pace />}
              </div>
            </div>
            <div className="button">
              <Button sx={{
                color: '#626262',
                bgcolor: '#e7e7e7;',
                borderRadius: 0,
                width: 200,
                height: 60,
                fontSize: 22,
                '&:hover': {
                  backgroundColor: '#e7e7e7;',
                  color: '#222222'
                }
              }} variant="contained"  onClick={clickButton}>{isCalculated ? "Reset" : "Calculate"} 
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
