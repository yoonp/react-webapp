import React from "react";

function Time() {
  return (
    <div className="input">
      <input type="number" placeholder="hr" min={0}></input>&nbsp;:&nbsp;
      <input type="number" placeholder="min" min={0} max={59}></input>&nbsp;:&nbsp;
      <input type="number" placeholder="sec" min={0} max={59}></input>
    </div>
  );
}

export default Time;
