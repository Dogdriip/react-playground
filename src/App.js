import React, { useState, useEffect } from "react";

const useScroll = () => {
  const [state, setState] = useState({
    y: 0,
    x: 0
  });

  const onScroll = () => {
    // console.log(window.scrollY, " ", window.scrollX);
    setState({ y: window.scrollY, x: window.scrollX });
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return state;
};

const App = () => {
  const { y } = useScroll();

  return (
    <div style={{ height: "1000px" }}>
      <h1
        style={{
          position: "fixed",
          color: y > 100 ? "red" : "blue"
        }}
      >
        Hello!
      </h1>
    </div>
  );
};
export default App;
