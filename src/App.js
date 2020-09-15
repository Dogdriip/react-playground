import React, { useState, useEffect, useRef } from "react";

const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);

  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);

    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);

  return status;
};

const App = () => {
  const handleNetworkChange = (online) => {
    console.log(online ? "We're online!" : "We're offline...");
  };
  const isOnline = useNetwork(handleNetworkChange);
  return (
    <>
      <h1>{isOnline ? "Online" : "Offline"}</h1>
    </>
  );
};
export default App;
