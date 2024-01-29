import React from "react";

function Time({ result, isCalculated, formData, setFormData, onChange }) {
  
  const handleInputChange = (name, event) => {
    const value = event.target.value !== "" ? parseInt(event.target.value, 10) : 0;
    setFormData((prevFormData) => ({
      ...prevFormData, 
      [name]: value
    }));
    onChange(formData.hour, formData.minute, formData.second);
  };
  
  const handleHourChange = (event) => {
    handleInputChange("hour", event);
  };
  
  const handleMinuteChange = (event) => {
    handleInputChange("minute", event);
  };
  
  const handleSecondChange = (event) => {
    handleInputChange("second", event);
  };
  
  return (
    <div className="inputboxes">
      {isCalculated ? (
        <div className="input">{result?.time}</div>
      ) : (
        <div className="input">
          <input
            type="number"
            placeholder="hr"
            min={0}
            onChange={handleHourChange}
          />
          &nbsp;:&nbsp;
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
        </div>
      )}
    </div>
  );
}

export default Time;
