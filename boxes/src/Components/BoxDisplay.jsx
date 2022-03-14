import React from "react";
import CreateBox from "./CreateBox";

const BoxDisplay = ({ box }) => {
  console.log(box.color);

  return (
    <div
    
      style={{
        backgroundColor: box.color,
        height: "100px",
        width: "100px",
        display: "inline-block",
      }}
    >
      {box.color}

    </div>
  );
};

export default BoxDisplay;
