import React, { useState, useEffect, useRef } from "react";

const usePreventLeave = () => {
  const listener = (e) => {
    e.preventDefault();
    e.returnValue = ""; // for chrome specific
  };

  const enablePrevent = () => {
    window.addEventListener("beforeunload", listener);
  };
  const disablePrevent = () => {
    window.removeEventListener("beforeunload", listener);
  };

  return [enablePrevent, disablePrevent];
};

const App = () => {
  const [prevent, unprevent] = usePreventLeave();

  return (
    <>
      <h1>Hello!</h1>
      <button onClick={prevent}>Prevent</button>
      <button onClick={unprevent}>Unprevent</button>
      <button onClick={() => window.location.reload()}>Reload</button>
    </>
  );
};
export default App;
