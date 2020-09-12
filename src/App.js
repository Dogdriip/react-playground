import React, { useState, useEffect } from "react";

const App = () => {
  const sayHello = () => console.log("Hello!");
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  useEffect(sayHello, [x]);
  return (
    <>
      <h1>Hello!</h1>
      <button onClick={() => setX(x + 1)}>{x}</button>
      <button onClick={() => setY(y + 1)}>{y}</button>
    </>
  );
};
export default App;
