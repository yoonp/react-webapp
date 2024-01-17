import "./App.css";
import React, { useState, useEffect } from "react";
import Pace from "./components/Pace";
import Time from "./components/Time";
import Distance from "./components/Distance";
import Button from "@mui/material/Button";

function App() {
  const initialFormData = {
    distance: 0.0,
    hour: 0,
    minute: 0,
    second: 0,
    paceMinute: 0,
    paceSecond: 0,
  };
  
const [formData, setFormData] = useState(initialFormData);
const [isCalculated, setIsCalculated] = useState(false);
const [distanceResult, setDistanceResult] = useState(null);
const [timeResult, setTimeResult] = useState(null);
const [paceResult, setPaceResult] = useState(null);

const handleInputChange = (name, value) => {
  setFormData((prevFormData) => {
    return {
      ...prevFormData,
      [name]: value,
    };
  });
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setIsCalculated(false);
    setDistanceResult(null);
    setTimeResult(null);
    setPaceResult(null);
  };

  const clickButton = async () => {
    try {
      const { distance, hour, minute, second, paceMinute, paceSecond } = formData;
        
      const url = `/calculate-pace?distance=${distance}&hour=${hour}&minute=${minute}&second=${second}&paceMinute=${paceMinute}&paceSecond=${paceSecond}`;
      
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to calculate pace');
      }
  
      const result = await response.json();
      setDistanceResult(result);
      setTimeResult(result);
      setPaceResult(result);    
  
    } catch (error) {
      console.error('Error:', error.message);
    }

    setIsCalculated(true);
  };

  const getFormattedTime = (time) => {
    const timeParts = time.match(/PT(\d+)H(\d+)M([\d.]+)S/);
  
    if (timeParts) {
      const hour = timeParts[1];
      const minute = timeParts[2].padStart(2, '0');
      const second = parseFloat(timeParts[3]).toFixed(0).padStart(2, '0');
  
      return `${hour} : ${minute} : ${second}`;
    } else {

      return 'Invalid time format';
    }
  };
    
  const getFormattedPace = (pace) => {
    const paceParts = pace.split('M');
    const minute = paceParts[0].replace('PT', '');
    const second = paceParts[1].replace('S', '');
  
    return `${minute} : ${second}`;
  };
  
  return (
    <div className="App">
    <img
      className="App-logo"
      src={require("./assets/LibertyRunnersLogo.png")}
      alt="Liberty Runners Logo"
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
                {isCalculated && distanceResult ? (
                  <div className="input">{distanceResult.distance} km</div>
                ) : (
                  <Distance onChange={(value) => handleInputChange("distance", value)} />
                )}
              </div>
              <div className="label">
                <label>Time :</label>
              </div>
              <div className="inputboxes">
              {isCalculated && paceResult ? (
                <div className="input">{getFormattedTime(timeResult.time)}</div>
              ) : (
                  <Time onChange={(hours, minutes, seconds) => handleInputChange("hour", hours) || handleInputChange("minute", minutes) || handleInputChange("second", seconds)} />
                )}
              </div>
              <div className="label">
                <label>Pace :</label>
              </div>
              <div className="inputboxes">
              {isCalculated && paceResult ? (
                <div className="input">{getFormattedPace(paceResult.pace)} / km</div>
              ) : (
                <Pace onChange={(minute, second) => handleInputChange("paceMinute", minute) || handleInputChange("paceSecond", second)} />
              )}
            </div>
            </div>
            <div className="button">
              <Button
                sx={{
                  color: "#626262",
                  bgcolor: "#e7e7e7;",
                  borderRadius: 0,
                  width: 200,
                  height: 60,
                  fontSize: 22,
                  "&:hover": {
                    backgroundColor: "#e7e7e7;",
                    color: "#222222",
                  },
                }}
                variant="contained"
                onClick={isCalculated ? resetForm : clickButton}
              >
                {isCalculated ? "Reset" : "Calculate"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
