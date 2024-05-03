import { useEffect, useState } from "react";

const Typewriter = () => {
  const [currItem, setCurrItem] = useState(0);
  const [currIndex, setCurrIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [showCursor, setShowCursor] = useState(false);
  const list = ["Seguro", "Fácil", "Rápido"];

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      if (currIndex < list[currItem].length - 1) {
        setCurrIndex(currIndex + 1);
      } else {
        setPaused(true);
        window.setTimeout(() => {
          setCurrIndex(0);
          setCurrItem((currItem + 1) % list.length);
          setPaused(false);
        }, 3000);
      }
    }, 100);

    return () => window.clearInterval(id);
  });

  useEffect(() => {
    const id2 = window.setInterval(() => {
      setShowCursor((val) => !val);
    }, 500);
    return () => window.clearInterval(id2);
  }, []);

  return (
    <>
      <div className="inline-block">
        <div
          className={`${
            showCursor ? "border-black" : "border-transparent"
          } transition pr-1 border-r-2`}
        >
          {list[currItem].slice(0, currIndex + 1)}
        </div>
      </div>
    </>
  );
};

export default Typewriter;
