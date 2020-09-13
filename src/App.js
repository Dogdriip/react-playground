import React, { useState, useEffect, useRef } from "react";

const useClick = (onClick) => {
  if (typeof onClick !== "function") return;

  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }

    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, [onClick]);
  return element;
};

const App = () => {
  const sayHello = () => console.log("Hello!");
  const title = useClick(sayHello);
  return (
    <>
      <h1 ref={title}>Hello!</h1>
    </>
  );
};
export default App;
