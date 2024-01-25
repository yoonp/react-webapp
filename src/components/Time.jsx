import React, { useState } from "react";

function Time(props) {
  const handleHourChange = (event) => {
    const value =
      event.target.value !== "" ? parseInt(event.target.value, 10) : 0;
    props.setFormData({ ...props.formData, hour: value });
    props.onChange &&
      props.onChange(value, props.formData.minute, props.formData.second);
  };

  const handleMinuteChange = (event) => {
    const value =
      event.target.value !== "" ? parseInt(event.target.value, 10) : 0;
    props.setFormData({ ...props.formData, minute: value });
    props.onChange &&
      props.onChange(props.formData.hour, value, props.formData.second);
  };

  const handleSecondChange = (event) => {
    const value =
      event.target.value !== "" ? parseInt(event.target.value, 10) : 0;
    props.setFormData({ ...props.formData, second: value });
    props.onChange &&
      props.onChange(props.formData.hour, props.formData.minute, value);
  };

  return (
    <div className="inputboxes">
      {props.isCalculated ? (
        <div className="input">{props.result?.time}</div>
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
