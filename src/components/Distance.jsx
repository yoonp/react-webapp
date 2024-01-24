import React from "react";

function Distance(props) {
  const handleChange = (event) => {
    const inputValue =
      event.target.value !== "" ? parseFloat(event.target.value) : 0;
    props.onChange && props.onChange(inputValue);
  };

  return (
    <div className="inputboxes">
      {props.isCalculated ? (
        <div className="input">{props.result?.distance}</div>
      ) : (
        <div className="input">
          <input
            type="number"
            placeholder="km"
            min={0}
            onChange={handleChange}
          />
          &nbsp;km
        </div>
      )}
    </div>
  );
}

export default Distance;
