import React, { useState } from "react";
import Pace from "./Pace";
import Time from "./Time";
import Distance from "./Distance";
import Button from "./Button";
import {getFormattedTime, getFormattedPace} from "../Util/utils"

function Form() {
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
  const [result, setResult] = useState(null);

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
    setResult(null);
  };

  const clickButton = async () => {
    try {
      const { distance, hour, minute, second, paceMinute, paceSecond } =
        formData;

      const url = `/calculate-pace?distance=${distance}&hour=${hour}&minute=${minute}&second=${second}&paceMinute=${paceMinute}&paceSecond=${paceSecond}`;

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to calculate pace");
      }

      const result = await response.json();
      setResult(result);
    } catch (error) {
      console.error("Error:", error.message);
    }

    setIsCalculated(true);
  };


  return (
    <div className="form">
      <form>
        <div className="calculate-box container">
          <div className="label">
            <label>Distance :</label>
          </div>
          <div className="inputboxes">
            {isCalculated ? (
              <div className="input">{result?.distance} km</div>
            ) : (
              <Distance
                isCalculated={isCalculated} onChange={(value) => handleInputChange("distance", value)}
              />
            )}
          </div>
          <div className="label">
            <label>Time :</label>
          </div>
          <div className="inputboxes">
            {isCalculated ? (
              <div className="input">{getFormattedTime(result?.time)}</div>
            ) : (
              <Time
                onChange={(hours, minutes, seconds) =>
                  handleInputChange("hour", hours) ||
                  handleInputChange("minute", minutes) ||
                  handleInputChange("second", seconds)
                }
              />
            )}
          </div>
          <div className="label">
            <label>Pace :</label>
          </div>
          <div className="inputboxes">
            {isCalculated ? (
              <div className="input">{getFormattedPace(result?.pace)}</div>
            ) : (
              <Pace
                onChange={(minute, second) =>
                  handleInputChange("paceMinute", minute) ||
                  handleInputChange("paceSecond", second)
                }
              />
            )}
          </div>
        </div>
        <Button onClick={isCalculated ? resetForm : clickButton} text={isCalculated ? "Reset" : "Calculate"}/>
      </form>
    </div>
  );
}

export default Form;
