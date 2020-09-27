import React, { useState, useRef } from "react";
import useAxios from "./useAxios";

const App = () => {
  const { loading, error, data, refetch } = useAxios({
    url: "https://yts-proxy.now.sh/list_movies.json"
  });
  return (
    <>
      <h1>Hello!</h1>
      <h2>{loading && "Loading..."}</h2>
      <button onClick={refetch}>Refetch</button>
      <p>{data && JSON.stringify(data)}</p>
    </>
  );
};
export default App;
