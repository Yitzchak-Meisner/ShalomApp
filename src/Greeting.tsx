import React, { useState } from "react";
import "./styles.css";

const Greeting: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [greeting, setGreeting] = useState<string>("שלום ——");

  const handleClick = () => {
    setGreeting(`שלום ${name || "——"}`);
  };

  return (
    <div className="container">
      <h1 className="title">{greeting}</h1>
      <div className="form">
        <input
          type="text"
          placeholder="הכנס שם..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input"
        />
        <button onClick={handleClick} className="button">
          ברוך הבא
        </button>
      </div>
    </div>
  );
};

export default Greeting;
