import React from "react";

function Pace() {
  return (
    <div className="input">
      <input type="number" placeholder="min" min={0} max={59}></input>&nbsp;:&nbsp;
      <input type="number" placeholder="sec" min={0} max={59}></input>&nbsp;/km
    </div>
  );
}

export default Pace;
