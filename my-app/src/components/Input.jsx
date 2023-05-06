import { useState } from "react";
import React from "react";

function UserInput({ onUserInput }) {
  const [userInput, setUserInput] = useState("");

  const handleCityChange = (event) => {
    setUserInput(event.target.value);
    onUserInput(event.target.value);
  };

  return (
    <div>
      <input type="text" value={userInput} onChange={handleCityChange} />
    </div>
  );
}

export default UserInput;
