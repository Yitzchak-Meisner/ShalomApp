import React from "react";
import "./styles.css";
import Greeting from "./Greeting";

const App: React.FC = () => {
  return (
    <div>
      <Greeting />
      <Greeting />
      <Greeting />
    </div>
  );
};

export default App;
