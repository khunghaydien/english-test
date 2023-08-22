import React, { useRef, useState } from "react";
import "./test.scss";

function App() {
  const splitterRef = useRef<HTMLDivElement>(null);
  const leftPaneRef = useRef<HTMLDivElement>(null);
  const rightPaneRef = useRef<HTMLDivElement>(null);
  const [splitterPosition, setSplitterPosition] = useState<number>(50);
  let startMouseX = 0;
  let initialLeftPaneWidth = 50;

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    startMouseX = e.clientX;
    initialLeftPaneWidth = splitterPosition;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    const deltaX = e.clientX - startMouseX;
    const totalWidth = splitterRef.current!.parentElement!.offsetWidth;
    const leftWidth = initialLeftPaneWidth + (deltaX / totalWidth) * 100;

    if (leftWidth >= 20 && leftWidth <= 80) {
      setSplitterPosition(leftWidth);
    }
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className="App">
      <div
        className="Splitter"
        ref={splitterRef}
        onMouseDown={handleMouseDown}
        style={{ left: `calc(${splitterPosition}% - 5px)` }}
      />
      <div
        className="LeftPane"
        ref={leftPaneRef}
        style={{ width: `${splitterPosition}%` }}
      >
        <h2>Left Pane</h2>
      </div>
      <div
        className="RightPane"
        ref={rightPaneRef}
        style={{ width: `${100 - splitterPosition}%` }}
      >
        <h2>Right Pane</h2>
      </div>
    </div>
  );
}

export default App;
