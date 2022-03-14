import React, { useState } from "react";
import BoxDisplay from "./BoxDisplay";
import CreateBox from "./CreateBox";

const Main = () => {
  // CREATE STATE
  const [boxes, setBoxes] = useState([
    { color: "red" },
    { color: "green" },
    { color: "blue" },
  ]);

  //   CREATE FUNCTION TO CREATE A NEW BOX
  const createBox = (newBoxObj) => {
    // console.log(newBoxObj);
    //  CREATES A NEW COPY OF THE BOXES
    // [...boxes ] = same as iterating all the key:value pair
    // const newSetBoxes = [...boxes];
    // newSetBoxes.push(newBoxObj);
    // setBoxes(newSetBoxes);

// setbox function = set an array and lay each box and add new box at the end
    setBoxes([...boxes, newBoxObj])
  };


  return (
    <div>
      <h1>BOX GENERATOR</h1>
      {/* CREATE BOX COMPONENT */}
      <CreateBox createBox={createBox} />
      {/* {JSON.stringify(boxes)} */}

      {/* loop through the array / mapping */}
      {boxes.map((box, index) => {
        return <BoxDisplay box={box} key={index} />;
      })}
    </div>
  );
};

export default Main;
