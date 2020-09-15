import React, { useState, useEffect, useRef } from "react";

const useFadeIn = (duration = 2, delay = 1) => {
  if (typeof duration !== "number" || typeof delay !== "number") {
    return;
  }

  const element = useRef();

  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);

  return { ref: element, style: { opacity: 0 } };
};

const App = () => {
  const fadeInH1 = useFadeIn(1, 2);
  const fadeInP = useFadeIn(3, 4);

  return (
    <>
      <h1 {...fadeInH1}>Hello!</h1>
      <p {...fadeInP}>This is a paragraph</p>
    </>
  );
};
export default App;
