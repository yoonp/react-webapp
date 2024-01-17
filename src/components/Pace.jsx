import React, { useState } from "react";

function Pace({ onChange }) {
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  const handleMinuteChange = (event) => {
    const value = event.target.value !== "" ? parseInt(event.target.value, 10) : 0;
    setMinute(value);
    onChange && onChange(value, second);
  };

  const handleSecondChange = (event) => {
    const value = event.target.value !== "" ? parseInt(event.target.value, 10) : 0;
    setSecond(value);
    onChange && onChange(minute, value);
  };

  return (
    <div className="input">
      <input type="number" placeholder="min" min={0} max={59} onChange={handleMinuteChange} />&nbsp;:&nbsp;
      <input type="number" placeholder="sec" min={0} max={59} onChange={handleSecondChange} />
    </div>
  );
}

export default Pace;
