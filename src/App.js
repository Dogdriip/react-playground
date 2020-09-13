import React, { useState, useEffect, useRef } from "react";

const App = () => {
  const input = useRef();
  useEffect(() => {
    setTimeout(() => (input.current.value = "Hello"), 3000);
  }, []); // only executes at componentDidMount

  return (
    <>
      <h1>Hello!</h1>
      <input ref={input} placeholder="Name" />
    </>
  );
};
export default App;
