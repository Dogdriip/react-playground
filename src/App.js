import React, { useState, useRef } from "react";

const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }

  const fireNoti = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };

  return fireNoti;
};

const App = () => {
  const makeNoti = useNotification("Hello!", {
    body: "I'm a Notification!"
  });

  return (
    <>
      <h1>Hello!</h1>
      <button onClick={makeNoti}>Make notification!</button>
    </>
  );
};
export default App;
