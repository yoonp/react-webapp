import React from "react";
import Button from "@mui/material/Button";

function CalculateButton(props) {
  return (
    <div className="button">
      <Button
        sx={{
          color: "#626262",
          bgcolor: "#e7e7e7;",
          borderRadius: 0,
          width: 200,
          height: 60,
          fontSize: 22,
          "&:hover": {
            backgroundColor: "#e7e7e7;",
            color: "#222222",
          },
        }}
        variant="contained"
        onClick={props.onClick}
      >
        {props.text}
      </Button>
    </div>
  );
}

export default CalculateButton;
