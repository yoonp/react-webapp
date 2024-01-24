import React, { useState } from "react";

function Time(props) {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  const handleHourChange = (event) => {
    const value =
      event.target.value !== "" ? parseInt(event.target.value, 10) : 0;
    setHour(value);
    props.onChange && props.onChange(value, minute, second);
  };

  const handleMinuteChange = (event) => {
    const value =
      event.target.value !== "" ? parseInt(event.target.value, 10) : 0;
    setMinute(value);
    props.onChange && props.onChange(hour, value, second);
  };

  const handleSecondChange = (event) => {
    const value =
      event.target.value !== "" ? parseInt(event.target.value, 10) : 0;
   setSecond(value);
    props.onChange && props.onChange(hour, minute, value);
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
