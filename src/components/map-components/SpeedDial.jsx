import { BarsOutlined, CloseOutlined } from "@ant-design/icons";
import { useState } from "react";

const SpeedDial = ({ children, direction = "down" }) => {
  const [show, setShow] = useState(false);

  const getPosition = (i) => {
    if (direction == "up") return { top: `${-(i + 1) * 50}px`, left: 0 };
    if (direction == "down") return { top: `${(i + 1) * 50}px`, left: 0 };
    if (direction == "left") return { left: `${-(i + 1) * 50}px`, top: 0 };
    if (direction == "right") return { left: `${(i + 1) * 50}px`, top: 0 };
  };

  const getTransitionDelay = (i) => {
    if (show) return { transitionDelay: `${i * 100}ms` };
    else return { transitionDelay: `${(children.length - i - 1) * 100}ms` };
  };

  return (
    <>
      <div
        className="inline-block relative w-fit h-fit"
        onClick={() => setShow((show) => !show)}
      >
        <span
          className={`rounded-full bg-emerald-400 text-black w-10 h-10 flex justify-center items-center cursor-pointer transition hover:bg-emerald-500 `}
        >
          {show ? <CloseOutlined /> : <BarsOutlined />}
        </span>

        <ul className={!show ? "pointer-events-none" : ""}>
          {children.map((item, i) => (
            <li
              key={i}
              className={`absolute z-50 ${
                show ? "scale-100" : "scale-0"
              } transition duration-300`}
              style={{ ...getTransitionDelay(i), ...getPosition(i) }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SpeedDial;
