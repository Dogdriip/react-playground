import React, { useState } from "react";
import "./styles.css";

const App = () => {
  const [item, setItem] = useState(0);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);

  return (
    <>
      <h1>Hello!</h1>
      <p>{item}</p>
      <button onClick={incrementItem}>+</button>
      <button onClick={decrementItem}>-</button>
    </>
  );
};
export default App;
