import React, { useState } from "react";

function Time({ result, isCalculated, formData, setFormData, onChange }) {
  const handleHourChange = (event) => {
    const value =
      event.target.value !== "" ? parseInt(event.target.value, 10) : 0;
    setFormData({ ...formData, hour: value });
    onChange && onChange(value, formData.minute, formData.second);
  };

  const handleMinuteChange = (event) => {
    const value =
      event.target.value !== "" ? parseInt(event.target.value, 10) : 0;
    setFormData({ ...formData, minute: value });
    onChange && onChange(formData.hour, value, formData.second);
  };

  const handleSecondChange = (event) => {
    const value =
      event.target.value !== "" ? parseInt(event.target.value, 10) : 0;
    setFormData({ ...formData, second: value });
    onChange && onChange(formData.hour, formData.minute, value);
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
