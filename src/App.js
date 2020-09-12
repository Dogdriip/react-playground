import React, { useState } from "react";

const contents = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1!"
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2!"
  },
  {
    tab: "Section 3",
    content: "I'm the content of the Section 3!"
  }
];

const useTabs = (initialTab, allTabs) => {
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }

  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  };
};

const App = () => {
  const { currentItem, changeItem } = useTabs(0, contents);
  return (
    <>
      <h1>Hello!</h1>
      {contents.map((content, idx) => (
        <button onClick={() => changeItem(idx)}>{content.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </>
  );
};
export default App;
