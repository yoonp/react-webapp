import React from "react";

function Distance({onChange}) {
  const handleChange = (event) => {
    const inputValue = event.target.value !== "" ? parseFloat(event.target.value) : 0;
    onChange && onChange(inputValue);
  };

  return (
    <div className="input">
      <input type="number" placeholder="km" min={0} max={59} onChange={handleChange}/>&nbsp;km
    </div>
  );
}

export default Distance;
