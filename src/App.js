import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [counter, setCounter] = useState(0);
  console.log(counter);
  useEffect(() => {
    document.title = `You clicked ${counter} times`;
  }, [counter]);
  const handleCount = () => {
    setCounter(counter + 1);
  };
  return (
    <>
      <button className="btn" onClick={handleCount}>
        Clicked {counter} times
      </button>
    </>
  );
};
export default App;
