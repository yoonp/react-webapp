import React, { useState } from "react";
import Pace from "./Pace";
import Time from "./Time";
import Distance from "./Distance";
import Button from "./Button";

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

  const calculate = async () => {
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
      console.log(result);
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
          <Distance result={result} isCalculated={isCalculated} onChange={(value) => handleInputChange("distance", value)} />
          <div className="label">
            <label>Time :</label>
          </div>
          <Time result={result} isCalculated={isCalculated} onChange={(hours, minutes, seconds) =>
                  handleInputChange("hour", hours) ||
                  handleInputChange("minute", minutes) ||
                  handleInputChange("second", seconds)
                } />
          <div className="label">
            <label>Pace :</label>
          </div>
          <Pace result={result} isCalculated={isCalculated} onChange={(minute, second) =>
                  handleInputChange("paceMinute", minute) ||
                  handleInputChange("paceSecond", second)
                } />
        </div>
        <Button onClick={isCalculated ? resetForm : calculate} text={isCalculated ? "Reset" : "Calculate"}/>
      </form>
    </div>
  );
}

export default Form;
