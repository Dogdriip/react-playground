import React, { useState, useRef } from "react";

const useFullscreen = (callback) => {
  const el = useRef();

  const makeFullscreen = () => {
    if (el.current) {
      el.current.requestFullscreen();
      if (callback && typeof callback === "function") {
        callback(true);
      }
    }
  };

  const exitFullscreen = () => {
    document.exitFullscreen();
    if (callback && typeof callback === "function") {
      callback(false);
    }
  };

  return { el, makeFullscreen, exitFullscreen };
};

const App = () => {
  const onFullscreen = (isFullscreen) => {
    console.log(
      isFullscreen ? "Fullscreen activated" : "Fullscreen deactivated"
    );
  };

  const { el, makeFullscreen, exitFullscreen } = useFullscreen(onFullscreen);
  return (
    <>
      <div ref={el}>
        <h1>Hello!</h1>
        <button onClick={makeFullscreen}>Make fullscreen</button>
        <button onClick={exitFullscreen}>Exit fullscreen</button>
      </div>
    </>
  );
};
export default App;
