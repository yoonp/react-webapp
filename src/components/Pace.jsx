import React, { useState } from "react";

function Pace(props) {
  const handleMinuteChange = (event) => {
    const value =
      event.target.value !== "" ? parseInt(event.target.value, 10) : 0;
      props.setFormData({ ...props.formData, paceMinute: value });
      props.onChange && props.onChange(value, props.formData.paceSecond);
  };

  const handleSecondChange = (event) => {
    const value =
      event.target.value !== "" ? parseInt(event.target.value, 10) : 0;
      props.setFormData({ ...props.formData, paceSecond: value });
      props.onChange && props.onChange(props.formData.paceMinute, value);
  };

  return (
    <div className="inputboxes">
      {props.isCalculated ? (
        <div className="input">{props.result?.pace}</div>
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
