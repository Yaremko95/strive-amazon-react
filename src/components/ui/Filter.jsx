import React, { memo, useState, useRef, useEffect } from "react";
import { Form } from "react-bootstrap";
import ResizeObserver from "resize-observer-polyfill";
import { useSpring, animated } from "react-spring";
import { AiOutlinePlusSquare } from "react-icons/all";

export function usePrevious(value) {
  const ref = useRef();
  useEffect(() => void (ref.current = value), [value]);
  return ref.current;
}

export function useMeasure() {
  const ref = useRef();
  const [bounds, set] = useState({ left: 0, top: 0, width: 0, height: 0 });
  const [ro] = useState(
    () => new ResizeObserver(([entry]) => set(entry.contentRect))
  );
  useEffect(() => {
    if (ref.current) ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);
  return [{ ref }, bounds];
}

const Tree = memo(({ children, name, style, defaultOpen = false }) => {
  const [isOpen, setOpen] = useState(defaultOpen);
  const previous = usePrevious(isOpen);
  const [bind, { height: viewHeight }] = useMeasure();
  console.log("tree", bind, { height: viewHeight });
  const { height, opacity, transform } = useSpring({
    from: { height: 0, opacity: 0, transform: "translate3d(20px,0,0)" },
    to: {
      height: isOpen ? viewHeight : 0,
      opacity: isOpen ? 1 : 0,
      transform: `translate3d(${isOpen ? 0 : 20}px,0,0)`,
    },
  });

  return (
    <div
      style={{
        position: "relative",
        padding: "4px 0px 0px 0px",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflowX: "hidden",
        verticalAlign: "middle",
        color: "black",
        fill: "white",
      }}
    >
      <AiOutlinePlusSquare
        style={{ opacity: children ? 1 : 0.3 }}
        onClick={() => setOpen(!isOpen)}
      />
      <span style={{ fontSize: "1.5rem" }}>{name}</span>
      <animated.div
        style={{
          willChange: "transform, opacity, height",
          marginLeft: " 6px",
          padding: "0px 0px 0px 14px",
          borderLeft: "1px dashed rgba(255, 255, 255, 0.4)",
          overflow: "hidden",
          opacity,
          height: isOpen && previous === isOpen ? "auto" : height,
        }}
      >
        <animated.div style={{ transform }} {...bind} children={children} />
      </animated.div>
    </div>
  );
});
function Filter(props) {
  const { toggleCheckBox, filter } = props;

  return (
    <Tree name={"Filter"}>
      <Form.Check
        type="checkbox"
        id={`radio`}
        label={`smartphones`}
        onChange={() =>
          toggleCheckBox((state) => {
            const stateCopy = { ...state };
            if (stateCopy.category.includes("smartphones")) {
              stateCopy.category = stateCopy.category.filter(
                (item) => item !== "smartphones"
              );
            } else {
              stateCopy.category = [...stateCopy.category, "smartphones"];
            }
            return stateCopy;
          })
        }
      />

      <Form.Check
        type="checkbox"
        id={`radio`}
        label={`books`}
        onChange={() =>
          toggleCheckBox((state) => {
            const stateCopy = { ...state };
            if (stateCopy.category.includes("books")) {
              stateCopy.category = stateCopy.category.filter(
                (item) => item !== "books"
              );
            } else {
              stateCopy.category = [...stateCopy.category, "books"];
            }
            return stateCopy;
          })
        }
      />
      <Form.Check
        type="checkbox"
        id={`radio`}
        label={`laptops`}
        onChange={() =>
          toggleCheckBox((state) => {
            const stateCopy = { ...state };
            if (stateCopy.category.includes("laptops")) {
              stateCopy.category = stateCopy.category.filter(
                (item) => item !== "laptops"
              );
            } else {
              stateCopy.category = [...stateCopy.category, "laptops"];
            }
            return stateCopy;
          })
        }
      />
    </Tree>
  );
}

export default Filter;
