import React, { useState } from "react";

function Pace({ result, isCalculated, formData, setFormData, onChange }) {
  const handleMinuteChange = (event) => {
    const value =
      event.target.value !== "" ? parseInt(event.target.value, 10) : 0;
    setFormData({ ...formData, paceMinute: value });
    onChange && onChange(value, formData.paceSecond);
  };

  const handleSecondChange = (event) => {
    const value =
      event.target.value !== "" ? parseInt(event.target.value, 10) : 0;
    setFormData({ ...formData, paceSecond: value });
    onChange && onChange(formData.paceMinute, value);
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
