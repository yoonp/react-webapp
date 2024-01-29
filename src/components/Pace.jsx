import React from "react";

function Pace({ result, isCalculated, formData, setFormData, onChange }) {

  const handleInputChange = (name, event) => {
    const value = event.target.value !== "" ? parseInt(event.target.value, 10) : 0;
    setFormData((prevFormData) => ({
      ...prevFormData, 
      [name]: value
    }));
    onChange(formData.paceMinute, formData.paceSecond);
  };

  const handleMinuteChange = (event) => {
    handleInputChange("paceMinute", event);
  };

  const handleSecondChange = (event) => {
    handleInputChange("paceSecond", event);
  };

  return (
    <div className="inputboxes">
      {isCalculated ? (
        <div className="input">{result?.pace}</div>
      ) : (
        <div className="input">
          <input
            type="number"
            placeholder="min"
            min={0}
            max={59}
            onChange={handleMinuteChange}
          />
          &nbsp;:&nbsp;
          <input
            type="number"
            placeholder="sec"
            min={0}
            max={59}
            onChange={handleSecondChange}
          />
          &nbsp;/km
        </div>
      )}
    </div>
  );
}

export default Pace;
