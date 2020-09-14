import React, { useState, useEffect, useRef } from "react";

const useBeforeLeave = (onBefore) => {
  if (!onBefore || typeof onBefore !== "function") return;

  const handle = () => onBefore();

  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};

const App = () => {
  const messager = () => console.log("Don't leave!");
  useBeforeLeave(messager);
  return (
    <>
      <h1>Hello!</h1>
      <button onClick={() => window.location.reload()}>Reload</button>
    </>
  );
};
export default App;
