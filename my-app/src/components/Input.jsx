import { useState } from "react";
import "./Input.css";

function UserInput({ onUserInput }) {
  const [userInput, setUserInput] = useState("");

  const handleCityChange = (event) => {
    const inputValue = event.target.value;
    setUserInput(inputValue);
    onUserInput(inputValue);
  };

  return (
    <div className="input-div">
      <input
        placeholder="Enter a city"
        className="input-field"
        type="text"
        value={userInput}
        onChange={handleCityChange}
      />
    </div>
  );
}

export default UserInput;
