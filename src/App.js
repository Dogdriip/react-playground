import React, { useState, useEffect, useRef } from "react";

const useConfirm = (message, onConfirm, onCancel) => {
  if (!onConfirm || typeof onConfirm !== "function") return;
  if (!onCancel || typeof onCancel !== "function") return;

  const confirmAction = () => {
    if (confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };

  return confirmAction;
};

const App = () => {
  const deleteSomething = () => console.log("Deleted!");
  const abort = () => console.log("Aborted!");

  const confirmDelete = useConfirm("Are you sure?", deleteSomething, abort);

  return (
    <>
      <h1>Hello!</h1>
      <button onClick={confirmDelete}>Delete something</button>
    </>
  );
};
export default App;
