import React, { useState } from "react";

const CreateBox = ({createBox}) => {
  // console.log(props.createBox);

  // state variable for onChange
  const [newColor, setNewColor] = useState("");

  // create function submit color
  const submitColor = (e) => {
    e.preventDefault();
    // console.log("newColor");

    // DISPLAYS THE COLOR - create a variable option
    // const newBox = {
    //   color: newColor,
    // };
    createBox({color: newColor});
  };

  return (
    <div>
      <h3>Create a Box</h3>
      Display Color: {newColor}
      <form onSubmit={submitColor}>
        {/* for each change execute setNewColor, set its state variable */}
        {/* for each input set it as its value */}
        <input
          type="text"
          onChange={(e) => setNewColor(e.target.value)}
          value={newColor}
        />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default CreateBox;
